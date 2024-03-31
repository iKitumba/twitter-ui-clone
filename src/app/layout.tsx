import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarMenu } from "@/components/sidebar-menu";
import { RightBar } from "@/components/rightbar";
import { BottomNavigationBar } from "@/components/bottom-navigation-bar";
import { TweetContextProvider } from "@/contexts/TweetContext";

export const metadata: Metadata = {
  title: "Twitter Clone",
  description:
    "Is is a Twitter interface clone that I'm using to learn Tailwind CSS",
};

export const viewport: Viewport = {
  themeColor: "#1A8CD8",
};

const importedFont = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${importedFont.className}`}>
        <TweetContextProvider>
          <main className="max-w-[1260px] mx-auto min-h-screen flex gap-6 items-start justify-center  max-[1536px]:gap-4">
            <SidebarMenu />
            <article className="flex-1 min-h-[300vh] border-x border-separator max-w-[600px]">
              {children}
            </article>
            <RightBar />

            <BottomNavigationBar />
          </main>
        </TweetContextProvider>
      </body>
    </html>
  );
}
