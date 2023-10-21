"use client";
// Table Components
import { ColumnDef } from "@tanstack/react-table";
// Shad CN Components
import { Button } from "@/components/ui/button";
// Custom Components
import { Modal, RowActions, TableCell, UploadPDF } from "@constants/components";
// Custom Hooks
// Styles
import styles from "./style";
// Icons
import { ArrowUpDown } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { endpoints } from "@constants/defaults";
import {useEffect, useState} from "react";
// Types And Interfaces
export type IUserRow = {
  hasContract: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roomNumber: number;
  userId: number
};

export const columns: ColumnDef<IUserRow>[] = [

  {
    accessorKey: "userId",
    header: () => <div className="text-left font-medium">UserId</div>,
    cell: ({ row }) => <TableCell content={row.getValue("userId")} />,
  },
  {
    accessorKey: "hasContract",
    header: "",
    cell: ({ row }) => (
      <TableCell
        content={
          <i className={`${styles.icon(row.getValue("hasContract"))}`} />
        }
      />
    ),
  },
  {
    accessorKey: "firstName",
    header: () => <div className="text-left font-medium">First Name</div>,
    cell: ({ row }) => <TableCell content={row.getValue("firstName")} />,
  },
  {
    accessorKey: "lastName",
    header: () => <div className="text-left font-medium">Last Name</div>,
    cell: ({ row }) => <TableCell content={row.getValue("lastName")} />,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left font-medium">Email</div>,
    cell: ({ row }) => <TableCell content={row.getValue("email")} />,
  },
  {
    accessorKey: "phoneNumber",
    header: () => <div className="text-left font-medium">Phone Number</div>,
    cell: ({ row }) => <TableCell content={row.getValue("phoneNumber")} />,
  },
  {
    accessorKey: "roomNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <TableCell content={row.getValue("roomNumber")} />,
  },
  {
    accessorKey: "Actions",
    header: () => <div className="text-left font-medium">Actions</div>,
    cell: ({ row }) => <RowActions hasContract={row.getValue("hasContract")} />,
  },
  {
    accessorKey: "Contract",
    header: () => <div className="text-left font-medium">Actions</div>,
    cell: ({ row }) => {

      const formData = new FormData();

      const [pdfDoc, setPdfDoc] = useState<File | null>();

      useEffect(() => {
          if(pdfDoc) {
            formData.append("file", pdfDoc);
            formData.append("userId", row.getValue("userId"))
          }
        },[pdfDoc]
      )
      const onSelection = (pdf: File | undefined) => setPdfDoc(pdf);
      useFetch({
        url: endpoints.url + "/api/user-alerium/upload-contract",
        type: "POST",
        preventFetch: !pdfDoc,
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return (
        <Modal
          dialogTitle={row.getValue("hasContract") ? "View PDF" : "Upload PDF"}
          dialogTrigger={
            <Button>
              {row.getValue("hasContract") ? "View PDF" : "Upload PDF"}
            </Button>
          }
        >
          <UploadPDF onSelection={onSelection} />
        </Modal>
      );
    },
  },
];
