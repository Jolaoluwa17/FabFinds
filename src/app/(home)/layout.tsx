"use client";

import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/api/provider";
import { useState } from "react";
import React from "react";
import { OpenProvider } from "@/context/OpenProvider";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <Providers>
        <OpenProvider>
          <body className={inter.className}>
            <Header open={open} setOpen={setOpen} />
            <div
              style={{
                paddingTop: "5rem",
                minHeight: "100vh",
                paddingBottom: "5rem",
              }}
            >
              {children}
            </div>
            <Footer />
          </body>
        </OpenProvider>
      </Providers>
    </html>
  );
}
