import PostView from "modules/Post/PostView"
import { useRouter } from "next/router"
import ErrorPage from 'next/error'


const PostPage = () => {
  const router = useRouter()
  const { post_id } = router.query

  return (
    <>
      {
        !Array.isArray(post_id) ?
          <PostView id={post_id} /> : <ErrorPage statusCode={404} />
      }

    </>
  )

}

export default PostPage