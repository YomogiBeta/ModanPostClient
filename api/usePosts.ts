import useSWR, { SWRConfiguration } from "swr";
import { Post } from "types";
import { get } from "./fetcher";

const usePosts = (options?: SWRConfiguration) => {
  return useSWR<Post[]>("/api/posts", get, options);
}

export default usePosts