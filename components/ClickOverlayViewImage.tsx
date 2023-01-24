import { Image, Modal } from "@mantine/core"
import { ImageProps } from "next/image"
import { useCallback, useState } from "react"


type ClickOverlayViewImageProps = {
  src: string
  alt: string
} & ImageProps
const ClickOverlayViewImage = ({ src, alt, ...imageProps }: ClickOverlayViewImageProps) => {

  const [fullViewModal, setFullViewModal] = useState<boolean>(false)

  const handleClose = useCallback(() => setFullViewModal(false), [])
  const handleOpen = useCallback(() => setFullViewModal(true), [])

  return (
    <>
      <Image src={src} alt={alt} onClick={handleOpen} {...imageProps} imageProps={{loading: "lazy"}} />
      <Modal
        opened={fullViewModal}
        onClose={handleClose}
        centered
        styles={{ modal: {backgroundColor: "transparent"}}}
        size={"70%"}
      >
        <Image src={src} alt={alt} width={"100%"}/>
      </Modal>
    </>

  )
}

export default ClickOverlayViewImage