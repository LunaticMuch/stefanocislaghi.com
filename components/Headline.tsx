import Image from "next/image";

export default function Headline() {
  return (
    <>
      <div>
        <Image
          className="h-28 w-24 rounded-full object-cover sm:h-36 sm:w-28"
          width={2558}
          height={2560}
          quality={100}
          src="/stefano.jpeg"
          alt="Stefano Cislaghi"
        />
      </div>
      <div className="text-3xl">
        Engineering Visionary, Enterprise Architect & Open Innovation Advocate
      </div>
      <div className="">
        I am a hands-on engineering leader with 15+ years of experience driving
        API modernization, building high-performing teams, and solving complex
        business challenges through innovative technology. Passionate about
        scaling engineering cultures, fostering innovation, and delivering
        measurable business value, I specialize in transforming technical
        complexity into future-proof solutions that meet business goals.
      </div>
    </>
  );
}
