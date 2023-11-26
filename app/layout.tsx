import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import Navbar from "@/components/NarBar";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";



const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={`${opensans.variable} font-sans`}>
      <Providers>
        <body>
          <main>
            <div className="flex min-h-screen text-stefano-800 bg-stefano-50 dark:bg-stefano-900 dark:text-stefano-300">
              <div className="container flex flex-col justify-between">
                <Navbar />
                <div className="align-center">
                  {children}
                </div>
                <div className=""></div>
              </div>
              <div className=""></div>
            </div>
            <Footer />
          </main>
        </body>
      </Providers>
    </html>
  );
}
