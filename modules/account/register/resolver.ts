import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(2, "最低２文字以上入力する必要があります")
    .max(20, "最大で使用できる文字数は２０文字です")
    .required('必須の項目です'),
  email: yup.string().email("メールアドレスの形式である必要があります").required("必須の項目です"),
  password: yup.string()
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])[!-~]{8,20}$/, { message: "パスワードはアルファベットと数字をどちらも含み、8字以上20字以下である必要があります" })
    .required("必須の項目です"),
  password_confirmation: yup.string()
  .oneOf([yup.ref("password"), null], "入力したパスワードと一致しません").required("必須の項目です")
})

export default yupResolver(schema)