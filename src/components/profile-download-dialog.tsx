"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Eye, ArrowRight } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

const PROFILE_PDF = "/profile.pdf";
const PROFILE_FILENAME = "Credence-Africa-Company-Profile.pdf";

const fieldClass =
  "h-11 rounded-none border-foreground/20 bg-white text-base text-foreground placeholder:text-foreground/55 focus-visible:ring-primary";

type LeadForm = { name: string; email: string; company: string; phone: string };

export function ProfileDownloadDialog({
  triggerClassName,
  label = "Download Company Profile",
}: {
  triggerClassName?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [form, setForm] = useState<LeadForm>({ name: "", email: "", company: "", phone: "" });
  const { toast } = useToast();

  const update =
    (key: keyof LeadForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ variant: "destructive", title: "Name and email are required." });
      return;
    }
    if (!firestore) {
      toast({ variant: "destructive", title: "Something went wrong", description: "Please email us directly." });
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(firestore, "profileLeads"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setUnlocked(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your details did not send. Please try again or email us directly.",
      });
      console.error("Error saving profile lead: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>
          <Download className="mr-2 size-5" aria-hidden="true" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none border-foreground/15 sm:max-w-md">
        {unlocked ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-normal text-foreground">Your profile is ready</DialogTitle>
              <DialogDescription className="text-foreground/70">
                Preview it in your browser or download the PDF. Thank you for connecting with us.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 flex flex-col gap-3">
              <Button
                asChild
                className="h-14 rounded-none border-none bg-primary text-base font-light text-foreground hover:bg-primary/90"
              >
                <a href={PROFILE_PDF} download={PROFILE_FILENAME}>
                  <Download className="mr-2 size-5" aria-hidden="true" />
                  Download the PDF
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-none border-2 border-foreground/20 bg-white text-base font-light text-foreground hover:bg-foreground hover:text-background"
              >
                <a href={PROFILE_PDF} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 size-5" aria-hidden="true" />
                  Preview in browser
                </a>
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-normal text-foreground">Get the company profile</DialogTitle>
              <DialogDescription className="text-foreground/70">
                Tell us where to reach you and we will unlock the download and preview.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="mt-2 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="pl-name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="pl-name"
                  className={fieldClass}
                  placeholder="Full name"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pl-email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="pl-email"
                  type="email"
                  className={fieldClass}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="pl-company" className="text-foreground">
                    Company (optional)
                  </Label>
                  <Input
                    id="pl-company"
                    className={fieldClass}
                    placeholder="Organization"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pl-phone" className="text-foreground">
                    Phone (optional)
                  </Label>
                  <Input
                    id="pl-phone"
                    className={fieldClass}
                    placeholder="+254 712 345678"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="h-14 w-full rounded-none border-none bg-primary text-base font-light text-foreground hover:bg-primary/90"
              >
                {loading ? "Submitting…" : "Unlock the profile"}
                {!loading && <ArrowRight className="ml-2 size-4" aria-hidden="true" />}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
