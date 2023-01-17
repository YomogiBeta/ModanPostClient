import axios from "axios";

const client = axios.create(
  {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }
)

// const convertDateStringToLuxon = (response: AxiosResponse) => {
//   const { data } = response
//   const catedContentData = data.data?.map((data: any) => {
//     const { created_at, updated_at } = data
//     const castedDateTime: {created_at?: DateTime, updated_at?: DateTime} = {}

//     if(created_at !== undefined){
//       castedDateTime["created_at"] = DateTime.fromISO(created_at)
//     }

//     if(updated_at !== undefined){
//       castedDateTime["updated_at"] = DateTime.fromISO(updated_at)
//     }
//     return {
//       ...data,
//       ...castedDateTime
//     }
//   })
//   return {...response, data: {data: catedContentData}}
// }

// client.interceptors.response.use(convertDateStringToLuxon)

export default client