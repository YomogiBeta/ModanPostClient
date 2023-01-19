import { useCallback } from 'react';
import { useSWRConfig } from 'swr';
import { CreateCommentParam } from 'types/api';
import { post } from './fetcher';

const useCommentActions = () => {
  const { mutate: baseMutate } = useSWRConfig()
  const mutate = useCallback(() => baseMutate((key: string) => key.startsWith("/api/posts")), [baseMutate])

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