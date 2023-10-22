import React from "react";
import { IRoom } from "@/interfaces/IRoom";
import { Stack, Typography } from "@constants/components";
import { Separator } from "@/components/ui/separator";
import styles from "./style";
import { LandPlot, Network, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function RoomModal({roomNumber, squareMeters, booked, endDate, startDate, id, typology, amountPeople}: IRoom) {
  return (
    <Stack separator={<Separator />}>
      <Stack direction={"row"} className={"flex-wrap"} spacing={2}>
        <Typography className={styles.title}>General Information</Typography>
        <Separator />
        <Stack className={styles.field}>
          <Typography className={styles.label}>Room Number: </Typography>
          <Typography className={styles.value}>{roomNumber}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label} startDecorator={<LandPlot />}>
            Square Meters:{" "}
          </Typography>
          <Typography className={styles.value}>{squareMeters}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label}>Status: </Typography>
          <Typography className={styles.value}>{booked}</Typography>
        </Stack>
        {endDate && (
          <Stack className={styles.field}>
            <Typography className={styles.label}>Booking End: </Typography>
            <Typography className={styles.value}>
              {endDate.toString()}
            </Typography>
          </Stack>
        )}
        { startDate &&
          <Stack className={styles.field}>
            <Typography className={styles.label}>Booking Start: </Typography>
            <Typography className={styles.value}>
              {startDate.toString()}
            </Typography>
          </Stack>
        }
        <Stack className={styles.field}>
          <Typography className={styles.label} startDecorator={<Network />}>
            Typology:{" "}
          </Typography>
          <Typography className={styles.value}>{typology}</Typography>
        </Stack>
        <Stack className={styles.field}>
          <Typography className={styles.label} startDecorator={<Users2 />}>
            Capacity:{" "}
          </Typography>
          <Typography className={styles.value}>{amountPeople}</Typography>
        </Stack>
      </Stack>
      {!booked && <Button>Book</Button>}
    </Stack>
  );
}

export default RoomModal;
