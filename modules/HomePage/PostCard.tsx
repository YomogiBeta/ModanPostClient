import { ActionIcon, Badge, Card, Group, Stack, Text } from "@mantine/core"
import { IconMoodSmile } from '@tabler/icons';
import { DateTime } from "luxon";
import { Post } from "types";

type PostCardPropsType = {
  postData: Post
}

const PostCard = ({ postData }: PostCardPropsType) => {
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{postData.title}</Text>
        </Group>

        <Stack p={16}>
          <Text>{postData.content}</Text>
        </Stack>

        <Group sx={{ backgroundColor: "#e7f5ff", width: "fit-content", borderRadius: "8px" }} mt="md" mb="xs" p={4}>
          <ActionIcon >
            <IconMoodSmile />
          </ActionIcon>
          <ActionIcon >
            <IconMoodSmile />
          </ActionIcon>
        </Group>

        <Card.Section sx={{ textAlign: "right" }} pr={8}>
          <Text color={"gray"}>{DateTime.fromISO(postData.created_at).toFormat("yyyy-MM/dd HH:mm:ss")}</Text>
        </Card.Section>
      </Card>
    </>
  )
}

export default PostCard
