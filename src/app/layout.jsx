import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FabFinds",
  description:
    "Welcome to FabFinds - Your Fashion Destination /nDiscover the ultimate fashion haven at FabFinds, where style meets convenience. We are your premier destination for all things clothing and attire, offering an exquisite collection of fashion-forward apparel for the discerning shopper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
