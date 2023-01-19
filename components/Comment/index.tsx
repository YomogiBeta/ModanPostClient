import { Avatar, Box, Group, Paper, Text } from "@mantine/core"
import { CommentType } from "types/api"

type CommentProps = {
  comment: CommentType
}

const Comment = ({ comment }: CommentProps) => {

  return (
    <Box>
      <Group>
        <Avatar
          radius="xl"
          variant="outline"
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${comment.profile_image}`}
          alt="it's me"
          color="cyan" />
        <Text size={"sm"}>{comment.owner_name}</Text>
      </Group>
      <Paper mt={4} shadow="sm" radius="lg" p="md" withBorder>
        <Text>{comment.content}</Text>
      </Paper>
    </Box>
  )
}
export default Comment