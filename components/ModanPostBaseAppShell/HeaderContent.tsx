import { Group, Avatar, Text } from "@mantine/core"
import useMe from "api/useMe"
import ToggleThemeButton from "components/ToggleThemeButton"
import Link from "next/link"
import CreatePostDrawer from "./CreatePostDrawer"

const HeaderContent = () => {

  const { data: userData } = useMe()

  return (
    <>
      <Group position="right" sx={{padding: "0px 16px"}}>
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
      <CreatePostDrawer />
    </>
  )
}

export default HeaderContent