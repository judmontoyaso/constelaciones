import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Constelaciones",
  description: "Fundación Constelaciones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row w-full bg-my-image bg-cover h-screen">
          <div className="flex w-3/12 justify-center items-center bg-white bg-opacity-50 text-black">
            Constelaciones
          </div>
          <div className="flex w-9/12 flex-col bg-black bg-opacity-50">
            <div>
              <Navbar></Navbar>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
