"use client";

import { Session } from "next-auth";
import { TopNav, TopNavProps } from "~/pride/top-nav/top-nav";

type Props = {
  session: Session | null;
};

export function Navbar(props: Props) {
  const { session } = props;
  const actionButton: TopNavProps["actionButtons"][0] = session?.user
    ? {
        href: "/dashboard",
        label: "My Simba",
        ariaLabel: "Go to dashboard",
      }
    : {
        href: "/auth/signup",
        label: "Sign up",
        ariaLabel: "Sign up",
      };

  return <TopNav title="Simba" actionButtons={[actionButton]} />;
}
