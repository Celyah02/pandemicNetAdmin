
import * as React from "react";
import { cn } from "@/lib/utils";

const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid grid-cols-12", className)}
    {...props}
  />
));
Grid.displayName = "Grid";

export { Grid };
