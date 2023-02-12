import Head from "next/head";
import { useRouter } from "next/router";

export default function LeftDesign() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          The Left Design  - Stefano Cislaghi
        </title>
        <meta name="robots" content="follow, index" />
        <link
          rel="canonical"
          href={`https://stefanocislaghi.com${router.asPath}`}
        />
      </Head>
      <div className="px-4 md:pl-16 text-xl md:pr-[10%] lg:pr-[35%]">
        <div className="text-3xl font-bold">The Left Design</div>
        <p className="pt-4">
          I just branded it{" "}
          <span className="italic capitalize">the left design</span> because it
          is all left aligned. While I was developing my website, I spent a
          considerable amount of time thinking about the design. My mental crux
          had never been the position of information or content identification,
          rather how to present it decently, which also needed to be responsive
          and developed by me. I started with a usual centered design, using a
          classic container. However, I did not like the final result. It was
          terrible from time to time.
        </p>
        <p className="pt-4 pb-16">
          I was thinking about why so much complexity. We read left-to-right.
          Why wasting space with horizontal margins imposed by centered
          container? Moreover, I am not aware that the F-shaped reading pattern
          has been retired or been flagged as all wrong. Thus, I went back to
          basics. I used a container, aligned left and with my content aligned
          left too. On a normal external display, it works very well. If the
          user resizes the browser&apos;s window on the horizontal axis, the text
          does not move, as it is already aligned and the user can simply get
          the right of the empty site on the right. This may not work as a
          standard pattern. If the user has a wide screen, like those new curved
          displays, where the horizontal space is massive, and the open the
          website at full screen, the expectation to have the content in the
          center is not met. Anyhow, I want to think nobody uses a display in
          that way, given that the very common pattern is to scroll vertically,
          not horizontally 🙂. Instead, on a mobile device, there is no problem.
          The content is aligned on the left, but no space is left empty. The
          footer is instead centered, to allow an easy interaction for both left
          and right-handed users. Ultimately, I am not a user interface
          designer, but still quite proud of the final result. I wanted to share
          the approach I took, as I am aware it could be flagged as
          unconventional and wrong. This is because it does not follow the now
          standard pattern.
        </p>
      </div>
    </>
  );
}
