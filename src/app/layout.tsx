import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to DevGuru",
  description: "Yeah, you are in a correct spot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-screen flex flex-col">
  <ThemeProvider attribute="class">
    <Navbar />

    <main className="flex-1 w-[1024px] mx-auto">
      {children}
    </main>

    <Footer />
  </ThemeProvider>
</body>
    </html>
  );
}
