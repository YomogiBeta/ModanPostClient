import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(2, "最低２文字以上入力する必要があります")
  .max(20, "最大で使用できる文字数は２０文字です").required("必須の項目です"),
  email: yup.string().email("メールアドレスの形式である必要があります").required("必須の項目です"),
  // password: yup.string().required("必須の項目です")
})

export default yupResolver(schema)