"use client";

import { ColumnDef } from "@tanstack/react-table";
import parsePhone from "libphonenumber-js";

import Avatar from "@marketing/components/ui/Avatar";
import Checkbox from "@marketing/components/ui/Checkbox";
import DTColumnHeader from "@marketing/components/pages/provider/DataTable/DTColumnHeader";
import { Provider } from "@shared/graphql/__generated__/graphql";

export const columns: ColumnDef<Provider>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "fullName",
    accessorFn: (row) => `Dr. ${row.firstName} ${row.lastName}`,
    header: ({ column }) => <DTColumnHeader column={column} title="User" />,
    cell: ({ getValue, row }) => {
      return (
        <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
          <Avatar className="size-10" provider={row.original} />
          <div>
            <p className="text-[15px] font-medium">{`${getValue()}`}</p>
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "specialty",
    header: ({ column }) => (
      <DTColumnHeader column={column} title="Main Specialty" />
    ),
    cell: ({ row }) => (
      <div className="text-sm text-foreground-2">
        {row.getValue("specialty")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "contact",
    accessorKey: "providerData.phone",
    header: ({ column }) => <DTColumnHeader column={column} title="Contact" />,
    cell: ({ getValue }) => (
      <div className="text-sm text-foreground-2">
        {parsePhone(`${getValue()}`, "US")?.formatNational()}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "employer",
    accessorKey: "employer",
    header: ({ column }) => <DTColumnHeader column={column} title="Employer" />,
    cell: ({ getValue }) => (
      <div className="text-sm text-foreground-2">{`${getValue()}`}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "virtual",
    accessorKey: "providerData.virtual",
    header: ({ column }) => <DTColumnHeader column={column} title="Virtual" />,
    cell: ({ getValue }) => (
      <div className="text-sm font-medium text-foreground-2">
        {getValue() ? "Yes" : "No"}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
