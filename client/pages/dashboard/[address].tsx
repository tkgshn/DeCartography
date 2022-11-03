import { Title } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

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
    </>
  );
};

export default Address;
