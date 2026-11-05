import { useEffect } from "react";
import { site } from "../data/site";

export function usePageTitle(title?: string): void {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name;
  }, [title]);
}
