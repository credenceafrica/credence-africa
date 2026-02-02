
"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, DocumentData, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
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
import { Trash } from 'lucide-react';
import { format } from 'date-fns';

export default function ManageCaseStudyRequestsPage() {
  const [requests, setRequests] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchRequests = async () => {
    setLoading(true);
    const q = query(collection(db, 'caseStudyAccessRequests'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const requestsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRequests(requestsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleDeleteClick = (id: string) => {
    setRequestToDelete(id);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (!requestToDelete) return;
    try {
      await deleteDoc(doc(db, 'caseStudyAccessRequests', requestToDelete));
      toast({
        title: 'Success',
        description: 'Request deleted successfully.',
      });
      fetchRequests(); // Refresh the list
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message,
      });
    } finally {
      setShowDeleteDialog(false);
      setRequestToDelete(null);
    }
  };

  if (loading) {
    return <p>Loading case study access requests...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Case Study Access Requests</h1>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
               <TableHead>Organization</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {requests.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={6} className="text-center">No requests found.</TableCell>
                </TableRow>
            ) : (
                requests.map(request => (
                <TableRow key={request.id}>
                    <TableCell>
                        {request.createdAt ? format(request.createdAt.toDate(), 'PPp') : 'N/A'}
                    </TableCell>
                    <TableCell className="font-medium">{request.fullName}</TableCell>
                    <TableCell>{request.email}</TableCell>
                    <TableCell>{request.phone}</TableCell>
                     <TableCell>{request.organization}</TableCell>
                    <TableCell className="text-right">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(request.id)}
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
              This action cannot be undone. This will permanently delete the request.
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

