import { Title } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Graph from "../../components/Graph";
import data from "../../examples/data.json";

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
