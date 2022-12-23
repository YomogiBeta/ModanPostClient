import { AppShell, Navbar, Header } from "@mantine/core"
import { FunctionComponent, memo, ReactNode } from "react"
import HeaderContent from "./HeaderContent"

const ModanPostBaseAppShell: FunctionComponent<{ children: ReactNode }> = ({ children }) => {

  return (
    <AppShell
      padding="md"
      // navbar={<Navbar width={{ base: 200 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header fixed height={70} p="xs">{<HeaderContent />}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  )

}

export default memo(ModanPostBaseAppShell)