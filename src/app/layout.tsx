import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import resume from "@/resume";


const { basics, work } = resume;
const actualWork = work[0];

const josefinSans = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: `${basics.name} | ${basics.label}`,
  description: `${basics.name} | ${basics.label} @ ${actualWork.company}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} antialiased bg-teal-100`}
      >
        {children}
      </body>
    </html>
  );
}
