import { ActionIcon } from "@mantine/core"
import { IconCirclePlus } from "@tabler/icons"
import PostInputModal from 'components/PostInputModal';
import { useCallback, useState } from "react";

const PostCreateButton = () => {

  const [open, setOpen] = useState<boolean>(false)

  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const handleOpen = useCallback(() => setOpen(true), [setOpen])

  return (
    <>
      <ActionIcon
        sx={{ position: "fixed", bottom: "32px", right: "32px" }}
        onClick={handleOpen}
        color="blue"
        size={56}
        radius="xl"
        variant="filled">
        <IconCirclePlus size={56} />
      </ActionIcon>
      <PostInputModal title="新しい投稿" opened={open} centered onClose={handleClose} />
    </>
  )

}

export default PostCreateButton