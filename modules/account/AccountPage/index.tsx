import { Avatar, Box, Button, Chip, Container, Flex, Notification, Text } from "@mantine/core";
import { IconPencil } from "@tabler/icons";
import ModanPostBaseAppShell from "components/ModanPostBaseAppShell";
import { useForm } from "react-hook-form";
import DisplayClickInputField from '../../../components/DisplayClickInputField/index';
import resolver from "./resolver";

import { hideNotification, showNotification } from '@mantine/notifications';
import { useCallback, useEffect } from "react";
import { useRouter } from 'next/router';
import useMeActions from '../../../api/useMeActions';
import { User } from "types";


type AccountEditType = {
  name?: string,
  email?: string,
}

type AccountPageProps = {
  userData: User
}

const AccountPage = ({ userData }: AccountPageProps) => {
  const { update } = useMeActions()

  const { control, handleSubmit, formState: { isDirty, dirtyFields } } = useForm<AccountEditType>({
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

  const updateUserInfomation = handleSubmit((data) => {
    const body: AccountEditType = {}
    body.name = data.name
    if(dirtyFields["email"]) body.email = data.email
    update(body).then(() => {
      router.reload()
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
        <Container size="sm" px="sm" mt={24}>
          <Flex gap="md" align="center">
            <Avatar radius="lg" size="lg" alt="it's me" color="cyan" >IC</Avatar>
            <DisplayClickInputField
              control={control}
              name="name"
              display={
                <Text sx={{ fontSize: "24px" }} fw={700}>{userData.name} <IconPencil size="20" color="#238be6" /></Text>
              }
            />
          </Flex>

          <Box pt={16}>
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
      </ModanPostBaseAppShell>
    </>
  )

}

export default AccountPage;