"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, DocumentData, orderBy, query } from 'firebase/firestore';
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
import { Trash } from 'lucide-react';
import { format } from 'date-fns';

export default function ManageProfileLeadsPage() {
  const [leads, setLeads] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchLeads = async () => {
    if (!firestore) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const q = query(collection(firestore, 'profileLeads'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const leadsData = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setLeads(leadsData);
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error loading leads',
        description: err.message || 'Could not fetch company-profile leads.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDeleteClick = (id: string) => {
    setLeadToDelete(id);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (!leadToDelete || !firestore) return;
    try {
      await deleteDoc(doc(firestore, 'profileLeads', leadToDelete));
      toast({ title: 'Success', description: 'Lead deleted successfully.' });
      fetchLeads();
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Error', description: err.message });
    } finally {
      setShowDeleteDialog(false);
      setLeadToDelete(null);
    }
  };

  if (loading) {
    return <p>Loading company-profile leads...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Company Profile Leads</h1>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">No leads found.</TableCell>
              </TableRow>
            ) : (
              leads.map(lead => (
                <TableRow key={lead.id}>
                  <TableCell>
                    {lead.createdAt ? format(lead.createdAt.toDate(), 'PPp') : 'N/A'}
                  </TableCell>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.company || '-'}</TableCell>
                  <TableCell>{lead.phone || '-'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(lead.id)}>
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
              This action cannot be undone. This will permanently delete the lead.
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
