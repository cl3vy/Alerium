"use client";
import React, { useState } from "react";
import { useFetch } from "@constants/hooks";
import { endpoints } from "@constants/defaults";
import { IRoom } from "@/interfaces/IRoom";

type FloorProps = {
  id: number;
  length: number;
  floorNr: number;
  index: number;
  onClick: (data: IRoom[]) => void
};
const colors = [
  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
];

function Floor({ id, length, floorNr, index: i, onClick }: FloorProps) {
  const [preventFetch, setPreventFetch] = useState(true)
useFetch<IRoom[]>({
    url: endpoints.url + "/api/room/floor/" + id,
    type: "GET",
    preventFetch,
    onSuccess: onClick
  });
  return (
    <div className={`floor`} style={{ zIndex: length - i * 10 }} key={id} onClick={() => {
      setPreventFetch(false)
    }}>
      <span className={`label ${colors[i]} after:${colors[i]}`}>{floorNr}</span>
      <div className={`plan ${colors[i]}`}></div>
    </div>
  );
}

export default Floor;
export type { FloorProps };
