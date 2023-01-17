import { ActionIcon, Card, Group, Stack, Sx, Text } from "@mantine/core"
import { IconMessage, IconMoodSmile } from '@tabler/icons';
import useMe from "api/useMe";
import { DateTime } from "luxon";
import { Post } from "types";
import PostMenu from '../../modules/HomePage/PostMenu';
import { useHover } from '@mantine/hooks';
import { useRouter } from "next/router";
import { useCallback } from 'react';
import { IconLink } from '@tabler/icons';


type PostCardPropsType = {
  postData: Post,
  onlyView?: boolean
}

const PostCard = ({ postData, onlyView }: PostCardPropsType) => {
  const { data: myData } = useMe()
  const { hovered, ref } = useHover();
  const router = useRouter()

  const movePostPage = useCallback(() => {
    if (!onlyView) {
      router.push(`post/${postData.id}`)
    }
  }, [router])

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder >
        <Group position="apart" mt="md" mb="xs">
          <Text
            ref={ref}
            onClick={movePostPage}
            sx={{ backgroundColor: hovered && !onlyView ? "#e7f5ff" : "none", cursor: hovered && !onlyView ? "pointer" : "auto"}}
            weight={500}
            size="xl"
            color={"gray.7"}
            p={4}
          >
            {
              !onlyView ? <IconLink size={16}/> : ""
            }
            
            {postData.title}
          </Text>
          {
            myData?.id === postData.user_id ?
              <PostMenu post={postData} /> : ""
          }
        </Group>

        <Stack p={16}>
          <Text>{postData.content}</Text>
        </Stack>

        <Group sx={{ width: "fit-content", borderRadius: "8px" }} mt="md" mb="xs" p={4} spacing="xs">
          <ActionIcon >
            <IconMessage />
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
