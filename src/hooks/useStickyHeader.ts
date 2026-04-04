"use client";

import { useEffect, useRef } from "react";

export default function useStickyHeader(
  selector = ".tp-int-menu",
  threshold = 500
) {
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stickyMenu = document.querySelector(selector);
    if (!stickyMenu) {
      return;
    }

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTopRef.current || currentScrollTop <= threshold) {
        stickyMenu.classList.remove("tp-header-pinned");
      } else {
        stickyMenu.classList.add("tp-header-pinned");
      }

      lastScrollTopRef.current = Math.max(currentScrollTop, 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, threshold]);
}
