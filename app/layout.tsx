import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "Regone Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="container mx-auto">
          <Navbar></Navbar>
        </div>
        <main className="relative overflow-hidden container mx-auto min-h-screen">
          {children}
        </main>
        <div className="container mx-auto">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
