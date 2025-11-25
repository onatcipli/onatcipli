import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe | Mobile App Developer",
  description:
    "Senior iOS & Android developer crafting beautiful, performant mobile experiences. 8+ years of experience, 25+ published apps.",
  keywords: [
    "mobile developer",
    "iOS developer",
    "Android developer",
    "Swift",
    "Kotlin",
    "Flutter",
    "React Native",
    "app development",
  ],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | Mobile App Developer",
    description:
      "Senior iOS & Android developer crafting beautiful, performant mobile experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Mobile App Developer",
    description:
      "Senior iOS & Android developer crafting beautiful, performant mobile experiences.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts loaded via link tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[--bg-primary] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
