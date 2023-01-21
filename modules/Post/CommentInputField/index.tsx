import { Box, Button, Group, Paper, Sx, Text } from "@mantine/core"
import useCommentActions from "api/useCommentActions"
import RHFTextField from "components/Inputs/RHFTextField"
import { useForm } from "react-hook-form"
import resolver from "./resolver"


type CommentInputFieldType = {
  post_id: string | undefined,
  sx?: Sx
}

const CommentInputField = ({ post_id, sx }: CommentInputFieldType) => {

  const { create } = useCommentActions()
  const { control, handleSubmit, setValue } = useForm<{ content: string }>({
    defaultValues: { content: "" },
    resolver: resolver
  })

  const onCreateComment = handleSubmit((data) => {
    create({
      post_id: post_id,
      content: data.content
    }).then(() => {
      setValue("content", "")
    })
  })

  return (
    <Box sx={sx}>
      <Paper sx={{ borderRadius: "16px" }} p={16} withBorder>
        <Text>コメントを送信</Text>
        <Group position="center" mt={8}>
          <RHFTextField sx={{ width: "70%" }} control={control} name="content" />
          <Button onClick={onCreateComment}>送信</Button>
        </Group>
      </Paper>
    </Box>
  )
}

export default CommentInputField