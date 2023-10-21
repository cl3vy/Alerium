// React Peer Dependencies
import { cache } from "react";
// Axios
import axios from "axios";
// Types and Interfaces
import {IUserRow} from "@/components/custom/table/ColumnDef/ColumnDef";
// Endpoints
import { endpoints } from "@constants/defaults";
export const getUsers = cache(async () => {
  try {
    const usersData = await axios.get<IUserRow[]>(endpoints.url + '/api/user-alerium/residents');
    const initialUsersData = usersData.data;
    if (!initialUsersData)
      return {
        props: initialUsersData,
        error: undefined,
        notFound: true,
      };
    return {
      props: initialUsersData,
      error: undefined,
      notFound: false,
    };
  } catch (responseError) {
    console.error(responseError);
    return {
      error: (responseError as Error).message,
      props: {} as IUserRow[],
      notFound: false,
    };
  }
});
