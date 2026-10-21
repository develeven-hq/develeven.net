import React from "react";
import {
  ArrowUpRight as LucideArrowUpRight,
  ArrowDown as LucideArrowDown,
  Check as LucideCheck,
  Info as LucideInfo,
  Layout,
  Wrench,
  CodeXml,
  Gamepad2,
  Network,
  ScanLine,
  ShieldCheck,
  GitBranch,
  Braces,
  CircleHelp,
  Layers as LucideLayers,
  ShoppingBag as LucideShoppingBag,
  Plus as LucidePlus,
  Minus as LucideMinus,
  Menu as LucideMenu,
  X as LucideX,
} from "lucide-react";

interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

/** Arrow Up-Right (↗) for buttons, links, and clickables */
export function ArrowUpRight({
  className = "",
  size = 18,
  color = "currentColor",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideArrowUpRight
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Arrow Down (↓) for anchor scroll jumps */
export function ArrowDown({
  className = "",
  size = 18,
  color = "currentColor",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideArrowDown
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Checkmark icon for feature checklists */
export function CheckIcon({
  className = "",
  size = 16,
  color = "var(--color-dv-lime)",
  strokeWidth = 2,
}: IconProps) {
  return (
    <LucideCheck
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Info / Disclaimer alert icon */
export function InfoIcon({
  className = "",
  size = 20,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideInfo
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Website development (SVC / 01) - Layout panel */
export function WebDevIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Layout
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Website maintenance (SVC / 02) - Wrench */
export function MaintenanceIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Wrench
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Growth website package icon - Layers */
export function LayersIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideLayers
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Commerce website package icon - ShoppingBag */
export function CommerceIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideShoppingBag
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Custom software (SVC / 03) - CodeXml </ > */
export function CustomSoftwareIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <CodeXml
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Custom software in pricing (SW / 01) - Braces { } */
export function BracesIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Braces
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Game development (SVC / 04 & GM / 02) - Gamepad2 */
export function GameDevIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Gamepad2
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Engineering & infrastructure (SVC / 05 & EN / 03) - Network tree */
export function EngineeringIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Network
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Quality Principle 1 - Quality you can inspect (ScanLine) */
export function InspectIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <ScanLine
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Quality Principle 2 - Resilience by design (ShieldCheck) */
export function ResilienceIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <ShieldCheck
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Quality Principle 3 - Built for the next chapter (GitBranch) */
export function FoundationIcon({
  className = "",
  size = 26,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <GitBranch
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** FAQ / Question icon (CircleHelp) */
export function FaqIcon({
  className = "",
  size = 18,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <CircleHelp
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Plus icon for FAQ accordion (Plus) */
export function PlusIcon({
  className = "",
  size = 18,
  color = "var(--color-dv-muted)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucidePlus
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Minus icon for FAQ accordion (Minus) */
export function MinusIcon({
  className = "",
  size = 18,
  color = "var(--color-dv-lime)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideMinus
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Hamburger menu icon for mobile navigation */
export function MenuIcon({
  className = "",
  size = 22,
  color = "var(--color-dv-text)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideMenu
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Close / X icon for mobile navigation */
export function CloseIcon({
  className = "",
  size = 22,
  color = "var(--color-dv-text)",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideX
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
    />
  );
}

