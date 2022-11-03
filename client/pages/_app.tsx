import type { AppPropsWithLayout } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Layout } from "../layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { layoutType } = pageProps;
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Layout layoutType={layoutType}>{<Component {...pageProps} />}</Layout>
      </MantineProvider>
    </>
  );
}
