
"use client";

import { useState, useEffect } from 'react';
import { collectionGroup, getDocs, deleteDoc, doc, updateDoc, query, where, orderBy, DocumentData } from 'firebase/firestore';
import { firestore } from '@/firebase';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Check, Trash, X } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

export default function ManageCommentsPage() {
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<{ insightId: string, commentId: string } | null>(null);
  const { toast } = useToast();

  const fetchComments = async () => {
    setLoading(true);
    try {
      const q = query(collectionGroup(firestore, 'comments'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        insightId: doc.ref.parent.parent?.id,
        ...doc.data()
      }));
      setComments(commentsData);
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error loading comments',
        description: err.message || 'Could not fetch comments.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleApproveClick = async (insightId: string, commentId: string, approved: boolean) => {
    try {
      const commentRef = doc(firestore, `insights/${insightId}/comments/${commentId}`);
      await updateDoc(commentRef, { approved: !approved });
      toast({
        title: 'Success',
        description: `Comment ${!approved ? 'approved' : 'unapproved'} successfully.`,
      });
      fetchComments(); // Refresh the list
    } catch (err: any) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: err.message,
        });
    }
  };

  const handleDeleteClick = (insightId: string, commentId: string) => {
    setCommentToDelete({ insightId, commentId });
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (!commentToDelete) return;
    try {
      await deleteDoc(doc(firestore, `insights/${commentToDelete.insightId}/comments/${commentToDelete.commentId}`));
      toast({
        title: 'Success',
        description: 'Comment deleted successfully.',
      });
      fetchComments(); // Refresh the list
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message,
      });
    } finally {
      setShowDeleteDialog(false);
      setCommentToDelete(null);
    }
  };

  if (loading) {
    return <p>Loading comments for moderation...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Moderate Comments</h1>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Insight</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {comments.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={6} className="text-center">No comments found.</TableCell>
                </TableRow>
            ) : (
                comments.map(comment => (
                <TableRow key={comment.id}>
                    <TableCell>
                        {comment.createdAt ? format(comment.createdAt.toDate(), 'PPp') : 'N/A'}
                    </TableCell>
                    <TableCell className="font-medium">{comment.author}</TableCell>
                    <TableCell className="max-w-xs truncate">{comment.text}</TableCell>
                    <TableCell>
                        <Link href={`/insights/${comment.insightSlug}`} className="underline hover:text-primary">
                            {comment.insightTitle}
                        </Link>
                    </TableCell>
                    <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${comment.approved ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                            {comment.approved ? 'Approved' : 'Pending'}
                        </span>
                    </TableCell>
                    <TableCell className="text-right">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleApproveClick(comment.insightId, comment.id, comment.approved)}
                    >
                       {comment.approved ? <X className="h-4 w-4 text-orange-500" /> : <Check className="h-4 w-4 text-green-500" />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(comment.insightId, comment.id)}
                    >
                        <Trash className="h-4 w-4 text-destructive" />
                    </Button>
                    </TableCell>
                </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the comment.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
