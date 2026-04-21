import { redirect } from "next/navigation";
import { resolveEventShortLink } from "@/lib/external-data";

export const dynamic = "force-dynamic";

export default async function EventShortLinkPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const resolution = await resolveEventShortLink(code);

  if (!resolution) {
    redirect("/services/events#portfolio");
  }

  redirect(`/services/events/${resolution.eventId}`);
}
