import React from "react";
import Link from "next/link";

export interface BrandLogoProps {
  /** Size in pixels (width and height). Defaults to 28 */
  size?: number | string;
  /** Custom fill color. Defaults to theme-adaptive var(--color-dv-lime) */
  color?: string;
  /** Additional CSS class names for the SVG element */
  className?: string;
  /** If true, renders the brand wordmark "DevEleven" alongside the logo */
  withText?: boolean;
  /** Custom text size class when withText is true. Defaults to "text-xl" */
  textSize?: string;
  /** Optional href to wrap the logo in a Next.js Link */
  href?: string;
  /** Optional click handler */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function BrandLogo({
  size = 28,
  color = "var(--color-dv-lime)",
  className = "",
  withText = false,
  textSize = "text-xl",
  href,
  onClick,
}: BrandLogoProps) {
  const svgMark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 668 668"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-colors duration-200 ${className}`}
      aria-label="DevEleven logo"
    >
      <path
        d="M309.713 586.192C307.37 583.848 307.37 580.049 309.713 577.706L577.706 309.713C580.049 307.37 583.848 307.37 586.192 309.713L663.266 386.787C665.609 389.131 665.609 392.93 663.266 395.273L461.741 596.798C422.688 635.851 359.372 635.851 320.319 596.798L309.713 586.192Z"
        fill={color}
      />
      <path
        d="M156.978 433.456C154.635 431.113 154.635 427.314 156.978 424.971L344.361 237.588C346.704 235.245 350.503 235.245 352.846 237.588L363.453 248.194C402.505 287.247 402.505 350.563 363.453 389.616L242.538 510.531C240.194 512.874 236.395 512.874 234.052 510.531L156.978 433.456Z"
        fill={color}
      />
      <path
        d="M4.24264 280.721C1.89949 278.378 1.8995 274.579 4.24264 272.236L205.768 70.7107C244.821 31.6582 308.137 31.6583 347.189 70.7107L357.796 81.3173C360.139 83.6604 360.139 87.4594 357.796 89.8026L89.8026 357.796C87.4594 360.139 83.6604 360.139 81.3173 357.796L4.24264 280.721Z"
        fill={color}
      />
    </svg>
  );

  const content = withText ? (
    <span className="inline-flex items-center gap-3">
      {svgMark}
      <span className={`text-dv-text font-medium font-sans tracking-tight ${textSize}`}>
        DevEleven
      </span>
    </span>
  ) : (
    svgMark
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-flex items-center overflow-hidden group">
        {content}
      </Link>
    );
  }

  return content;
}
