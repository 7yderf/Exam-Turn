"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { cn } from "@shared/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputVariants =
  "flex h-10 w-full rounded-lg bg-white pl-10 py-2.5 text-base font-roboto text-gray-600 border border-gray-150 shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:border-accent-2";

const SearchInput = React.memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
      return (
        <div className="w-full flex flex-col gap-2">
          <label className="text-base font-semibold text-primary">
            Search Name or Zip Code
          </label>
          <div className="relative w-full max-w-80">
            <input
              type="text"
              className={cn(inputVariants, className)}
              ref={ref}
              aria-label="Search"
              {...props}
            />
            <div className="absolute top-0 left-4 h-full flex items-center">
              <MagnifyingGlassIcon className="size-4 text-gray-200" />
            </div>
          </div>
        </div>
      );
    },
  ),
);

export default SearchInput;
