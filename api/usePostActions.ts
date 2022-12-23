import { useCallback } from 'react';
import { useSWRConfig } from 'swr';
import { CreatePostParam } from 'types/api';
import { post } from './fetcher';

const usePostActions = () => {
  const { mutate: baseMutate } = useSWRConfig()
  const mutate = useCallback(() => baseMutate((key: string) => key.startsWith("/api/posts")), [baseMutate])

  const create = useCallback(
    async (param: CreatePostParam): Promise<void> => {
      await post(`/api/posts/`, param)
      mutate()
    },
    [mutate]
  )

  return { create }
}

export default usePostActions