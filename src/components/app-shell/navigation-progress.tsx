"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A thin bar at the very top while a page is loading, so a click never looks
 * like "nothing happens". Starts on a click on a link to another page (and on
 * the browser's back / forward), ends when the new page is shown.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const search = useSearchParams();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const trickle = useRef<ReturnType<typeof setInterval> | null>(null);
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopTimers = useCallback(() => {
    if (trickle.current) clearInterval(trickle.current);
    if (safety.current) clearTimeout(safety.current);
    trickle.current = null;
    safety.current = null;
  }, []);

  const done = useCallback(() => {
    stopTimers();
    setWidth((w) => (w > 0 ? 100 : 0));
    setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 250);
  }, [stopTimers]);

  // The new page is here.
  const location = `${pathname}?${search.toString()}`;
  const last = useRef(location);
  useEffect(() => {
    if (last.current === location) return;
    last.current = location;
    done();
  }, [location, done]);

  useEffect(() => {
    function start() {
      stopTimers();
      setVisible(true);
      setWidth(8);
      // Creeps towards 90% while waiting.
      trickle.current = setInterval(() => setWidth((w) => (w < 90 ? w + (90 - w) * 0.1 : w)), 200);
      // Never hang around: give up after 15 seconds.
      safety.current = setTimeout(done, 15_000);
    }
    function onClick(e: MouseEvent) {
      // (Checked before the app's own link handling, which cancels the browser's navigation.)
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Same page (maybe another #anchor): nothing to load.
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      start();
    }
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", start);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", start);
      stopTimers();
    };
  }, [done, stopTimers]);

  if (!visible) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1" role="progressbar" aria-label="…" aria-hidden="true">
      <div className="h-full bg-primary shadow-[0_0_8px] shadow-primary transition-[width] duration-200 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
}
