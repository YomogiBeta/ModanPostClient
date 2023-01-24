
export type UpdateMeParam = {
  name?: string,
  email?: string
}

export type LoginArgumentsType = {
  email: string,
  password: string
}

export type RegisterArgumentsType = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

export type CreatePostParam = {
  title: string,
  content: string
}

export type UpdatePostParam = {
  id: string,
  title: string,
  content: string
}

export type CreateCommentParam = {
  post_id: string | undefined,
  content: string
}

export type CreatePostImageParam = {
  post_id: string,
  upload_file: FormData
}