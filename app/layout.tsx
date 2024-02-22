import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "M-Afrik Car Hub",
  description: "Discover the optimal engine tailored for you.",
  icons: {
    icon: '/logo-mark.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
