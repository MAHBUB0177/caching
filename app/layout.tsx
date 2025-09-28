import { Metadata } from "next";
import "./globals.css";
import OfflineBanner from "./offline-banner";
import Provider from "./provider";

// ✅ Proper metadata (no "...")
export const metadata: Metadata = {
  title: "My Offline App",
  description: "A sample Next.js 14 PWA",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: [
    { rel: "icon", url: "/icons/icon-192x192.png" },
    { rel: "apple-touch-icon", url: "/icons/icon-512x512.png" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Provider>
          {/* <Header /> */}

          {/* Show a banner when offline */}
          <OfflineBanner />

          <main className="flex-1 p-4">
            {children ?? (
              <div className="text-center mt-10 text-gray-600">
                ⚠️ You are offline. Content fallback…
              </div>
            )}
          </main>

          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  );
}
