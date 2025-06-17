import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Shone Antony George",
  description: "Portfolio of Shone Antony George - Full-Stack developer skilled in React, Node.js and more.",
  openGraph: {
    title: "Shone Antony George | Full-Stack Developer",
    description: "Portfolio of Shone Antony George - Full-Stack developer skilled in React, Node.js and more.",
    siteName: "Shone Antony George Portfolio",
    locale: "en_US",
    type: "website",
  },
  verification:{
    google: "OdBJiwy72U5g_0q5mXErl2R39JPzSbLmbfnuvKCIJoM"
  }
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
