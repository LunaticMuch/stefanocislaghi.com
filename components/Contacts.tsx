import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <div className="">
        <p className="font-bold uppercase">Contacts</p>
        <ul className="grid gap-2">
          <li className="flex justify-between">
            <Link
              href="https://linkedin.com/in/stefanocislaghi"
              target="_blank"
              className="group"
            >
              Linkedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 inline-block align-[-2px] group-hover:animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </Link>
            <div>Stefano Cislaghi</div>
          </li>
        </ul>
      </div>
    </>
  );
}
