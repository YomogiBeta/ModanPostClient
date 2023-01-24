import { useCallback } from 'react';
import { CreatePostImageParam } from 'types/api';
import { post } from './fetcher';
import useGlobalMutate from './useGlobalMutate';

const usePostImageActions = () => {
  const { mutate } = useGlobalMutate("/api/posts")

  const create = useCallback(
    async ({ post_id, ...param }: CreatePostImageParam): Promise<void> => {
      await post(`/api/posts/${post_id}/post_images`, param.upload_file, { headers: { "Content-Type": "multipart/form-data" } })
      mutate()
    },
    [mutate]
  )


  return { create }
}

export default usePostImageActions