
export type SWRPaginationData<T> = {
  data: T;
  links: {
    first: string | null,
    last: string | null,
    prev: string | null,
    next: string | null,
  },
  meta: {
    path: string | null,
    per_page: string | null,
    next_cursor: string | null,
    prev_cursor: string | null,
  }
}

export type Post = {
  id: string,
  title: string,
  owner_id: string,
  owner_name: string,
  content: string,
  images: PostImage[],
  profile_image: string,
  created_at: string,
}

export type PostImage = {
  id: string,
  path: string,
  post_id: string,
  created_at: string,
}

export type CommentType = {
  id: string,
  owner_id: string,
  owner_name: string,
  profile_image: string,
  post_id: string,
  content: string,
  created_at: string,
}

export type User = {
  id: string,
  email: string,
  name: string,
  profile_image: string,
}