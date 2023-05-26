import "./globals.css";
import { Kanit } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const kanit = Kanit({ subsets: ["thai"], weight: "400" });

export const metadata = {
  title: "แผนกอิเล็กทรอนิกส์",
  description: "วิทยาลัยเทคนิคเชียงใหม่ แผนกอิเล็กทรอนิกส์",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
