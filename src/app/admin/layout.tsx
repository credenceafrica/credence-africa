"use client";

import { signOut } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AdminShell } from "@/components/admin/shell";
import { auth } from "@/firebase";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [user, loading] = useAuthState(auth!);
  const router = useRouter();
  const onLogin = usePathname() === "/admin/login";

  useEffect(() => {
    if (loading) return;
    if (!user && !onLogin) router.replace("/admin/login");
    if (user && onLogin) router.replace("/admin");
  }, [user, loading, onLogin, router]);

  // The sign-in page shows at once; it moves on by itself if the session turns out to be signed in.
  if (onLogin) return user ? null : <>{children}</>;

  if (loading || !user) {
    return (
      <div role="status" aria-label="Checking your sign-in" className="grid min-h-dvh place-items-center bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="" width={902} height={98} className="h-[21px] w-auto animate-pulse" />
      </div>
    );
  }

  return (
    <AdminShell
      email={user.email ?? ""}
      onSignOut={async () => {
        await signOut(auth!);
        router.replace("/admin/login");
      }}
    >
      {children}
    </AdminShell>
  );
}
