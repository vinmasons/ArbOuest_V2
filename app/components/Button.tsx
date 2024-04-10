import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  invert?: boolean;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
);

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
    invert
      ? "bg-pastel-green text-white hover:bg-green-500"
      : "bg-pastel-green text-white hover:bg-green-500",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-yellow"
  );

  let inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === "undefined") {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
