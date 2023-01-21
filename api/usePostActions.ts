import { useCallback } from 'react';
import { CreatePostParam, UpdatePostParam } from 'types/api';
import { post, destroy } from './fetcher';
import useGlobalMutate from './useGlobalMutate';

const usePostActions = () => {
  const { mutate } = useGlobalMutate("/api/posts")

  const create = useCallback(
    async (param: CreatePostParam): Promise<void> => {
      await post(`/api/posts/`, param)
      mutate()
    },
    [mutate]
  )

  const update = useCallback(
    async (param: UpdatePostParam): Promise<void> => {
      const { id, ...body } = param
      await post(`/api/posts/${id}`, body)
      mutate()
    },
    [mutate]
  )

  const remove = useCallback(
    async (id: string): Promise<void> => {
      await destroy(`/api/posts/${id}`)
      mutate()
    },
    [mutate]
  )

  return { create, update, remove }
}

export default usePostActions