import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const raleway = localFont({
  src: "../../public/fonts/raleway/Raleway-Regular.ttf",
  display: "block",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={raleway.variable}>
      <body className="font-raleway">
        <header className="">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 E-Commerce Anda. Semua hak cipta dilindungi.</p>
        </footer>
      </body>
    </html>
  );
}
