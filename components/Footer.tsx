import Package from "../package.json";

export default function Footer() {
  const currentVersion = " v" + Package.version;
  const tailwindVersion = " v" + Package.devDependencies["tailwindcss"];
  const nextVersion = " v" + Package.dependencies["next"];

  return (
    <>
      <footer className="text-slate-700 text-center text-sm grid">
        <div>stefanocislaghi.com 🫠 {currentVersion}</div>
        <div>NextJS {nextVersion}</div>
        <div>Tailwind {tailwindVersion}</div>
      </footer>
    </>
  );
}
