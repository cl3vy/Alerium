import { useDebugValue, useEffect, useState } from "react";
import axios from "axios";

interface FetchProps<T> {
  url: string;
  type: string;
  body?: object;
  headers?: object;
  queryParams?: Record<string, string>;
  onSuccess?: (data: T) => void;
  preventFetch?: boolean;
}

interface FetchResult<T> {
  data: T | null;
  error: string;
  loading: boolean;
}

interface Cache {
  [key: string]: any;
}

const cache: Cache = {};

/**
 *
 * This function utilises axios to make fetch requests.
 * @template T
 * @param {FetchProps<T>} params - The parameters for the function.
 * @param {string} params.url - The endpoint where the fetch is going to be requested from.
 * @param {"GET" | "POST"} params.type - The method of the request.
 * @param {Object} [params.body] - Optional, the body of the request, works with POST only.
 * @param {Object} [params.headers] - Optional, the headers of the fetch such as origin policy, authentications, bearers, etc...
 * @param {Record<string, string>} [params.queryParams] - Optional, the query params that get added after the endpoint (?).
 * @param {(data: T) => void} [params.onSuccess] - Optional, the success callback function.
 * @param {boolean} [params.preventFetch] - Optional, a boolean to stop the fetch if the request isn't needed yet but to load the necessary hooks such as we get no errors!
 *
 * @returns {FetchResult<T>} results - The Fetch Result
 * @property {T} results.data - The fetched data
 * @property {unknown} results.error - Returns an error if any, undefined if no error happened,
 * @property {boolean} results.loading - If the fetch is loading or not
 */

function useFetch<T>({
  url: requestUrl,
  type,
  body,
  headers,
  queryParams,
  onSuccess,
  preventFetch,
}: FetchProps<T>): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Use the useDebugValue hook to display custom debug information
  useDebugValue(
    `URL: ${requestUrl}, Loading: ${loading}, URLParams: ${queryParams}`
  );

  useEffect(() => {
    // Create a CancelToken source
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setLoading(true);
        let url = requestUrl;

        if (queryParams) {
          const params = new URLSearchParams(queryParams);
          url = url + `?${params}`;
        }
        // Check if the data for the given URL is already in the cache
        if (cache[url]) {
          // If it is, use the cached data instead of making a new request
          setData(cache[url]);
          if (onSuccess) onSuccess(cache[url]);
        } else {
          // If it's not in the cache, make a new request

          const response = await axios({
            method: type,
            url,
            data: body,
            headers, // Pass the cancel token to the request
            cancelToken: source.token,
          });

          // Store the data in the cache
          cache[url] = response.data;

          setData(response.data);
          if (onSuccess) onSuccess(response.data);
        }
      } catch (error) {
        // Check if the error was caused by a cancelled request
        if (!axios.isCancel(error)) {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    if (!preventFetch) fetchData();
    else setLoading(false);

    // Cancel the request when the component is unmounted
    return () => {
      source.cancel();
    };
  }, [queryParams, body, preventFetch]);

  return { data, error, loading };
}

export default useFetch;
export type { FetchProps, FetchResult, Cache };
