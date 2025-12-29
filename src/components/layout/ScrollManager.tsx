import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MAX_HASH_SCROLL_ATTEMPTS = 10;
const HASH_SCROLL_RETRY_MS = 50;

function getHeaderOffset() {
  const header = document.getElementById("site-header");
  return header ? Math.ceil(header.getBoundingClientRect().height) : 0;
}

function scrollToElementId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const headerOffset = getHeaderOffset();
  const extraGap = 12;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - extraGap;

  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
  return true;
}

export default function ScrollManager() {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);

  useEffect(() => {
    let cancelled = false;

    const hash = location.hash;
    const pathChanged = previousPathRef.current !== location.pathname;
    previousPathRef.current = location.pathname;

    // If navigating to a new page (no hash or path changed), scroll to top immediately
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    // If there's a hash, scroll to that element
    const id = decodeURIComponent(hash.slice(1));

    const tryScroll = (attempt: number) => {
      if (cancelled) return;

      const ok = scrollToElementId(id);
      if (!ok && attempt < MAX_HASH_SCROLL_ATTEMPTS) {
        window.setTimeout(() => tryScroll(attempt + 1), HASH_SCROLL_RETRY_MS);
      }
    };

    // Small delay to ensure the page has rendered
    if (pathChanged) {
      window.setTimeout(() => tryScroll(0), 10);
    } else {
      tryScroll(0);
    }

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash, location.key]);

  return null;
}
