import { Container, Divider, Stack, Text } from "@mantine/core"
import usePost from "api/usePost"
import Comment from "components/Comment"
import ModanPostBaseAppShell from "components/ModanPostBaseAppShell"
import PostCard from "components/PostCard"


type PostViewProps = {
  id: string | undefined
}
const PostView = ({ id }: PostViewProps) => {
  const { data: post } = usePost(id)

  return (
    <>
      <ModanPostBaseAppShell>
        <Container size="xl" px="xs" mt={32}>
          {post !== undefined ?
            <PostCard postData={post} onlyView={true} /> : ""
          }

          <Divider my="xs" label="Comment" labelPosition="center" p={16} />
          <Stack align="flex-start" spacing="lg" >
            {
              post?.comments?.map(comment => (
                <Comment comment={comment} key={comment.id} />
              ))
            }
          </Stack>
        </Container>
      </ModanPostBaseAppShell>
    </>

  )

}

export default PostView