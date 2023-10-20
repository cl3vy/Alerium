// Next Peer Dependencies
import { useRouter, useSearchParams } from "next/navigation";
// Custom Hooks And Functions
import { normalizeURL } from "@constants/utils";
// Types And Interfaces
type PushNavigationParams =
  | {
      typeOfParam: "multiple";
      typeOfAddition: "current" | "new";
      subIDIndex?: number;
      paramName: string;
      addedIDs: number[];
      route: string;
    }
  | {
      typeOfParam: "singular";
      paramName: string;
      addedIDs: number[];
      route: string;
    };
/**
 * handleNavigation - handle the editing of the URL Params with navigation build in, supports sub navigation within the same param
 *  @param {Object} properties - the params for the function
 *  @param {"singular" | "multiple"} properties.typeOfParam - if this param has sub params seperated by ~
 *  @param {number} [properties.typeOfAddition] - 0 for open in this subID, 1 for start a new SubID section separated with
 *  @param {number} [properties.subIDIndex] - only required for when the typeOfAddition is 0, the subParamIndex where you want the changes to be made
 */
const useEditQueryParams = (properties: PushNavigationParams) => {
  const router = useRouter();
  let params = useSearchParams();
  const { typeOfParam, paramName, addedIDs, route } = properties;
  const existingQueryParams: { [key: string]: Set<string>[] } = {};
  for (let [key, stringValue] of params.entries()) {
    const value = stringValue.split("-");
    const existingParams = existingQueryParams[key];
    if (!existingParams) {
      if (stringValue.includes("~")) {
        stringValue.split("~").forEach((subIDsString, i) => {
          if (i === 0) {
            existingQueryParams[key] = [new Set(subIDsString.split("-"))];
          } else {
            existingQueryParams[key].push(new Set(subIDsString.split("-")));
          }
        });
      } else existingQueryParams[key] = [new Set(value)];
    } else {
      if (stringValue.includes("~")) {
        stringValue.split("~").forEach((subIDsString) => {
          existingQueryParams[key].push(new Set(subIDsString.split("-")));
        });
      } else existingQueryParams[key].push(new Set(value));
    }
  }

  // now editing the query params to add the IDs
  if (existingQueryParams[paramName]) {
    // the key already exists, it should add upon that
    // we now check the type of the param
    if (typeOfParam === "multiple") {
      const { typeOfAddition, subIDIndex } = properties;
      // add to new tab
      if (typeOfAddition === "current") {
        // we want to add upon it
        addedIDs.forEach((ID) => {
          existingQueryParams[paramName][subIDIndex!].add(String(ID));
        });
      } else if (typeOfAddition === "new") {
        // we want to create a new subID separation
        existingQueryParams[paramName].push(new Set(addedIDs.map(String)));
      }
    } else {
      // the type of this param is singular
      // well always play with array[0]
      // typeofAddition is undefined as well as subIDIndex
      // add to this tab
      existingQueryParams[paramName][0] = new Set([
        ...existingQueryParams[paramName][0],
        ...addedIDs.map(String),
      ]);
    }
  } else {
    // we'll have to add the key
    // when adding the key we always start from index 0
    existingQueryParams[paramName] = [new Set(addedIDs.map(String))];
  }
  // TODO
  const newQueryParams = Object.entries(existingQueryParams).map(
    ([key, value]) =>
      `${key}=${value.map((set) => [...set].join("-")).join("~")}`
  );
  const url = normalizeURL(`/${route}/?${newQueryParams.join("&")}`);
  return () => {
    router.push(url);
  };
};
export default useEditQueryParams;
export type { PushNavigationParams };
