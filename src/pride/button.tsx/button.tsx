"use client";

export type ButtonProps = {
  label: string;
  ariaLabel: string;
  onPress?: VoidFunction;
  href?: string;
};

export function Button(props: ButtonProps) {
  const { label, ariaLabel, onPress, href } = props;
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
    >
      {label}
    </a>
  );
}
