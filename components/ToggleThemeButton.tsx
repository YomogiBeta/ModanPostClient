import { ActionIcon, Text, useMantineColorScheme } from "@mantine/core"
import { IconSun, IconMoonStars } from "@tabler/icons"


const ToggleThemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Text size={"sm"} sx={{ '@media (max-width: 600px)': { display: "none" } }}>テーマ切り替え</Text>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </>
  )
}

export default ToggleThemeButton