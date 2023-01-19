import { Menu, ActionIcon, Text, Box } from "@mantine/core"
import { IconDots, IconEdit, IconTrash } from "@tabler/icons"
import { useCallback, useState } from "react"
import { Post } from "types"
import UpdatePostModal from "./UpdatePostModal"
import { openConfirmModal } from '@mantine/modals';
import usePostActions from "api/usePostActions"

type PostMenuProps = {
  post: Post
}

const PostMenu = ({ post }: PostMenuProps) => {

  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false)

  const { remove } = usePostActions()

  const closeUpdateModal = useCallback(() => {
    setUpdateModalOpen(false)
  }, [setUpdateModalOpen])

  const openUpdateModal = useCallback(() => {
    setUpdateModalOpen(true)
  }, [setUpdateModalOpen])

  const doDeletePost = useCallback(() => {
    openConfirmModal({
      title: '投稿を削除します',
      centered: true,
      children: (
        <Text size="sm">
          削除した投稿は復元できません。また、投稿についているコメントも削除されます。
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: "Cancel" },
      confirmProps: { color: 'red' },
      onConfirm: () => remove(post.id),
    });

  }, [])

  return (
    <Box sx={{marginLeft: "auto"}}>
      <Menu shadow="md" width={200} transition="rotate-right" transitionDuration={250}  >
        <Menu.Target>
          <ActionIcon size={"xs"}>
            <IconDots />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item onClick={openUpdateModal} icon={<IconEdit size={14} />}>編集</Menu.Item>
          <Menu.Item onClick={doDeletePost} icon={<IconTrash size={14} />} color="red">削除</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <UpdatePostModal
        post={post}
        centered={true}
        opened={updateModalOpen}
        onClose={closeUpdateModal}
        title="Edit post"
      />
    </Box>
  )

}

export default PostMenu