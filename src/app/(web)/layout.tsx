import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/src/components/Header/Header";
import "./globals.css";
import Footer from "@/src/components/Footer/Footer";
import ThemeProvider from "@/src/components/ThemeProvider/ThemeProvider";

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
      <body className={poppins.className}>
        <ThemeProvider>
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
