"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { ArrowLeft, Eye, EyeOff, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { button, field, fieldLabel } from "@/components/admin/ui";
import { auth } from "@/firebase";
import { cn } from "@/lib/utils";

function problem(code?: string) {
  if (code === "auth/too-many-requests") return "Too many attempts. Wait a few minutes, then try again.";
  if (code === "auth/network-request-failed") return "Could not reach the sign-in service. Check your connection and try again.";
  if (code === "auth/user-disabled") return "This account has been switched off.";
  if (code && /credential|password|user-not-found|invalid-email/.test(code)) return "That email and password do not match an admin account.";
  return "Sign-in did not go through. Please try again.";
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth!, email, password);
      router.replace("/admin");
    } catch (err) {
      setError(problem((err as { code?: string }).code));
      setBusy(false);
    }
  };

  return (
    <main className="grid min-h-dvh bg-white text-base text-ink lg:grid-cols-[minmax(0,1.15fr)_minmax(480px,1fr)]">
      <section aria-hidden className="ph-city hidden flex-col justify-between p-12 text-white lg:flex xl:p-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-light.png" alt="" width={902} height={98} className="h-[22px] w-auto self-start" />
        <div>
          <p className="eb text-[12.5px] text-body-dark">Admin</p>
          <p className="mt-6 max-w-[15ch] text-balance text-[52px] font-light leading-[1.02] tracking-[-0.04em] xl:text-[60px]">
            Publish insights, answer enquiries and send briefings.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center px-6 py-14 sm:px-12">
        <div className="mx-auto w-full max-w-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Credence Africa" width={902} height={98} className="mb-14 h-[19px] w-auto lg:hidden" />
          <h1 className="text-[34px] leading-[1.05] tracking-[-0.035em] text-ink">Sign in</h1>
          <p className="mt-2.5 text-[15px] text-body-3">Use your Credence Africa admin account.</p>

          <form onSubmit={handleLogin} className="mt-9 space-y-5">
            <div>
              <label htmlFor="email" className={fieldLabel}>
                Email
              </label>
              <input id="email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
            </div>
            <div>
              <label htmlFor="password" className={fieldLabel}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(field, "pr-12")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((shown) => !shown)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-0 grid w-11 cursor-pointer place-items-center text-body-3 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                >
                  {showPassword ? <EyeOff aria-hidden className="size-[18px]" /> : <Eye aria-hidden className="size-[18px]" />}
                </button>
              </div>
            </div>
            {error && (
              <p role="alert" className="flex gap-2.5 border border-[#F4C7C3] bg-[#FEF3F2] px-4 py-3 text-[14px] text-[#912018]">
                <TriangleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
                {error}
              </p>
            )}
            <button type="submit" disabled={busy} className={cn(button(), "!mt-8 h-12 w-full")}>
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <a href="/" className="group mt-12 inline-flex items-center gap-1.5 text-[13.5px] text-body-3 transition-colors hover:text-ink">
            <ArrowLeft aria-hidden className="size-4 transition-transform duration-150 group-hover:-translate-x-0.5" />
            Back to the website
          </a>
        </div>
      </section>
    </main>
  );
}
