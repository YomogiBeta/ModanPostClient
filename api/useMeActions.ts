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

  const updateProfileImage = useCallback(
    async (formData: FormData): Promise<void> => {
      await post(`/api/me/profile`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      mutate()
    },
    [mutate]
  )


  return { update, updateProfileImage }
}

export default useMeActions