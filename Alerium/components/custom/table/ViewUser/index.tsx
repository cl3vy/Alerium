import { IUserRow, Stack, Typography } from "@/constants/components";
import React from "react";
import { Separator } from "@/components/ui/separator";
import styles from "./style";

type ViewUserProps = {} & IUserRow;

function ViewUser({
  name,
  surname,
  email,
  phoneNumber,
  paymentMethod,
  guarantee,
  firstPaymentAmount,
  stateId,
}: ViewUserProps) {
  return (
    <Stack separator={<Separator />}>
      <Stack direction={"row"} className={"flex-wrap"} spacing={2}>
        <Typography className={styles.title}>General Information</Typography>
        <Separator />
        <Stack className={styles.field}>
          <Typography className={styles.label}>Name: </Typography>
          <Typography className={styles.value}>{name}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label}>Surname: </Typography>
          <Typography className={styles.value}>{surname}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label}>Email: </Typography>
          <Typography className={styles.value}>{email}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label}>Phone Number: </Typography>
          <Typography className={styles.value}>{phoneNumber}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label}>Phone Number: </Typography>
          <Typography className={styles.value}>{phoneNumber}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography className={styles.title}>Financial Information</Typography>
        <Separator />
        <Stack spacing={2} className={'flex-wrap'} direction={'row'}>
          <Stack className={styles.field}>
            <Typography className={styles.label}>Payment Method: </Typography>
            <Typography className={styles.value}>{paymentMethod}</Typography>
          </Stack>
          <Stack className={styles.field}>
            <Typography className={styles.label}>Guarantee: </Typography>
            <Typography className={styles.value}>{guarantee}</Typography>
          </Stack>
          <Stack className={styles.field}>
            <Typography className={styles.label}>
              First Payment (ALL):{" "}
            </Typography>
            <Typography className={styles.value}>
              {firstPaymentAmount}
            </Typography>
          </Stack>
          <Stack className={styles.field}>
            <Typography className={styles.label}>State ID: </Typography>
            <Typography className={styles.value}>{stateId}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ViewUser;
export type { ViewUserProps };
