import { Button, Container, Stack } from "@mantine/core"
import RHFTextArea from "components/Inputs/RHFTextArea"
import RHFTextField from "components/Inputs/RHFTextField"
import { memo } from "react"
import { useForm } from "react-hook-form"
import resolver from "./resolver"
import usePostActions from '../../api/usePostActions';
import { Post } from "types"

type InputPostParam = {
  title: string,
  content: string
}

type PostInputFieldProps = {
  onCloseParent?: () => void
  oldPostData?: Post
}

const PostInputField = ({ onCloseParent, oldPostData }: PostInputFieldProps) => {

  const { create, update } = usePostActions()

  const { control, handleSubmit } = useForm<InputPostParam>({
    defaultValues: {
      title: oldPostData?.title,
      content: oldPostData?.content
    },
    resolver: resolver
  })

  const doPost = handleSubmit((data: InputPostParam) => {
    if (oldPostData === undefined) create(data)
    else update({ id: oldPostData.id, ...data })
    onCloseParent?.()
  })

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
          <Button variant="light" onClick={doPost}>Submit</Button>
        </Stack>
      </Container>

    </>
  )
}
export default memo(PostInputField)