type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

/** Sends a GA4 event. A no-op where the tag isn't loaded (development builds, ad blockers). */
export function track(name: string, params?: Record<string, unknown>) {
  (window as Window & { gtag?: Gtag }).gtag?.("event", name, params);
}
