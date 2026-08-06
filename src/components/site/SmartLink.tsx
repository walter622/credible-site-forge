import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

/** Renders an external anchor for absolute URLs and a router Link otherwise. */
export function SmartLink({ to, className, onClick, children }: Props) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
