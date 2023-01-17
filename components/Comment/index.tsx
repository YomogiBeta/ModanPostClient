import { Paper, Text } from "@mantine/core"
import { CommentType } from "types/api"

type CommentProps = {
  comment: CommentType
}

const Comment = ({ comment }: CommentProps) => {

  return (
    <>
      <Paper shadow="sm" radius="lg" p="md" withBorder>
        <Text>{comment.content}</Text>
      </Paper>
    </>
  )
}
export default Comment