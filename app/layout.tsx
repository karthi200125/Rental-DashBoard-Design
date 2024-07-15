import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Leftbar from "./_components/Leftbar";
import Filter from "./_components/Filter";
import ToolTipWrapper from "./_components/ToolTipWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental House Responsive Design",
  description: "fully responsive design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToolTipWrapper>
          <div className="w-full h-screen relative">
            <Navbar />
            <Filter />
            <div className="relative flex flex-row items-start">
              <div className="w-full h-full overflow-y-scroll relative flex flex-row bg-gray no-scrollbar sm:custom-scrollbar">
                <Leftbar />
                {children}
              </div>
            </div>
          </div>
        </ToolTipWrapper>
      </body>
    </html>
  );
}
