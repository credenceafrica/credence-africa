import { navMenus } from "@/lib/site-map";
import { Header } from "./header";

/**
 * Builds the menus on the server so the page copy in the content modules stays
 * out of the client bundle; only labels and links reach the browser.
 */
export function SiteHeader() {
  return <Header menus={navMenus} />;
}
