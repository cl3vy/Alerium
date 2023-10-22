"use client";
import React, { useState } from "react";
import { Floor, FloorOverview } from "@constants/components";
import { IFloor } from "@/interfaces/IFloor";
import { IRoom } from "@/interfaces/IRoom";
import "./styles.css";

type FloorViewProps = {
  floors: IFloor[];
};

function FloorView({ floors }: FloorViewProps) {
  const [data, setData] = useState<IRoom[] | undefined>(undefined);
  const handleFloorClick = (data: IRoom[]) => {
    setData(data);
  };
  return data === undefined ? (
    <div className={"map"}>
      {floors.map(({ floorNr, id }, i) => (
        <Floor
          id={id}
          length={floors.length}
          floorNr={floorNr}
          index={i}
          onClick={handleFloorClick}
          key={i}
        />
      ))}
    </div>
  ) : (
    <FloorOverview rooms={data}/>
  );
}

export default FloorView;
export type { FloorViewProps };
