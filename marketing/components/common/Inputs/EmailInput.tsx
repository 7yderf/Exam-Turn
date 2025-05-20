import * as React from "react";

import Button from "@marketing/components/ui/Button";

import { cn } from "@shared/lib/utils";

const EmailInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const resetInput = React.useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
  }, []);

  return (
    <div className="relative">
      <iframe
        id="redirect-frame"
        name="redirect-frame"
        className="hidden"
        onLoad={resetInput}
      />
      <form action={process.env.NEXT_PUBLIC_FORM_URL} target="redirect-frame">
        <input
          name="entry.1088533375"
          type={type}
          className={cn(
            "flex h-12 w-[360px] rounded-md border border-input bg-white pl-3 pr-[112px] py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          placeholder="Your Email"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          ref={inputRef}
          {...props}
        />
        <div className="absolute top-0 right-0.5 h-full flex items-center">
          <Button variant="secondary" className="w-[100px] h-11" type="submit">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
});

export default EmailInput;
