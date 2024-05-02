//this page will be the header and footer for all pages

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
//@ is a shortcut  to get to our src directory
//@ is a great shortcut for ../../../ etc incase you go to a very nested file

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


//RootLayout is the most parent root wrapper for the whole application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};
//children is the page.tsx in all pages we are trying to render in the layout
