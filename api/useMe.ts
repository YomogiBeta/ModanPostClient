import useSWR, { SWRConfiguration } from "swr";
import { User } from "types";
import { get } from "./fetcher";

const useMe = (options?: SWRConfiguration) => {
  return useSWR<User>("/api/me", get, options);
}

export default useMe