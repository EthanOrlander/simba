"use client";

import { ReactNode } from "react";
import { Button, ButtonProps } from "../button.tsx/button";

export type NavLink = {
  label: string;
  href: string;
};

export type TopNavProps = {
  title: string;
  logo?: ReactNode;
  links?: Array<NavLink>;
  actionButtons: Array<ButtonProps>;
};

export function TopNav(props: TopNavProps) {
  const { title, logo, links = [], actionButtons } = props;

  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        {logo}
        <span className="text-xl font-semibold tracking-tight">{title}</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          {links.map(({ href, label }, idx) => (
            <a
              key={idx}
              href={href}
              className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
            >
              {label}
            </a>
          ))}
        </div>
        <div>
          {actionButtons.map((buttonProps, idx) => (
            <Button key={idx} {...buttonProps} />
          ))}
        </div>
      </div>
    </nav>
  );
}
