import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

type Variant = "primary" | "outline" | "light" | "saffron";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition duration-300 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-800 text-cream-50 hover:bg-forest-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest-900/20",
  outline:
    "border border-forest-800/30 text-forest-800 hover:border-forest-800 hover:bg-forest-800 hover:text-cream-50",
  light:
    "bg-cream-50 text-forest-900 hover:bg-cream-200 hover:-translate-y-0.5",
  saffron:
    "bg-saffron-500 text-forest-950 hover:bg-saffron-400 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function buttonStyles(
  variant: Variant = "primary",
  size: Size = "md",
  className = "",
): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

/** Internal navigation styled as a button. */
export function ButtonLink({
  to,
  children,
  variant,
  size,
  className,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonStyles(variant, size, className)}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles(variant, size, className)}
      {...rest}
    />
  );
}
