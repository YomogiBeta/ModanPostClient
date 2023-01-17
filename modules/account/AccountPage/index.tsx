import { Avatar, Box, Button, Chip, Container, Divider, FileButton, Flex, Text } from "@mantine/core";
import { IconPencil } from "@tabler/icons";
import ModanPostBaseAppShell from "components/ModanPostBaseAppShell";
import { useForm } from "react-hook-form";
import DisplayClickInputField from '../../../components/DisplayClickInputField/index';
import resolver from "./resolver";

import { hideNotification, showNotification } from '@mantine/notifications';
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import useMeActions from '../../../api/useMeActions';
import { User } from "types";

import ProfileTrimUploadModal from "./ProfileTrimUploadModal";

type AccountEditType = {
  name?: string,
  email?: string,
}

type AccountPageProps = {
  userData: User
}

const AccountPage = ({ userData }: AccountPageProps) => {
  const { update } = useMeActions()
  const [profile, setProfileImage] = useState<File | null>(null)


  const { control, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm<AccountEditType>({
    defaultValues: {
      name: userData.name,
      email: userData.email,
    },
    resolver: resolver
  })

  const router = useRouter()

  const reload = useCallback(() => {
    router.reload()
  }, [])

  const openTrimingImageDialog = useCallback((payload: File) => {
    setProfileImage(payload)
  }, [setProfileImage])

  const closeProfileTrimUploadModal = useCallback(() => {
    setProfileImage(null)
  }, [setProfileImage])

  const updateUserInfomation = handleSubmit((data) => {
    const body: AccountEditType = {}
    body.name = data.name
    if (dirtyFields["email"]) body.email = data.email
    update(body).then(() => {
      reset({
        name: data.name,
        email: data.email,
      })
    })
  })

  useEffect(() => {
    if (isDirty) {
      showNotification({
        id: 'update-user-info',
        disallowClose: true,
        autoClose: false,
        title: "変更されて、保存されていない情報があります",
        message:
          <Flex gap={16} mt={10} align="flex-end" justify={"flex-end"}>
            <Button onClick={reload} variant="outline" color="red" size="xs">廃棄</Button>
            <Button onClick={updateUserInfomation} color="teal">保存</Button>
          </Flex>,
        color: 'violet',
        loading: false
      });
    } else {
      hideNotification('update-user-info')
    }
  }, [isDirty])



  return (
    <>
      <ModanPostBaseAppShell>
        <Container size="sm" px="sm" mt={24} >
          <Text size="lg" fw={700} >Profile Page</Text>
          <Divider mb={8} />
          <Flex gap="md" align="center">

            <FileButton onChange={openTrimingImageDialog} accept="image/png,image/jpeg">
              {(props) =>
                <Box
                  sx={{ cursor: 'pointer', "&:hover": { border: "1px solid gray" }, padding: "8px", borderRadius: "16px" }}
                  {...props}>
                  <Box sx={{ textAlign: "right" }}>
                    <IconPencil size="20" color="#238be6" />
                  </Box>

                  <Avatar
                    radius="xl"
                    size="xl"
                    variant="outline"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${userData.profile_image}`}
                    alt="it's me"
                    color="cyan"  />
                </Box>}
            </FileButton>

            <DisplayClickInputField
              control={control}
              name="name"
              display={
                <Text sx={{ fontSize: "24px" }} fw={700}>{userData.name} <IconPencil size="20" color="#238be6" /></Text>
              }
            />
          </Flex>

          <Box mt={24}>
            <Flex gap="md" align="center">
              <Chip checked={true} variant="filled">メール</Chip>
              <DisplayClickInputField
                control={control}
                name="email"
                display={
                  <Text>
                    {userData.email} <IconPencil size="20" color="#238be6" />
                  </Text>}
              />
            </Flex>
          </Box>
        </Container>
        <ProfileTrimUploadModal
        title="プロフィール画像アップロード"
          imageFile={profile}
          opened={Boolean(profile)}
          onClose={closeProfileTrimUploadModal} />
      </ModanPostBaseAppShell>
    </>
  )

}

export default AccountPage;