import { ActionIcon, Text } from "@mantine/core"
import { IconCirclePlus } from "@tabler/icons"
import PostInputModal from 'components/PostInputModal';
import { useCallback, useState } from "react";
import { openConfirmModal } from "@mantine/modals";
import { useRouter } from "next/router";
import useAccount from 'hooks/AccountInfomation/useAccount';

const PostCreateButton = () => {

  const [open, setOpen] = useState<boolean>(false)
  const { isLoggined } = useAccount()
  const router = useRouter()

  const openMoveLoginModal = useCallback(() => openConfirmModal({
    title: 'まずは、ログイン',
    centered: true,
    children: (
      <Text size="sm">
        投稿機能やコメント機能を利用するには、サービスにログインする必要があります。
      </Text>
    ),
    labels: { confirm: 'ログインする', cancel: '今はまだいい' },
    onConfirm: () => router.push("/account/login"),
  }), [openConfirmModal])

  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const handleOpen = useCallback(() => {
    if (isLoggined) {
      setOpen(true)
    } else {
      openMoveLoginModal()
    }
  }, [setOpen,openMoveLoginModal,isLoggined])

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