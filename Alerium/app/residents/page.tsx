// Custom Components
import { columns, DataTable, IUserRow, Modal, Stack, UploadPDF } from "@constants/components";

const data: IUserRow[] = [
  {
    hasContract: false,
    firstName: "Xhuri",
    lastName: "Shaba",
    email: "xhurian.shaba@outlook.com",
    phoneNumber: "0684594667",
    roomNumber: 12,
    userId: 1,
  },
];
export default async function Residents() {
  return (
    <Stack component={"main"} className={'p-1'}>
      <DataTable columns={columns} data={data} />

    </Stack>

  );
}
