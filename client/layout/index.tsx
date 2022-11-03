import React, { ReactElement } from "react";
import { AppShell, Navbar, Header, Button, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { IconChartGridDots } from "@tabler/icons";

type LayoutProps = Required<{
  readonly children: ReactElement;
  readonly layoutType: LayoutType;
}>;

export const Layout: React.FC<LayoutProps> = ({ children, layoutType }) => {
  const router = useRouter();
  if (layoutType === "dashboard") {
    return (
      <AppShell
        padding="md"
        navbar={<Navbar width={{ base: 240 }}>{/* Navbar content */}</Navbar>}
        header={
          <Header height={60} p="xs">
            <div className="flex flex-row w-full h-full px-4 justify-between items-center">
              <Text
                onClick={() => router.push("/")}
                className="text-white font-bold text-xl cursor-pointer"
              >
                DeCartography
              </Text>
            </div>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    );
  }
  if (layoutType === "top") {
    return (
      <AppShell
        padding="md"
        header={
          <Header height={60}>
            <div className="flex flex-row w-full h-full px-4 justify-between items-center">
              <Text
                onClick={() => router.push("/")}
                className="text-white font-bold text-xl cursor-pointer"
              >
                DeCartography
              </Text>
              <Button
                onClick={() => router.push("/dashboard")}
                variant="light"
                color="violet"
                leftIcon={<IconChartGridDots size={16} />}
              >
                Dashboard
              </Button>
            </div>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    );
  }
  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
