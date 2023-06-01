import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <div>
            <Link href="/">홈</Link>
            <Link href="/list">List</Link>
          </div>
          <div>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
