import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("メールアドレスの形式である必要があります").required("必須の項目です"),
  password: yup.string().required("必須の項目です")
})

export default yupResolver(schema)