import React, { ReactElement } from "react";
import { Table } from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import Button from "@marketing/components/ui/Button";

interface DTPaginationProps<TData> {
  table: Table<TData>;
}

const DTPagination = <TData,>({
  table,
}: DTPaginationProps<TData>): ReactElement => {
  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();
  const pageIndex = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();
  const selectedRowCount = table.getFilteredSelectedRowModel().rows.length;
  return (
    <div className="flex items-center justify-between gap-4 px-12 pt-4 pb-20 bg-white border-t border-gray-150">
      <div className="flex items-center gap-8">
        <Button
          variant="icon"
          className="border border-gray-150 size-6 p-1"
          onClick={() => table.previousPage()}
          disabled={!canPreviousPage}
          aria-label="Previous Page">
          <ChevronLeftIcon className="size-5 text-foreground-1" />
        </Button>
        <div className="text-xs font-semibold text-foreground-1">
          Page <span className="text-black">{pageIndex}</span> out of{" "}
          <span className="text-black">{pageCount}</span>
        </div>
        <Button
          variant="icon"
          className="border border-gray-150 size-6 p-1"
          onClick={() => table.nextPage()}
          disabled={!canNextPage}
          aria-label="Next Page">
          <ChevronRightIcon className="size-5 text-foreground-1" />
        </Button>
      </div>
      <div className="flex-1 text-xs text-gray-600">
        {selectedRowCount > 0 && (
          <>
            {selectedRowCount} {selectedRowCount > 1 ? "rows" : "row"} selected.
          </>
        )}
      </div>
    </div>
  );
};

export default DTPagination;
