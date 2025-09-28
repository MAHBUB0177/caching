import "./globals.css";
import OfflineBanner from "./offline-banner";
import Provider from "./provider";


export const metadata = {
  title: "My Next PWA",
  description: "Next.js 15 PWA example",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Provider>
          {/* <Header /> */}
          <OfflineBanner />

          <main className="flex-1">
            {children || <div className="text-center mt-10">⚠️ Offline content fallback…</div>}
          </main>

          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  );
}
