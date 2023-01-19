import { Container, Divider, Stack } from "@mantine/core"
import usePost from "api/usePost"
import Comment from "components/Comment"
import ModanPostBaseAppShell from "components/ModanPostBaseAppShell"
import PostCard from "components/PostCard"
import CommentInputField from "./CommentInputField"


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
          <Stack align="flex-start" spacing="lg" sx={{marginBottom: "200px"}} >
            {
              post?.comments?.map(comment => (
                <Comment comment={comment} key={comment.id} />
              ))
            }
          </Stack>
        </Container>
      </ModanPostBaseAppShell>
      <CommentInputField 
      post_id={post?.id}
      sx={{
        position: "fixed", bottom: "32px", left: "50%",
        transform: "translate(-50%, 0%)", width: "96%"
      }} />
    </>

  )

}

export default PostView