import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#05070D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Anggit Maulana Abdi — AI, Robotics & Software",
  description:
    "Personal portfolio of Anggit Maulana Abdi — exploring artificial intelligence, robotics, software, cybersecurity, data, and creative technology.",
  authors: [{ name: "Anggit Maulana Abdi" }],
  keywords: [
    "Anggit Maulana Abdi",
    "Robotics",
    "Artificial Intelligence",
    "Computer Vision",
    "Cybersecurity",
    "Software Engineering",
    "MAN 2 Wonosobo",
    "STARDUST",
  ],
  metadataBase: new URL("https://anggit.dev"),
  openGraph: {
    title: "Anggit Maulana Abdi — AI, Robotics & Software",
    description:
      "Personal portfolio of Anggit Maulana Abdi — exploring artificial intelligence, robotics, software, cybersecurity, data, and creative technology.",
    url: "https://anggit.dev",
    siteName: "STARDUST — Anggit Maulana Abdi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anggit Maulana Abdi — AI, Robotics & Software",
    description:
      "Personal portfolio of Anggit Maulana Abdi — exploring artificial intelligence, robotics, software, cybersecurity, data, and creative technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-space-950 text-text-primary antialiased selection:bg-stardust-gold-subtle selection:text-white">
        {children}
      </body>
    </html>
  );
}
