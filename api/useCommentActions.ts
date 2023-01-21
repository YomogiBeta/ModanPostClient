import { useCallback } from 'react';
import { CreateCommentParam } from 'types/api';
import { post } from './fetcher';
import useGlobalMutate from './useGlobalMutate';

const useCommentActions = () => {
  const { mutate } = useGlobalMutate("/api/posts")

  const create = useCallback(
    async ({post_id, ...body}: CreateCommentParam): Promise<void> => {
      await post(`/api/posts/${post_id}/comments`, body)
      mutate()
    },
    [mutate]
  )

  return { create }
}

export default useCommentActions