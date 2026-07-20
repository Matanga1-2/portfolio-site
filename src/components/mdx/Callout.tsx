import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  children: ReactNode;
  dir?: "rtl" | "ltr";
}

export const Callout = ({ children, dir = "ltr" }: CalloutProps) => {
  const isRtl = dir === "rtl";

  return (
    <blockquote
      dir={dir}
      className={cn(
        "my-6 py-1 text-foreground italic border-border not-prose",
        isRtl ? "border-r-2 pr-4 mr-0" : "border-l-2 pl-4 ml-0"
      )}
    >
      {children}
    </blockquote>
  );
};
