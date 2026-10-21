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
  Globe as LucideGlobe,
  ChevronDown as LucideChevronDown,
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

/** Globe icon for language/region picker (GitHub Octicon) */
export function GlobeIcon({
  className = "",
  size = 16,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z" />
    </svg>
  );
}

/** Chevron down icon for dropdowns (GitHub Octicon) */
export function ChevronDownIcon({
  className = "",
  size = 16,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z" />
    </svg>
  );
}

/** LinkedIn brand icon (GitHub Primer Brand 'in' glyph) */
export function LinkedInIcon({
  className = "",
  size = 18,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 18"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
    </svg>
  );
}

/** Instagram brand icon (GitHub Primer Brand) */
export function InstagramIcon({
  className = "",
  size = 18,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

/** YouTube brand icon (GitHub Primer Brand) */
export function YouTubeIcon({
  className = "",
  size = 18,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.17 13.6"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z" />
    </svg>
  );
}

/** X (formerly Twitter) brand icon (GitHub Primer Brand) */
export function XSocialIcon({
  className = "",
  size = 16,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
    </svg>
  );
}

/** TikTok brand icon (GitHub Primer Brand) */
export function TikTokIcon({
  className = "",
  size = 18,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

/** Twitch brand icon (GitHub Primer Brand) */
export function TwitchIcon({
  className = "",
  size = 18,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
  );
}

/** GitHub brand icon (GitHub Octicon Mark) */
export function GitHubIcon({
  className = "",
  size = 18,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98 96"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
    </svg>
  );
}

