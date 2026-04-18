import { useEffect } from "react";

/**
 * Always start at the top on page load. If there's a hash (e.g. user followed
 * a "#services" link), smooth-scroll to it AFTER layout settles. Prevents the
 * browser from restoring a stale scroll position or landing mid-page on refresh.
 */
export function ScrollManager() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Strip the hash so a refresh won't re-trigger, then smooth-scroll once
    // the DOM has the target.
    const id = hash.slice(1);
    window.history.replaceState(null, "", window.location.pathname);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo(0, 0);
    });
  }, []);

  return null;
}
