import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav-bar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">cart</Link>
          <Link href="/cart/payment">payment</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
