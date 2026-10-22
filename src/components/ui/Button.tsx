import React from "react";
import ArrowIcon from "./ArrowIcon";
import { ArrowDown } from "./Icons";

type ButtonVariant = "primary" | "secondary" | "dark";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  arrowDirection?: "up-right" | "down";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  fullWidth = false,
  arrowDirection = "up-right",
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-dv-lime outline outline-1 outline-dv-lime -outline-offset-1 text-dv-dark hover:bg-dv-lime-hover transition-colors group",
    secondary:
      "bg-dv-surface hover:bg-dv-surface/90 text-dv-text hover:outline-dv-muted transition-colors group",
    dark:
      "bg-dv-bg outline outline-1 outline-dv-border -outline-offset-1 text-dv-text hover:outline-dv-muted transition-colors group",
  };

  const arrowColor =
    variant === "primary" ? "dark" : variant === "secondary" ? "light" : "lime";

  const strokeColor =
    arrowColor === "dark"
      ? "var(--color-dv-dark)"
      : arrowColor === "light"
      ? "var(--color-dv-text)"
      : "var(--color-dv-lime)";

  const baseClasses = `h-14 px-6 rounded-lg overflow-hidden justify-start items-center gap-7 inline-flex font-sans text-sm sm:text-base font-medium cursor-pointer shrink-0 ${
    fullWidth ? "w-full justify-between" : ""
  } ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className={fullWidth ? "flex-1 text-left" : ""}>{children}</span>
      {arrowDirection === "down" ? (
        <ArrowDown
          size={18}
          color={strokeColor}
          className="transition-transform duration-200 group-hover:translate-y-0.5"
        />
      ) : (
        <ArrowIcon color={arrowColor} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
