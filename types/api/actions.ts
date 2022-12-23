
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