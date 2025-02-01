import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Contributions from "@/components/Contributions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stefano Cislaghi | Engineering Visionary, Enterprise Architect & Open Innovation Advocate",
  description:
    "Innovative Technology Architect with over 10 years of experience driving digital transformation in global financial institutions. Expert in modernizing enterprise systems, building high-performing engineering cultures, and bridging technical expertise with business objectives. A trusted technology partner specializing in compliance, risk management, and value co-creation to deliver future-proof solutions.",
  robots: "follow, index",
  category: "technology",
  metadataBase: new URL("https://stefanocislaghi.com"),
  openGraph: {
    url: "https://stefanocislaghi.com",
    title:
      "Stefano Cislaghi | Engineering Visionary, Enterprise Architect & Open Innovation Advocate",
    description:
      "Innovative Technology Architect with over 10 years of experience driving digital transformation in global financial institutions. Expert in modernizing enterprise systems, building high-performing engineering cultures, and bridging technical expertise with business objectives. A trusted technology partner specializing in compliance, risk management, and value co-creation to deliver future-proof solutions.",
    images: [
      {
        url: "https://stefanocislaghi.com/stefano_og.jpg",
        width: 512,
        height: 512,
        alt: "Stefano Cislaghi",
        type: "image/jpeg",
      },
    ],
    siteName:
      "Stefano Cislaghi | Engineering Visionary, Enterprise Architect & Open Innovation Advocate",
  },
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
