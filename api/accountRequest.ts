import { LoginArgumentsType, RegisterArgumentsType } from "types/api";
import client from "./client";


export const login = async (data: LoginArgumentsType) => {
  await client.get('/sanctum/csrf-cookie')
  try {
    await client.post('/api/login', data)
    return true
  } catch (error) {
    return false
  }
}

export const register = async (data: RegisterArgumentsType) => {
  await client.get('/sanctum/csrf-cookie')
  try {
    await client.post('/api/register', data)
    return true
  } catch (error) {
    return false
  }
}