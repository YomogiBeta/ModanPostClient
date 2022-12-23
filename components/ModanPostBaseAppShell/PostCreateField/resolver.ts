import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().min(2,"2文字以上入力する必要があります").required("必須の項目です"),
  content: yup.string().min(2,"2文字以上入力する必要があります").required("必須の項目です")
})

export default yupResolver(schema)