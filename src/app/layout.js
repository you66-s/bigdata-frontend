import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidenav from "@/Components/sidenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Big Data And Cassandra Project",
  description: "Developed By YMMR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"flex flex-row w-full"}>
        <div className="content w-full ml-64 p-10">
          {children}
        </div>
        <div className="side-nav">
          <Sidenav/>
        </div>
      </body>
    </html>
  );
}
