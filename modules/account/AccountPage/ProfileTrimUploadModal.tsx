import { Button, Container, Modal, ModalProps, Slider, Stack, Text } from "@mantine/core"
import useMeActions from "api/useMeActions"
import { useCallback, useRef, useState } from "react"
import AvatarEditor from 'react-avatar-editor'


type ProfileTrimUploadModalProps = {
  imageFile: File | null
} & ModalProps

const ProfileTrimUploadModal = ({ imageFile, onClose, ...modalProps }: ProfileTrimUploadModalProps) => {

  const [zoom, setZoom] = useState<number>(1)
  const editor = useRef<AvatarEditor>(null);

  const { updateProfileImage } = useMeActions()

  const handleProfileImageUpload = useCallback(async() => {
    if (editor.current !== null) {
      const imageCanvas = editor.current.getImage()
      const formData = new FormData()
      imageCanvas.toBlob(blob => {
        if(blob === null) return
        formData.append("upload_file", blob)
        updateProfileImage(formData)
      })
    }
    onClose()
  }, [editor])

  return (
    <Modal
      onClose={onClose}
      {...modalProps}
    >
      <Container sx={{ textAlign: "center" }}>
        {
          imageFile !== null ?
            <AvatarEditor
              ref={editor}
              image={imageFile}
              borderRadius={100}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={zoom}
            /> : ""
        }
        <Stack sx={{ textAlign: "left" }}>
          <Text>ズーム</Text>
          <Slider
            size="sm"
            label={null}
            min={1}
            max={20}
            step={0.1}
            value={zoom}
            onChange={setZoom}
          />
          <Button variant="light" onClick={handleProfileImageUpload}>アップロード</Button>
        </Stack>
      </Container>
    </Modal>
  )
}

export default ProfileTrimUploadModal