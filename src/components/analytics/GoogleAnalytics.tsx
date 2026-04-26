"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackLeadEvent } from "./gaEvents";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-Q3YJ0S421Y";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const handleContactLinkClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest("a[href]");
      const href = link?.getAttribute("href");

      if (!href) {
        return;
      }

      if (href.startsWith("mailto:")) {
        trackLeadEvent("contact_email_click", {
          contact_method: "email",
          link_url: href,
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackLeadEvent("contact_phone_click", {
          contact_method: "phone",
          link_url: href,
        });
        return;
      }

      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackLeadEvent("contact_whatsapp_click", {
          contact_method: "whatsapp",
          link_url: href,
        });
        return;
      }

      if (href.includes("t.me/")) {
        trackLeadEvent("contact_telegram_click", {
          contact_method: "telegram",
          link_url: href,
        });
      }
    };

    document.addEventListener("click", handleContactLinkClick);

    return () => {
      document.removeEventListener("click", handleContactLinkClick);
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
