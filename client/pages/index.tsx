import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async (_) => ({
  props: {
    layoutType: "top",
  },
});

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>DeCartography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full align-center">
        <h1 className="text-center font-extrabold text-transparent leading-normal text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-700">
          DeCartography
        </h1>
        <p className="">hoge</p>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
