import { Container, Stack } from "@mantine/core"
import PostCard from "./PostCard"
import usePosts from '../../api/usePosts';


const PostsView = () => {
  const { data } = usePosts()
  return (
    <>
      <Container size="md" px="xs" mt={32}>
        <Stack  spacing="xl">
          {data?.map(post =>
          (
            <PostCard
              key={post.id}
              postData={post}
            />
          ))}
        </Stack>
      </Container>
    </>
  )

}

export default PostsView