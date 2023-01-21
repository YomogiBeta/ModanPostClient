import { useCallback } from "react"
import { useSWRConfig } from "swr"
import { unstable_serialize } from 'swr/infinite'


const useGlobalMutate = (baseKey: string) => {
  const { mutate: baseMutate } = useSWRConfig()

  const mutate1 = useCallback(() => baseMutate((key: string) => key.startsWith(baseKey)), [baseMutate])
  const mutate2 = useCallback(() => baseMutate(unstable_serialize((_index, _prevData) => baseKey)), [baseMutate])

  const mutate = useCallback(() => {
    mutate1()
    mutate2()
  }, [mutate1, mutate2])
  return { mutate }
}

export default useGlobalMutate