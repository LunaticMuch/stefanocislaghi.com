// pages/_app.js

import "styles/globals.css";

import { ThemeProvider } from "next-themes";

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
