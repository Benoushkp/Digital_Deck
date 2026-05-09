import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubai Mall — The World's Most Visited Lifestyle Destination",
  description:
    "Dubai Mall is the world's largest shopping and entertainment destination. Home to 1,200+ retail brands, 200 dining venues, world-class entertainment, and 100 million annual visitors. Partner with us.",
  keywords:
    "Dubai Mall, luxury retail, shopping destination, Dubai, tenant leasing, brand partnerships, events, sponsorship",
  openGraph: {
    title: "Dubai Mall — A Global Destination",
    description: "More than a mall. 100 million visitors. 1,200 luxury brands. The world's most iconic lifestyle destination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
