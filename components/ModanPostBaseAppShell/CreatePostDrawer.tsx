import { ActionIcon, Drawer, Text } from "@mantine/core"
import { IconArrowDownCircle } from '@tabler/icons';
import { useCallback, useState } from "react";
import PostInputField from "../PostInputField";

const OpenPostDrawer = () => {

  const [open, setOpen] = useState<boolean>(false)

  const closePostDrawer = useCallback(() => {
    setOpen(false)
  }, [open])

  const openPostDrawer = useCallback(() => {
    setOpen(true)
  }, [open])

  return (
    <>
      <ActionIcon onClick={openPostDrawer} color="blue" size="lg" variant="light" sx={{ width: "100%" }}>
        <IconArrowDownCircle />
        <Text pl={8} pr={8}>Post</Text>
      </ActionIcon>
      <Drawer
        overlayOpacity={0.15}
        transition="scale-y"
        transitionDuration={250}
        transitionTimingFunction="ease"
        overlayBlur={3}
        position="top"
        size="lg"
        opened={open}
        onClose={closePostDrawer} >
        <PostInputField onCloseParent={closePostDrawer} />
      </Drawer>

    </>
  )
}

export default OpenPostDrawer