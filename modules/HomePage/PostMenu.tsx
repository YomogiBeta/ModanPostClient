import { Menu, ActionIcon, Text } from "@mantine/core"
import { IconDots, IconEdit, IconTrash } from "@tabler/icons"

const PostMenu = () => {

  return (
    <Menu shadow="md" width={200} transition="rotate-right" transitionDuration={150} >
      <Menu.Target>
        <ActionIcon size={"xs"}>
          <IconDots />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconEdit size={14} />}>編集</Menu.Item>
        <Menu.Item icon={<IconTrash size={14} />} color="red">削除</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )

}

export default PostMenu