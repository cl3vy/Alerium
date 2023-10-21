"use client";
// Table Components
import { ColumnDef } from "@tanstack/react-table";
// Shad CN Components
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// Types And Interfaces
type TableColProps = {};
// This type is used to define the shape of our data.
// ! TEMPORARY
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
// Icons
import { MoreHorizontal } from "lucide-react"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
function TableCol({}: TableColProps) {
  return <></>;
}

export default TableCol;
export type { TableColProps };
