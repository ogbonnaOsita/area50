import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Area50 Tech | Custom Software Solutions & Innovative Technology",
  description:
    "Area50 Tech provides expert custom software development, web applications, and innovative technology solutions. Transform your ideas into reality with our experienced team.",
  keywords: [
    "custom software development",
    "software solutions",
    "web application development",
    "technology consulting",
    "innovative technology",
    "area50 tech",
    "react development",
    "node.js development",
  ],
  openGraph: {
    title: "Area50 Tech | Custom Software Solutions & Innovative Technology",
    description:
      "Area50 Tech provides expert custom software development, web applications, and innovative technology solutions. Transform your ideas into reality with our experienced team.",
    url: "https://www.area50tech.com",
    siteName: "Area50 Tech",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Area50 Tech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Area50 Tech | Custom Software Solutions & Innovative Technology",
    description:
      "Area50 Tech provides expert custom software development, web applications, and innovative technology solutions. Transform your ideas into reality with our experienced team.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    // Add these only if needed:
    //  nocache: true
    // noimageindex: true
    // nosnippet: true
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        inmaintabuse="1"
        data-new-gr-c-s-check-loaded="14.1215.0"
        data-gr-ext-installed=""
      >
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
