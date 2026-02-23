"use client";
import { useEffect } from "react";

/**
 * Component to defer loading of non-critical CSS
 * This moves Tailwind and animation CSS out of the critical rendering path
 */
export default function DeferredStyles() {
  useEffect(() => {
    // Load non-critical stylesheets after initial render
    const loadDeferredStyles = () => {
      // tw-animate-css is non-critical (only animations)
      const animateLink = document.createElement("link");
      animateLink.rel = "stylesheet";
      animateLink.href = "/deferred-styles.css"; // We'll create this file
      document.head.appendChild(animateLink);
    };

    // Load after the page becomes idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadDeferredStyles);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(loadDeferredStyles, 1);
    }
  }, []);

  return null;
}
