import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Contributions from "@/components/Contributions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stefano Cislaghi - Enterprise Architect, Visionary Leader, Engineering Mentor",
  robots: "follow, index",
  category: "technology",
  metadataBase: new URL("https://stefanocislaghi.com"),
};

export default function Home() {
  return (
    <>
        <div className="inset-0 -z-10 size-full ">
          <div className="container mx-auto my-5 grid max-w-[360px] gap-14">
            <Headline />
            <Experience />
            <Contacts />
            <Contributions />
            <Footer />
          </div>
        </div>
    </>
  );
}
