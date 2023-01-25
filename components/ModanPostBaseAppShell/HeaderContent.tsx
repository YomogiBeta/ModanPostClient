import { Group, Avatar, Text } from "@mantine/core"
import ToggleThemeButton from "components/ToggleThemeButton"
import useAccount from "hooks/AccountInfomation/useAccount"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"

const HeaderContent = () => {

  const { userData } = useAccount()
  const router = useRouter()

  const moveTopPage = useCallback(() => {
    router.push("/")
  },[router])

  return (
    <>
      <Group position="right" sx={{ padding: "0px 16px" }}>
        <Text onClick={moveTopPage} size="lg" fw={700} ff={"Verdana"} sx={{marginRight: "auto", cursor: "pointer"}}>ModanPost</Text>

        <ToggleThemeButton />
        {
          userData !== undefined ?
            <Avatar
              radius="xl"
              href={"/account"}
              component={Link}
              size="lg"
              variant="outline"
              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${userData.profile_image}`}
              alt="it's me"
              color="cyan" />
            :
            <Text href={"/account/login"} component={Link} color="blue">
              ログイン
            </Text>
        }
      </Group>
    </>
  )
}

export default HeaderContent