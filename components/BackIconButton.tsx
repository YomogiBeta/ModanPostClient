import { ActionIcon } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"


type BackIconButtonProps = {
  href?: string
}
const BackIconButton = ({ href }: BackIconButtonProps) => {
  const router = useRouter()
  const movePage = useCallback(() => {
    if (href !== undefined) router.push(href)
    else router.back()
  }, [router, href])
return (
  <ActionIcon onClick={movePage}>
    <IconArrowLeft />
  </ActionIcon>
)
}

export default BackIconButton