import { ActionIcon, Avatar, Box, Card, Group, Text } from "@mantine/core"
import { IconMoodSmile } from '@tabler/icons';
import { DateTime } from "luxon";
import { Post } from "types";
import PostMenu from './PostMenu';
import { useRouter } from "next/router";
import { useCallback } from 'react';
import { IconLink } from '@tabler/icons';
import ClickOverlayViewImage from "components/ClickOverlayViewImage";

import reactStringReplace from "react-string-replace"
import Link from "next/link";
import useAccount  from 'hooks/AccountInfomation/useAccount';


type PostCardPropsType = {
  postData: Post,
  onlyView?: boolean,
}

const PostCard = ({ postData, onlyView }: PostCardPropsType) => {
  const { userData } = useAccount()
  const router = useRouter()

  const linkRegExp = /(https?:\/\/\S+)/g


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
            userData?.id === postData.owner_id ?
              <PostMenu post={postData} /> : ""
          }
        </Group>

        <Box p={16}>
          <Text sx={{ whiteSpace: "pre-wrap" }}>
            {reactStringReplace(
              postData.content,
              linkRegExp,
              (match, index) => (
                <Link key={index} href={match} target="_blank" rel="noopener noreferrer">
                  {match}
                </Link>
              )
            )}
          </Text>
          <Box sx={{ display: "flex", gap: "16px", overflowX: "scroll", width: "100%", marginTop: "16px" }}>
            {
              postData.images.map((image) => (
                <Box key={image.id} sx={{ width: "40%", '@media (max-width: 600px)': { width: "70%" }, flexShrink: 0 }}>
                  <ClickOverlayViewImage src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${image.path}`} alt={""} />
                </Box>
              ))
            }
          </Box>
        </Box>

        <Card.Section sx={{ textAlign: "right" }} pr={8}>
          <Text color={"gray.5"}>
            {DateTime.fromISO(postData.created_at).toFormat("yyyy-MM/dd HH:mm:ss")}</Text>
        </Card.Section>
      </Card>

    </>
  )
}

export default PostCard
