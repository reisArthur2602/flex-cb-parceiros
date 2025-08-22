import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}
export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl w-full p-6 md:p-10", className)}>
      {children}
    </div>
  );
};
