import { ActionIcon, Button, Container, Stack, FileButton, Image, Box } from "@mantine/core"
import RHFTextArea from "components/Inputs/RHFTextArea"
import RHFTextField from "components/Inputs/RHFTextField"
import { memo, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import resolver from "./resolver"
import usePostActions from '../../api/usePostActions';
import { Post } from "types"
import { IconPlus, IconX } from "@tabler/icons"
import usePostImageActions from "api/usePostImageActions"
import ClickOverlayViewImage from "components/ClickOverlayViewImage"


type InputPostParam = {
  title: string,
  content: string
}

type PostInputFieldProps = {
  onCloseParent?: () => void
  oldPostData?: Post
}

const PostInputField = ({ onCloseParent, oldPostData }: PostInputFieldProps) => {

  const { create: postCreate, update } = usePostActions()
  const { create: postImageCreate } = usePostImageActions()

  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<InputPostParam>({
    defaultValues: {
      title: oldPostData?.title,
      content: oldPostData?.content
    },
    resolver: resolver
  })

  const doPost = handleSubmit(async (data: InputPostParam) => {
    setLoading(true)
    if (oldPostData === undefined) {
      const response = await postCreate(data)
      if (files.length > 0) {
        for (const file of files){
          const formData = new FormData()
          formData.append('upload_file', file)
          await postImageCreate({
            post_id: response.id,
            upload_file: formData
          })
        }
        onCloseParent?.()
      }
      onCloseParent?.()
    } else {
      await update({ id: oldPostData.id, ...data })
      onCloseParent?.()
    }
  })

  const handleFileInput = useCallback((payload: File) => {
    setFiles(prevFileList => [...prevFileList, payload])
  }, [setFiles])

  const removeAtFileList = useCallback((number: number) => () => {
    setFiles(prevFileList => prevFileList.filter((_file, index) => index !== number))
  }, [])

  return (
    <>
      <Container size="md" px="xs" sx={{ marginTop: "24px" }}>
        <Stack spacing={"xs"}>
          <RHFTextField
            name="title"
            control={control}
            label="タイトル"
          />
          <RHFTextArea
            name="content"
            control={control}
            label="内容"
            autosize
            minRows={3}
            maxRows={5}
          />
          {oldPostData === undefined && files.length < 4 ?
            <>
              <FileButton
                onChange={handleFileInput}
                accept="image/png,image/jpeg">
                {(props) =>
                  <ActionIcon  {...props}>
                    <IconPlus />
                  </ActionIcon>
                }

              </FileButton>
            </>
            :
            ""
          }
          <Box sx={{ display: "flex", gap: "16px", overflowX: "scroll", width: "100%", marginTop: "16px" }}>
            {
              files.map((file, index) => (
                <Box key={index} sx={{ width: "40%", '@media (max-width: 600px)': { width: "70%" }, flexShrink: 0, position: "relative" }}>
                  <ActionIcon
                    color={"red"}
                    onClick={removeAtFileList(index)}
                    sx={{ position: "absolute", zIndex: 1, right: "4px", top: "4px" }} variant="light" >
                    <IconX />
                  </ActionIcon>
                  <ClickOverlayViewImage src={URL.createObjectURL(file)} alt={""} />
                </Box>
              ))
            }
          </Box>
          <Button loading={loading} variant="light" onClick={doPost}>Submit</Button>
        </Stack>
      </Container>

    </>
  )
}
export default memo(PostInputField)