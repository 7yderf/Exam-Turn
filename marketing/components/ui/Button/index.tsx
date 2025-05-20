import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:border-0 disabled:bg-accent-2 disabled:text-gray-200 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary/90 text-white",
        secondary: "bg-secondary hover:bg-secondary/90 text-white",
        info: "bg-blue-500 hover:bg-blue-500/90 text-white",
        outline:
          "bg-white hover:bg-white/90 text-primary border border-primary",
        destructive: "bg-danger hover:bg-danger/90 text-white",
        "semi-destructive": "bg-white text-danger border border-danger",
        icon: "active:opacity-80",
        text: "border-0 underline-offset-4 hover:opacity-80 active:opacity-80 disabled:opacity-50",
      },
      size: {
        icon: "h-7 w-7 p-2 rounded text-xs",
        sm: "h-7 min-w-24 px-3 rounded px-3 text-xs",
        md: "h-9 min-w-30 px-3 rounded px-4 text-base",
        lg: "h-11 min-w-44 px-6 rounded-[5px] text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={props.disabled || loading}
        {...props}>
        {loading ? (
          <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
export { buttonVariants };
