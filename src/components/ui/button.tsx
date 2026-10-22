import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-ink-soft",
        cta: "bg-cta text-cta-foreground shadow-card hover:bg-cta-hover hover:-translate-y-0.5",
        leaf: "bg-leaf text-leaf-foreground shadow-card hover:bg-leaf-hover",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-ink/15 bg-transparent text-foreground hover:border-ink hover:bg-card",
        onInk:
          "border-2 border-ink-foreground/40 bg-transparent text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground/10",
        secondary: "bg-secondary text-secondary-foreground hover:bg-border",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-leaf underline-offset-4 hover:underline rounded-none",
        whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-lift hover:brightness-110",
      },
      size: {
        default: "min-h-11 px-5 py-2",
        sm: "min-h-11 px-4 text-sm",
        lg: "min-h-12 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
