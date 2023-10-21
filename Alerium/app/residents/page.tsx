// Custom Components
import { columns, DataTable, IUserRow, Modal, Stack, SvgView, UploadPDF } from "@constants/components";
// Utils
import { getUsers } from "@constants/utils";

export default async function Residents() {
  const {props} = await getUsers();
  return (
    <Stack component={"main"} className={'p-1'}>
      <DataTable columns={columns} data={props} />
      <SvgView />
    </Stack>

  );
}
