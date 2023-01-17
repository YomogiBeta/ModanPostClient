import { useCallback } from 'react';
import { useSWRConfig } from 'swr';
import { UpdateMeParam } from 'types/api';
import { post } from './fetcher';

const useMeActions = () => {
  const { mutate: baseMutate } = useSWRConfig()
  const mutate = useCallback(() => baseMutate((key: string) => key.startsWith("/api/me")), [baseMutate])


  const update = useCallback(
    async (param: UpdateMeParam): Promise<void> => {
      await post(`/api/me`, param)
      mutate()
    },
    [mutate]
  )


  return { update }
}

export default useMeActions