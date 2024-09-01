import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sergey Salnikov Portfolio",
  description: "Frontend developer portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
