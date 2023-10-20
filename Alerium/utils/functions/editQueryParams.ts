interface PushHistoryParams {
  paramTarget: string;
  paramID: string | number;
}

/**
 * This function works only for pushing query params into the url, it DOES not cause a navigation rerender!
 * @param {Object} params - The parameters for the function.
 * @param {string} params.paramTarget - The param target, where the new param is going to get pushed in the query params, could be an existing value in the query params or a new one.
 * @param {string|number} params.paramID - The param ID, the ID that is going to be added.
 */
const editQueryParams = ({ paramTarget, paramID }: PushHistoryParams) => {
  // Getting the existing params
  const queryParams = new URLSearchParams(window.location.search);
  const newQueryParams: { [key: string]: string } = {};
  Array.from(queryParams).forEach((param) => {
    const [key, value] = param;
    newQueryParams[key] = value;
  });
  const targetID = String(paramID);
  if (newQueryParams[paramTarget]) {
    // this means that the specified param target already exists in the URL
    const targetSet = new Set(newQueryParams[paramTarget].split("-"));
    // we now check if the specified ID exists under this query param
    if (targetSet.has(targetID)) {
      // this means the ID is included, so we'll need to remove it
      targetSet.delete(targetID);
      // now we check the length of the set the removal of this ID, if its 0, we delete the whole param all together, else we keep it
      if (!targetSet.size) {
        delete newQueryParams[paramTarget];
      } else newQueryParams[paramTarget] = Array.from(targetSet).join("-");
    } else {
      // The param itself exists, but the target ID is not included in it, so let's add it
      targetSet.add(targetID);
      newQueryParams[paramTarget] = Array.from(targetSet).join("-");
    }
  } else {
    // the param target does not exist at all in the query params, we need to add it with paramID as the starting value
    newQueryParams[paramTarget] = targetID;
  }
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${new URLSearchParams(newQueryParams)}`
  );
};
export default editQueryParams;
export type { PushHistoryParams };
