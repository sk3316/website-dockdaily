// filepath: src/components/<Name>.tsx
import { cn } from "@/lib/cn";

interface <Name>Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Brief description of the component.
 */
export function <Name>({ className, children }: <Name>Props) {
  return (
    <div className={cn("base-classes-here", className)}>
      {children}
    </div>
  );
}
