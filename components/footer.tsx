import Link from "next/link";
import Package from "../package.json";
import RecentlyPlayed from "./recentlyPlayed";

export default function Footer() {
  const currentVersion = " v" + Package.version;
  const tailwindVersion = " v" + Package.devDependencies["tailwindcss"];
  const nextVersion = " v" + Package.dependencies["next"];

  return (
    <>
      <footer className="bg-stefano-100 dark:bg-stefano-950 text-stefano-800 dark:text-stefano-300">
        <div className="container flex flex-col md:grid md:grid-cols-3">
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="font-bold uppercase">menu</div>

            <Link
              className="no-underline cursor-pointer hover:underline"
              href="/"
            >
              Home
            </Link>

            <Link
              className="no-underline cursor-pointer hover:underline"
              href="/bio"
            >
              Bio
            </Link>

            <Link
              className="no-underline cursor-pointer hover:underline"
              href="/left-design"
            >
              Left Design
            </Link>
          </div>
          <div className="flex flex-col items-center p-4 md:items-start">
            <div className="font-bold uppercase">links</div>

            <a
              className="no-underline cursor-pointer hover:underline"
              href="https://github.com/LunaticMuch"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              GitHub
            </a>

            <a
              className="no-underline cursor-pointer hover:underline"
              href="https://uk.linkedin.com/in/stefanocislaghi"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              LinkedIn
            </a>

            <a
              className="no-underline cursor-pointer hover:underline"
              href="https://discuss.systems/users/stefano"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Mastodon
            </a>

            <a
              className="no-underline cursor-pointer hover:underline"
              href="https://www.npmjs.com/~stefanocislaghi"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              NPM
            </a>

            <a
              className="no-underline cursor-pointer hover:underline"
              href="https://apps.apple.com/gb/developer/stefano-cislaghi/id1606696294"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              AppStore
            </a>
          </div>
          <RecentlyPlayed />
          <div className="flex flex-col items-center p-4 text-sm md:items-start">
            <a
              className="no-underline cursor-pointer hover:underline"
              href="https://https://github.com/LunaticMuch/stefanocislaghi.com"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              stefanocislaghi.com {currentVersion}
            </a>
            <div>with NextJS {nextVersion}</div>
            <div>and Tailwind {tailwindVersion}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
