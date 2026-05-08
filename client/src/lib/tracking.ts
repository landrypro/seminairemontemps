type TrackingParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function initMetaPixel(pixelId?: string) {
  if (!isBrowser() || !pixelId || window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[];
    push: typeof fbq;
    loaded: boolean;
    version: string;
  };

  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";

  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode?.insertBefore(script, firstScript);

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

export function initGA4(measurementId?: string) {
  if (!isBrowser() || !measurementId || window.gtag) return;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode?.insertBefore(script, firstScript);

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

export function trackMeta(eventName: string, params?: TrackingParams) {
  if (!isBrowser()) return;
  window.fbq?.("track", eventName, params || {});
}

export function trackMetaCustom(eventName: string, params?: TrackingParams) {
  if (!isBrowser()) return;
  window.fbq?.("trackCustom", eventName, params || {});
}

export function trackGA4(eventName: string, params?: TrackingParams) {
  if (!isBrowser()) return;
  window.gtag?.("event", eventName, params || {});
}

export function trackLead(params?: TrackingParams) {
  trackMeta("Lead", params);
  trackGA4("generate_lead", params);
}

export function trackWhatsAppContact(params?: TrackingParams) {
  trackMeta("Contact", {
    channel: "whatsapp",
    ...params,
  });

  trackGA4("contact_whatsapp", {
    channel: "whatsapp",
    ...params,
  });
}

export function trackTelegramClick(params?: TrackingParams) {
  trackMetaCustom("TelegramClick", {
    channel: "telegram",
    ...params,
  });

  trackGA4("join_group", {
    group_id: "seminaire_mon_temps_telegram",
    channel: "telegram",
    ...params,
  });
}

export function trackFlyerDownload(params?: TrackingParams) {
  trackMetaCustom("DownloadFlyer", params);
  trackGA4("download_flyer", params);
}

export function trackScroll50(params?: TrackingParams) {
  trackMetaCustom("Scroll_50", params);
  trackGA4("scroll_50", params);
}

export function trackViewContent(params?: TrackingParams) {
  trackMeta("ViewContent", params);
  trackGA4("view_item", params);
}