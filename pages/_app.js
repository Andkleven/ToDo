import AuthContext from "../context/auth.tsx";
import "../style/index.css";
import "../style/customTheme.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <Head>
        <title>Ola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthContext>
  );
}
