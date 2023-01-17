export type Post = {
  id: string,
  title: string,
  user_id: string,
  content: string,
  created_at: string,

  comments?: CommentType[]
}

export type CommentType = {
  id : string,
  user_id : string,
  post_id : string,
  content : string,
  created_at : string,
}

export type User = {
  id: string,
  email: string,
  name: string,
}