import Head from "next/head";
import { useRouter } from 'next/router';
export default function Bio() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Stefano Cislaghi - Enterprise Architect, Visionary Leader, Engineering
          Mentor
        </title>
        <meta name="robots" content="follow, index" />
        <link
          rel="canonical"
          href={`https://stefanocislaghi.com${router.asPath}`}
        />
      </Head>

      <div className="px-4 md:pl-16 text-xl md:pr-[10%] lg:pr-[35%]">
        <div className="text-3xl font-bold">About</div>
        <div className="mt-4 mb-16">
          Hello, I am Stefano. I am an information architect with over ten years
          of experience in designing information systems that work at an
          enterprise scale. I developed my career by juggling across various
          areas of systems and databases design and development, constantly
          playing across the engineering and the product side. To me, it is
          never about just coding software. Rather, it is about building a
          product, or an information system, that can do what the business wants
          without asking them to compromise any functionality or need.
        </div>
        <div className="text-3xl font-bold">My Work</div>
        <div className="mt-4 mb-16">
          Currently, I work as an Engineering Director for American Express. I
          am based in the United Kingdom, south of London. My current role is
          all about having fun with GraphQL technology and helping my company to
          leverage it for developing better API products. I lead a team of
          engineers who are building nice and cool product entirely based on
          GraphQL API. Also, I worked for several years in a universal bank in
          Switzerland and a system integrator in Italy.
        </div>
        <div className="text-3xl font-bold">Personal Bit</div>
        <div className="mt-4 mb-16">
          It is not a mistake. I am Italian, and this means I like good food and
          wine. I am always researching for new food experiences, tastes and
          flavours. Beyond that, I have an extensive list of hobbies and
          interests. These are the three most important:
          <ul className="py-4 list-disc list-inside">
            <li>
              <span className="font-bold">Aviation</span>
              {" - "}I love planes and I fly them. I hold a pilot&apos;s licence and
              have been flying since 2008. Flying gives me the unique
              opportunity to see the world from above and access to a privileged
              standpoint.
            </li>
            <li>
              <span className="font-bold">Scuba Diving</span>
              {" - "}
              Because seeing the world from above is not enough, I am also an
              avid scuba diver. There is a lot to see, to discover and to
              protect.
            </li>
            <li>
              <span className="font-bold">Running</span>
              {" - "}
              Flying and scuba diving are all about the vertical axis. My take
              on the horizontal axis is running. I started running in 2019 and
              now cannot stop. It is more than just fitness. It is my recipe for
              mental health and when the best idea comes out of my mind.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
