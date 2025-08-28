import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Embodied Intelligence | Robotics Club",
  description: "Advancing the frontier of robotic cognition through hands-on projects in collaboration with Cortex AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-[#12141a] text-[#f5f5f5] font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}