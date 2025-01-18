import React from "react";
import { Roboto, Cookie } from "next/font/google";
import { Metadata } from 'next';
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie",
})

export const metadata: Metadata = {
  title: "Spacegram",
  applicationName: "Spacegram",
  keywords: ["Spacegram", "Space", "Online platform", "Explore space"],
  description: "Onilen platform for space lovers",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      sizes: "32x32",
      url: "/icon.svg",
    }
  ]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${cookie.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
