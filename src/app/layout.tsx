import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bragastudio.id"),

  title: {
    default: "Braga Studio | Architecture & Interior Design",
    template: "%s | Braga Studio",
  },

  icons: {
    icon: "/images/braga-only.png",
  },

  description:
    "Braga Studio adalah studio arsitek dan desain interior profesional yang menghadirkan desain elegan, fungsional, dan berkelanjutan untuk hunian dan bangunan komersial.",

  keywords: [
    "Braga Studio",
    "arsitek Indonesia",
    "desain arsitektur",
    "arsitek rumah",
    "desain bangunan komersial",
    "desain hunian",
    "jasa arsitek",
    "studio arsitek Ponorogo",
    "jasa arsitek profesional",
    "desain interior",
    "studio arsitek",
  ],

  openGraph: {
    title: "Braga Studio | Architecture & Interior Design",
    description:
      "Studio arsitek dan desain interior profesional dengan pendekatan modern, elegan, dan berkelanjutan.",
    url: "https://bragastudio.id",
    siteName: "Braga Studio",
    images: [
      {
        url: "/images/braga-only.png",
        width: 1200,
        height: 630,
        alt: "Braga Studio Architecture",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Braga Studio | Architecture & Interior Design",
    description:
      "Studio arsitek profesional untuk desain hunian, komersial, dan interior modern.",
    images: ["/images/braga-only.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://bragastudio.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="id" className={manrope.variable}>
        <body className="antialiased font-sans">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
