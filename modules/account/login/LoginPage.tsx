import { Stack, Paper, Title, Container, Button } from "@mantine/core"
import { useForm } from "react-hook-form"
import RHFTextField from "components/Inputs/RHFTextField"
import resolver from "./resolver"
import Router from "next/router"
import { login } from "api/accountRequest"
import { NextPage } from "next"
import { LoginArgumentsType } from "types"

const RegisterPage:NextPage  = () => {

  const { control, handleSubmit } = useForm<LoginArgumentsType>({
    resolver: resolver
  })

  const doLogin = handleSubmit(async data => {
    if(await login(data)){
      Router.push("/")
    }
  })

  return (
    <>
      <Container size="sm" px="xs" sx={{ marginTop: "80px" }}>
        <Paper shadow="xl" radius="md" p="lg" withBorder >
          <Title order={3} mb={24}>ログインしよう</Title>
          <Stack spacing="xl">
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
            <Button variant="light" radius="md" onClick={doLogin}>Login</Button>
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

export default RegisterPage