import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const importedFont = Karla({
  subsets: ["latin"],
  // weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${importedFont.className}`}>{children}</body>
    </html>
  );
}
