export type Post = {
  id: string,
  title: string,
  owner_id: string,
  owner_name: string,
  content: string,
  created_at: string,
  profile_image: string,

  comments?: CommentType[]
}

export type CommentType = {
  id : string,
  owner_id : string,
  owner_name : string,
  profile_image : string,
  post_id : string,
  content : string,
  created_at : string,
}

export type User = {
  id: string,
  email: string,
  name: string,
  profile_image: string,
}