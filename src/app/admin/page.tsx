
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { auth, db } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { List, Newspaper, MessagesSquare, FileText } from "lucide-react";

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [insightCount, setInsightCount] = useState(0);
  const [consultationCount, setConsultationCount] = useState(0);
  const [caseStudyRequestCount, setCaseStudyRequestCount] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    } else if (user) {
      const fetchData = async () => {
        const insightsSnapshot = await getDocs(collection(db, "insights"));
        setInsightCount(insightsSnapshot.size);
        
        const consultationsSnapshot = await getDocs(collection(db, "consultations"));
        setConsultationCount(consultationsSnapshot.size);

        const caseStudyRequestsSnapshot = await getDocs(collection(db, "caseStudyAccessRequests"));
        setCaseStudyRequestCount(caseStudyRequestsSnapshot.size);
      };
      fetchData();
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Insights</CardTitle>
            <CardDescription>The total number of insights you have created.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{insightCount}</p>
             <Button asChild variant="outline" className="mt-4">
                <Link href="/admin/insights">
                    <Newspaper className="mr-2 h-4 w-4" />
                    Manage Insights
                </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consultation Requests</CardTitle>
            <CardDescription>New requests from the consultation form.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{consultationCount}</p>
             <Button asChild variant="outline" className="mt-4">
                <Link href="/admin/consultations">
                    <MessagesSquare className="mr-2 h-4 w-4" />
                    View Consultations
                </Link>
            </Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle>Case Study Requests</CardTitle>
            <CardDescription>Requests for full case study reports.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{caseStudyRequestCount}</p>
             <Button asChild variant="outline" className="mt-4">
                <Link href="/admin/case-study-requests">
                    <FileText className="mr-2 h-4 w-4" />
                    View Requests
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
