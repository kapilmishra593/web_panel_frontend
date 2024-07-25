import type { AppProps } from 'next/app'
import '../app/globals.scss'
import Layout from "../pages/layout";
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from 'next/router';
import ReactDOM from 'react-dom/client';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  if (typeof window === 'undefined') {
    return null; // Return nothing on the server side
  } else {
    ReactDOM.createRoot(document.getElementById('__next')!).render(
      <React.StrictMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.StrictMode>
    )
  }
}