import { Button, Container, Stack } from "@mantine/core"
import PostCard from "../../components/PostCard"
import usePosts from '../../api/usePosts';
import PostCreateButton from "components/PostCreateButton";

const PostsView = () => {
  const { data, next, isValidating, isLast } = usePosts({ revalidateAll: true })
  return (
    <>
      <Container size="md" px="xs" mt={32}>
        <Stack spacing="xl">
          {data?.map(posts => {
            return posts?.map(post => (
              <PostCard
                key={post.id}
                postData={post}
              />
            ))
          })}

          {
            !isLast ?
              <Button loading={isValidating} variant="light" onClick={next}>さらに読み込む</Button>
              :
              ""
          }
        </Stack>
      </Container>
      <PostCreateButton />
    </>
  )

}

export default PostsView