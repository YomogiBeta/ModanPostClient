import { Button, Container, Divider, Stack } from "@mantine/core"
import useComments from "api/useComments"
import usePost from "api/usePost"
import BackIconButton from "components/BackIconButton"
import Comment from "components/Comment"
import ModanPostBaseAppShell from "components/ModanPostBaseAppShell"
import PostCard from "components/PostCard"
import useAccount from "hooks/AccountInfomation/useAccount"
import CommentInputField from "./CommentInputField"


type PostViewProps = {
  id: string | undefined
}
const PostView = ({ id }: PostViewProps) => {
  const { data: post } = usePost(id)
  const { isLoggined } = useAccount()
  const { data: commentsData, next, isValidating, isLast } = useComments(id)

  return (
    <>
      <ModanPostBaseAppShell>
      <BackIconButton href="/" />
        <Container size="xl" px="xs" mt={32}>
          {post !== undefined ?
            <PostCard postData={post} onlyView={true} /> : ""
          }

          <Divider my="xs" label="Comment" labelPosition="center" p={16} />
          <Stack align="flex-start" spacing="lg" sx={{ marginBottom: "200px" }} >
            {
              commentsData?.map(comments => {
                return comments.map(comment => (
                  <Comment comment={comment} key={comment.id} />
                ))
              })
            }
            {
              !isLast ?
                <Button loading={isValidating} variant="light" onClick={next}>さらに読み込む</Button>
                :
                ""
            }
          </Stack>
        </Container>
      </ModanPostBaseAppShell>
      {
        isLoggined ?
          <CommentInputField
            post_id={post?.id}
            sx={{
              position: "fixed", bottom: "32px", left: "50%",
              transform: "translate(-50%, 0%)", width: "96%"
            }} /> : ""
      }
    </>

  )

}

export default PostView