import { Stack, Paper, Title, Container, Button } from "@mantine/core"
import { useForm } from "react-hook-form"
import RHFTextField from "components/Inputs/RHFTextField"
import resolver from "./resolver"
import Router from "next/router"
import { register } from "api/accountRequest"
import { NextPage } from "next"
import { RegisterArgumentsType } from "types"
import Link from "next/link"

const RegisterPage:NextPage  = () => {

  const { control, handleSubmit } = useForm<RegisterArgumentsType>({
    defaultValues:{
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },
    resolver: resolver
  })

  const doRegister = handleSubmit(async data => {
    if(await register(data)){
      Router.push("/account/login")
    }
  })

  return (
    <>
      <Container size="sm" px="xs" sx={{ marginTop: "80px" }}>
        <Paper shadow="xl" radius="md" p="lg" withBorder >
          <Title order={3} mb={24}>Modan Post アカウント登録</Title>
          <Stack spacing="xl">
            <RHFTextField
              control={control}
              name="name"
              label="名前"
              withAsterisk
            />
            <RHFTextField
              control={control}
              name="email"
              label="メールアドレス"
              type="email"
              withAsterisk
            />
            <RHFTextField
              control={control}
              name="password"
              label="パスワード"
              type="password"
              withAsterisk
            />
            <RHFTextField
              control={control}
              name="password_confirmation"
              label="パスワード再入力"
              wrapperProps={{ autoComplete: "new-password" }}
              type="password"
              withAsterisk
            />
            <Link style={{fontSize: "14px"}} href="/account/login">または、ログイン＞＞</Link>
            <Button variant="light" radius="md" onClick={doRegister}>Register</Button>
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

export default RegisterPage