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
      "bg-dv-btn-primary-bg text-dv-btn-primary-text hover:bg-dv-btn-primary-hover transition-all duration-200 group",
    secondary:
      "bg-dv-surface/40 hover:bg-dv-surface/65 backdrop-blur-md text-dv-text transition-all duration-200 group",
    dark:
      "bg-dv-bg text-dv-text hover:bg-dv-surface transition-all duration-200 group",
  };

  const arrowColor = variant === "primary" ? "dark" : "light";

  const strokeColor =
    arrowColor === "dark"
      ? "var(--color-dv-btn-primary-text)"
      : "var(--color-dv-text)";

  const baseClasses = `px-5 sm:px-6 py-2.5 sm:py-3 rounded-full overflow-hidden justify-start items-center gap-2.5 sm:gap-3 inline-flex font-sans text-sm sm:text-base font-medium cursor-pointer shrink-0 ${
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
