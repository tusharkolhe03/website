import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "TechFlow Solutions | Cutting-Edge IT Services",
  description: "Innovative IT solutions for the modern era. Expert software development, cloud infrastructure, and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saira.variable} antialiased h-full`}
    >
      <body className="min-h-screen bg-background font-saira">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}



