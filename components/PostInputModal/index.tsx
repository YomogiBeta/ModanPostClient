import { Modal, ModalProps } from "@mantine/core"
import PostInputField from "components/PostInputField"
import { Post } from "types"

type PostInputModalProps = {
  post?: Post
} & ModalProps

const PostInputModal = (props: PostInputModalProps) => {
  const { post, onClose, ...modalProps } = props
  return (
    <Modal
      {...modalProps}
      size="xl"
      onClose={onClose}
    >
      <PostInputField onCloseParent={onClose} oldPostData={post} />
    </Modal>
  )
}

export default PostInputModal