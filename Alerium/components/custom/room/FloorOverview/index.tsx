import React from "react";
import { IRoom } from "@/interfaces/IRoom";
import { Modal, RoomModal, Stack, ViewUser } from "@constants/components";
import styles from "./style";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

type FlorOverviewProps = {
  rooms: IRoom[];
};

function FloorOverview({ rooms }: FlorOverviewProps) {
  return (

    <Stack direction={"row"} className={"flex-wrap w-[50%] gap-0 absolute right-[10px] top-[10px]"} spacing={1}>
      {rooms.map((data, i) => (
        <Modal
          dialogTitle={'Room Overview'}
          dialogTrigger={
            <Stack className={styles.room(data.booked, i)}>{data.roomNumber}</Stack>
          }
        >
         <RoomModal {...data} booked={i % 4 === 0}/>
        </Modal>
      ))}
    </Stack>
  );
}

export default FloorOverview;
