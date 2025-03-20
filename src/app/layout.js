import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Service Project",
  description: "Service Project",
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
