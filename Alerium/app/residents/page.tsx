import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Custom Components
import { columns, DataTable, IUserRow, Modal, Stack, SvgView, Typography, UploadPDF } from "@constants/components";
// Utils
import { getUsers } from "@constants/utils";
// Styles
import styles from './style'
import NavigationBar from "@/components/custom/navigation/NavigationBar";
export default async function Residents() {
  const {props} = await getUsers();
  return (
    <Stack component={"main"} className={styles.main}>
      <Typography className={styles.title}>View all active Residents:</Typography>
      <DataTable columns={columns} data={props} className={styles.table}/>
      <Typography className={styles.title}>Other Statistics:</Typography>
        <Stack direction={'row'} spacing={4}>
          <Card>
            <CardHeader>
              <CardTitle>Total Residents</CardTitle>
              <CardDescription>The number of all resident occupying rooms:</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography className={'text-[6rem] align-left justify-end'}>309</Typography>
            </CardContent>
            <CardFooter>
              Residents with an active contract!
            </CardFooter>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>Total Occupied Rooms</CardTitle>
              <CardDescription>The number of occupied rooms by 1 or more residents:</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography className={'text-[6rem] align-left justify-end'}>102</Typography>
            </CardContent>
            <CardFooter>
              Rooms rented out.
            </CardFooter>
          </Card>
        </Stack>
    </Stack>

  );
}
