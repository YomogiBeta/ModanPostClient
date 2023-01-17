import useSWR, { SWRConfiguration } from "swr";
import { Post } from "types";
import { get } from "./fetcher";

const usePost = (postId: string | undefined, options?: SWRConfiguration) => {
  return useSWR<Post>(`/api/posts/${postId}`, get, options);
}

export default usePost