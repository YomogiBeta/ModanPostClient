import { Stack, Paper, Title, Container, Button, Text } from "@mantine/core"
import { useForm } from "react-hook-form"
import RHFTextField from "components/Inputs/RHFTextField"
import resolver from "./resolver"
import { login } from "api/accountRequest"
import { NextPage } from "next"
import { LoginArgumentsType } from "types"
import Link from "next/link"
import { useState } from "react"

const RegisterPage: NextPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<LoginArgumentsType>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: resolver
  })

  const doLogin = handleSubmit(async data => {
    setLoading(true)
    setError(false)
    if (await login(data)) {
      window.location.href = "/"
    } else {
      setError(true)
      setLoading(false)
    }
  })

  return (
    <>
      <Container size="sm" px="xs" sx={{ marginTop: "80px" }}>
        <Paper shadow="xl" radius="md" p="lg" withBorder >
          <Title order={3} mb={24}>ログインしよう</Title>
          <Stack spacing="xl">
            {
              error ? 
              <Text color="red">メールアドレスまたはパスワードが間違っています</Text> : ""
            }
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
            <Link style={{ fontSize: "14px" }} href="/account/register">または、アカウント登録＞＞</Link>
            <Button loading={loading} variant="light" radius="md" onClick={doLogin}>Login</Button>
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

export default RegisterPage