import { Title } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import data from "../../examples/data.json";
const Graph = dynamic(() => import("../../components/Graph"), { ssr: false });

export const getServerSideProps: GetServerSideProps = async (_) => ({
  props: {
    layoutType: "dashboard",
  },
});

const Address: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;
  return (
    <>
      <Title>{address}</Title>
      <Graph data={data} />
    </>
  );
};

export default Address;
