import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold transition-[transform,background-color,color,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-signal text-white shadow-panel hover:bg-[#B81126] hover:shadow-lift",
        navy: "bg-navy text-white shadow-panel hover:bg-navy-soft hover:shadow-lift",
        outline:
          "border border-line bg-paper text-ink hover:border-navy hover:text-navy",
        ghostLight:
          "border border-white/25 bg-white/5 text-white hover:bg-white/15 hover:border-white/50",
        link: "text-navy underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-[3.25rem] px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
