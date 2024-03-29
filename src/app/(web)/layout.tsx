import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/src/components/Header/Header";
import "./globals.css";
import Footer from "@/src/components/Footer/Footer";
import ThemeProvider from "@/src/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/src/components/AuthProvider/AuthProvider";
import Toast from "@/src/components/Toast/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Meeting Room Booking System",
  description: "Discover the best meeting rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
