import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MyFooter from "../components/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="">
        <header className="px-[150px] pt-[35px]">
          <Navbar />
        </header>
        <main className="px-[150px]">{children}</main>
        <footer className="bg-[#E8E8EA] px-[150px] pt-[65px] pb-[35px] mt-[80px]">
          <MyFooter />
        </footer>
      </body>
    </html>
  );
}
