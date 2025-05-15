import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Author */}
        <meta name="author" content="Israel Alonso" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="portafolio, desarrollador web, Israel Alonso, proyectos, tecnología"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.isalonso.dev" />

        {/* Open Graph */}
        <meta property="og:title" content="Israel Alonso Portfolio" />
        <meta
          property="og:description"
          content="Explora el portafolio de Israel Alonso, desarrollador web."
        />
        <meta property="og:image" content="/icons/og-image.png" />
        <meta property="og:url" content="https://www.isalonso.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Israel Alonso Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Israel Alonso Portfolio" />
        <meta
          name="twitter:description"
          content="Explora el portafolio de Israel Alonso, desarrollador web."
        />
        <meta name="twitter:image" content="/icons/og-image.png" />
        <meta name="twitter:site" content="@IsraelAlonso" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
