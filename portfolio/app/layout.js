import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "K. Anugya Reddy - Full Stack Developer",
  description: "Portfolio of K. Anugya Reddy - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: "K. Anugya Reddy, Full Stack Developer, React, Next.js, Node.js, JavaScript, Portfolio",
  authors: [{ name: "K. Anugya Reddy" }],
  openGraph: {
    title: "K. Anugya Reddy - Full Stack Developer",
    description: "Portfolio showcasing modern web development skills",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
