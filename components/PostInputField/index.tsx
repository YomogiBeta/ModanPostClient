import { Button, Container, Stack } from "@mantine/core"
import RHFTextArea from "components/Inputs/RHFTextArea"
import RHFTextField from "components/Inputs/RHFTextField"
import { memo } from "react"
import { useForm } from "react-hook-form"
import resolver from "./resolver"
import usePostActions from '../../api/usePostActions';

type InputPostParam = {
  title: string,
  content: string
}

type PostCreateFieldProps = {
  onCloseDrawer: () => void
}

const PostCreateField = ({onCloseDrawer}: PostCreateFieldProps) => {

  const { create } = usePostActions()

  const { control, handleSubmit } = useForm<InputPostParam>({
    resolver: resolver
  })

  const doPost = handleSubmit((data: InputPostParam) => {
    create(data)
    onCloseDrawer()
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
          <Button variant="light" onClick={doPost}>Post!</Button>
        </Stack>
      </Container>

    </>
  )
}
export default memo(PostCreateField)