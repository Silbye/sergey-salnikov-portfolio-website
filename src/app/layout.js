import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    "https://silbye.github.io/sergey-salnikov-portfolio-website/"
  ),
  title: "Сергей Сальников - Frontend разработчик",
  description: "Сайт-портфолио Frontend разработчика",
  alternates: {
    canonical: "./",
  },
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
