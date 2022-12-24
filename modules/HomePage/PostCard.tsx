import { ActionIcon, Badge, Card, Group, Stack, Text } from "@mantine/core"
import { IconMoodSmile, IconDots } from '@tabler/icons';
import useMe from "api/useMe";
import { DateTime } from "luxon";
import { Post } from "types";
import PostMenu from './PostMenu';

type PostCardPropsType = {
  postData: Post
}

const PostCard = ({ postData }: PostCardPropsType) => {
  const { data: myData } = useMe()
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{postData.title}</Text>
          {
            myData?.id === postData.user_id ?
              <PostMenu /> : ""
          }
        </Group>

        <Stack p={16}>
          <Text>{postData.content}</Text>
        </Stack>

        <Group sx={{ width: "fit-content", borderRadius: "8px" }} mt="md" mb="xs" p={4} spacing="xs">
          <ActionIcon >
            <IconMoodSmile />
          </ActionIcon>
          <ActionIcon >
            <IconMoodSmile />
          </ActionIcon>
        </Group>

        <Card.Section sx={{ textAlign: "right" }} pr={8}>
          <Text color={"gray.5"}>
            {DateTime.fromISO(postData.created_at).toFormat("yyyy-MM/dd HH:mm:ss")}</Text>
        </Card.Section>
      </Card>
    </>
  )
}

export default PostCard
