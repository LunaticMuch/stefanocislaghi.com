import Head from "next/head"

export default function Home() {

  return (
    <>
      <Head>
        <title>Stefano Cislaghi - Enterprise Architect, Visionary Leader, Engineering Mentor</title>
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href="https://stefanocislaghi.com" />
      </Head>
      <div className="px-4 py-16 text-4xl subpixel-antialiased font-bold tracking-wide text-transparent md:px-16 md:text-7xl bg-clip-text bg-gradient-to-tl from-pink-600 to-blue-700 dark:from-pink-400 dark:to-blue-200">
        <p className="">Hi, I am Stefano!</p>
        <p className="md:pr-48 lg:pr-64">I design enterprise information systems that simplify everybody&apos;s life.</p>
      </div>
    </>
  )
}