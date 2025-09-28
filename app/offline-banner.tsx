"use client";
import Headre from "@/component/ headre";
import Footer from "@/component/footer";
import { useEffect, useState } from "react";

export default function OfflineBanner() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    // safe check for browser
    const initialStatus = typeof navigator !== "undefined" && !navigator.onLine;
    setOffline(initialStatus);

    const goOnline = () => setOffline(false);
    const goOffline = () => setOffline(true);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="bg-yellow-300 text-center p-2">
      ⚠️  <Headre />
      <main className="flex-1 flex items-center justify-center">
        <p className="text-center">⚠️ You are offline. Some content may not be available.</p>
      </main>
      <Footer />
    </div>
  );
}
