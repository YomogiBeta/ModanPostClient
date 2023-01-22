import { ActionIcon, Avatar, Card, Group, Stack, Text } from "@mantine/core"
import { IconMoodSmile } from '@tabler/icons';
import useMe from "api/useMe";
import { DateTime } from "luxon";
import { Post } from "types";
import PostMenu from '../../modules/HomePage/PostMenu';
import { useRouter } from "next/router";
import { useCallback } from 'react';
import { IconLink } from '@tabler/icons';


type PostCardPropsType = {
  postData: Post,
  onlyView?: boolean,
}

const PostCard = ({ postData, onlyView }: PostCardPropsType) => {
  const { data: myData } = useMe()
  const router = useRouter()


  const movePostPage = useCallback(() => {
    if (!onlyView) {
      router.push(`post/${postData.id}`)
    }
  }, [router, onlyView, postData.id])


  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder >
        <Group >
          <Avatar
            radius="xl"
            variant="outline"
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${postData.profile_image}`}
            alt="it's me"
            color="cyan" />
          <Text>{postData.owner_name}</Text>
          <Text
            onClick={movePostPage}
            sx={{ "&:hover": { backgroundColor: "#e7f5ff", cursor: !onlyView ? "pointer" : "auto" }, }}
            weight={500}
            size="xl"

            p={4}
          >
            {
              !onlyView ? <IconLink size={16} /> : ""
            }

            {postData.title}
          </Text>
          {
            myData?.id === postData.owner_id ?
              <PostMenu post={postData} /> : ""
          }
        </Group>

        <Stack p={16}>
          <Text sx={{ whiteSpace: "pre-wrap" }}>{postData.content}</Text>
        </Stack>

        <Group sx={{ width: "fit-content", borderRadius: "8px" }} mt="md" mb="xs" p={4} spacing="xs">
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
