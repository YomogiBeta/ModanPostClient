import { Modal, ModalProps } from "@mantine/core"
import PostInputField from "components/PostInputField"
import { Post } from "types"

type UpdatePostModalProps = {
  post: Post
} & ModalProps

const UpdatePostModal = (props: UpdatePostModalProps) => {
  const { post, onClose, ...modalProps } = props
  return (
    <Modal
      {...modalProps}
      onClose={onClose}
    >
      <PostInputField onCloseParent={onClose} oldPostData={post} />
    </Modal>
  )
}

export default UpdatePostModal