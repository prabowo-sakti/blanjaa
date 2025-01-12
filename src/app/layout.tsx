import Navbar from "components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <header>
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
