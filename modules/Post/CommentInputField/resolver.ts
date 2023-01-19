import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  content: yup.string().min(2,"２文字以上入力する必要があります").max(1000,"最大1000文字である必要があります").required("必須の項目です")
})

export default yupResolver(schema)