"use client";
// React Peer Dependencies
import {useEffect, useState, useRef} from "react";
// Table Components
import { ColumnDef } from "@tanstack/react-table";
// Shad CN Components
import { Button } from "@/components/ui/button";
// Custom Components
import { Modal, RowActions, TableCell, UploadPDF } from "@constants/components";
// Custom Hooks
import useFetch from "@/hooks/useFetch";
// Styles
import styles from "./style";
// Icons
import { ArrowUpDown } from "lucide-react";
// Others
import { endpoints } from "@constants/defaults";
import { IRoom } from "@/interfaces/IRoom";

// Types And Interfaces
export type IUserRow = {
  hasContract: boolean;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  userId: number;
  gender: string;
  birthday: Date;
  stateId: string;
  room: IRoom;
  paymentMethod: 'Bank' | 'Cash';
  guarantee: number;
  firstPaymentAmount: number;



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
    accessorKey: "name",
    header: () => <div className="text-left font-medium">First Name</div>,
    cell: ({ row }) => <TableCell content={row.getValue("name")} />,
  },
  {
    accessorKey: "surname",
    header: () => <div className="text-left font-medium">Last Name</div>,
    cell: ({ row }) => <TableCell content={row.getValue("surname")} />,
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
  // {
  //   accessorKey: "roomNumber",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => <TableCell content={row.getValue("room")} />,
  // },
  {
    accessorKey: "Actions",
    header: () => <div className="text-left font-medium">Actions</div>,
    cell: ({ row }) => <RowActions hasContract={row.getValue("hasContract")} />,
  },
  {
    accessorKey: "Contract",
    header: () => <div className="text-left font-medium">Actions</div>,
    cell: ({ row }) => {

      const formData = useRef(new FormData());

      const [pdfDoc, setPdfDoc] = useState<File | null>();

      useEffect(() => {
          if(pdfDoc) {
            formData.current.append("file", pdfDoc);
            formData.current.append("userId", row.getValue("userId"))
          }
        },[pdfDoc]
      )
      const onSelection = (pdf: File | undefined) => setPdfDoc(pdf);

      useFetch({
        url: endpoints.url + "/api/user-alerium/upload-contract",
        type: "POST",
        preventFetch: !pdfDoc,
        body: formData.current,
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
