import React, { ReactElement } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/solid";
import { Column } from "@tanstack/react-table";

import Button from "@marketing/components/ui/Button";
import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@marketing/components/ui/Dropdown";

import { cn } from "@shared/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const DTColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>): ReactElement => {
  const canSort = column.getCanSort();
  const isSorted = column.getIsSorted();

  if (!canSort) {
    return <div className={cn(className)}>{title}</div>;
  }

  const renderSortIcon = () => {
    if (isSorted === "desc") return <ArrowDownIcon className="h-4 w-4" />;
    if (isSorted === "asc") return <ArrowUpIcon className="h-4 w-4" />;
    return <ChevronUpDownIcon className="h-6 w-6" />;
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="icon"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-background-1"
            aria-label={`Sort by ${title}`}>
            <span>{title}</span>
            {renderSortIcon()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="rounded-md p-1 text-foreground-2">
          <DropdownMenuItem
            className="p-2 [&>svg]:size-4"
            onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon />
            <p className="text-xs">Asc</p>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="p-2 [&>svg]:size-4"
            onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon />
            <p className="text-xs">Desc</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DTColumnHeader;
