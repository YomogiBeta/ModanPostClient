import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'
import { Post, SWRPaginationData } from "types";
import { paginationGet } from "./fetcher";
import { useCallback } from 'react';

const usePosts = (options?: SWRInfiniteConfiguration) => {

  const getKey = (pageIndex: number, previousPageData: SWRPaginationData<Post[]>) => {
    // 最初のページでは、`previousPageData` がありません
    if (pageIndex === 0) return `/api/posts`

    // 最後に到達した
    if ((previousPageData && !previousPageData.data) || previousPageData.meta.next_cursor === null) return null

    // API のエンドポイントにカーソルを追加します
    return `/api/posts?cursor=${previousPageData.meta.next_cursor}`
  }

  const { setSize, data: originData, ...other } = useSWRInfinite<SWRPaginationData<Post[]>>(getKey, paginationGet, options);

  const next = useCallback(() => {
    setSize(prevSize => prevSize + 1)
  }, [setSize])

  const data = originData?.map(data => data.data)
  const paginationMetas = originData?.map(data => ({ links: { ...data.links }, meta: { ...data.meta } }))
  const isLast = paginationMetas?.slice(-1)[0].meta.next_cursor === null


  return { next, data, paginationMetas, isLast, ...other }
}

export default usePosts