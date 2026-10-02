import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mauricio Miño — Software Engineer & Product Builder",
  description:
    "Senior software engineer in Argentina. Building thoughtful digital products across healthcare, mobile, and fintech. Currently at Bask Health.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Mauricio Miño — Software Engineer & Product Builder",
    description:
      "Serious engineering. A little obsession. Explore selected work and get in touch.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
