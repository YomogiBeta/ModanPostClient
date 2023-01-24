import { Group, Avatar, Text } from "@mantine/core"
import ToggleThemeButton from "components/ToggleThemeButton"
import useAccount from "hooks/AccountInfomation/useAccount"
import Link from "next/link"

const HeaderContent = () => {

  const { userData } = useAccount()

  return (
    <>
      <Group position="right" sx={{ padding: "0px 16px" }}>
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