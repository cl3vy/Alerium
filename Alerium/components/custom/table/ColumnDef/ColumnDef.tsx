"use client";
// React Peer Dependencies
import {useEffect, useState, useRef} from "react";
// Table Components
import { ColumnDef } from "@tanstack/react-table";
// Shad CN Components
import { Button } from "@/components/ui/button";
// Custom Components
import { Modal, RowActions, TableCell, UploadPDF, ViewUser } from "@constants/components";
// Custom Hooks
import useFetch from "@/hooks/useFetch";
// Styles
import styles from "./style";
// Icons
import { ArrowUpDown, Download, Upload, User } from "lucide-react";
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
  id: number;
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
    accessorKey: "id",
    header: () => <div className="text-left font-medium">User ID</div>,
    cell: ({ row }) => <TableCell content={row.getValue("id")} />,
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
  {
    accessorKey: "Contract",
    header: () => <div className="text-left font-medium">Contract</div>,
    cell: ({ row }) => {

      const formData = useRef(new FormData());

      const [pdfDoc, setPdfDoc] = useState<File | null>();

      useEffect(() => {
          if(pdfDoc) {
            formData.current.append("file", pdfDoc);
            formData.current.append("userId", row.getValue("id"))
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
              {row.getValue("hasContract") ? <Download /> : <Upload />}
            </Button>
          }
        >
          <UploadPDF onSelection={onSelection} />
        </Modal>
      );
    },
  },
  {
    accessorKey: "User",
    header: () => <div className="text-left font-medium">User</div>,
    cell: ({ row }) => {
      const userData = row.original
     return ( <Modal
       dialogTitle={'User Data'}
       dialogTrigger={
         <Button>
           <User/>
         </Button>
       }
     >
    <ViewUser {...userData}/>
     </Modal>)
    }
  },
];
