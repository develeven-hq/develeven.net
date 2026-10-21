import React from "react";
import { ArrowUpRight } from "./Icons";

interface ArrowIconProps {
  color?: "dark" | "lime" | "light" | "dim";
  size?: "md" | "lg";
  className?: string;
}

export default function ArrowIcon({
  color = "lime",
  size = "md",
  className = "",
}: ArrowIconProps) {
  const strokeColor =
    color === "dark"
      ? "var(--color-dv-dark)"
      : color === "light"
      ? "var(--color-dv-text)"
      : color === "dim"
      ? "var(--color-dv-muted)"
      : "var(--color-dv-lime)";

  const dimension = size === "lg" ? 22 : 18;

  return (
    <ArrowUpRight
      size={dimension}
      color={strokeColor}
      className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
    />
  );
}
