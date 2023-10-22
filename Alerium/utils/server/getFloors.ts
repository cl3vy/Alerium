// React Peer Dependencies
import { cache } from "react";
// Axios
import axios from "axios";
// Types and Interfaces
import { IFloor } from "@constants/interfaces";
// Endpoints
import { endpoints } from "@constants/defaults";
export const getFloors = cache(async (buildingId: string) => {
  try {

    const buildingData = await axios.get<IFloor[]>(endpoints.url + `/api/building/floors/${buildingId}`);


    const initialBuildingData = buildingData.data;

    console.log(initialBuildingData);

    if (!initialBuildingData)
      return {
        props: initialBuildingData,
        error: undefined,
        notFound: true,
      };
    return {
      props: initialBuildingData,
      error: undefined,
      notFound: false,
    };
  } catch (responseError) {
    console.error(responseError);
    return {
      error: (responseError as Error).message,
      props: {} as IFloor[],
      notFound: false,
    };
  }
});
