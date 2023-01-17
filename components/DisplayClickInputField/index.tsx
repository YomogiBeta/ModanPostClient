import { Box, Text, TextInputProps, TextProps } from "@mantine/core"
import { useClickOutside } from "@mantine/hooks";
import { ReactNode, useCallback, useState } from "react"
import RHFTextField from 'components/Inputs/RHFTextField';
import { Control } from "react-hook-form";

type DisplayClickInputFieldProps = {
  control: Control<any, any>,
  name: string,
  display: ReactNode,
  inputProps?: TextInputProps,
}

const DisplayClickInputField = ({ control, name, display, ...inputProps }: DisplayClickInputFieldProps) => {

  const [toggle, setToggle] = useState<boolean>(false)
  const outSideClickRef = useClickOutside(() => {
    if (!control._formState.dirtyFields[name]) setToggle(false)
  });

  const showInputField = useCallback(() => {
    setToggle(true)
  }, [setToggle])

  return (
    <>
      {!toggle ?
        <Box
          onClick={showInputField}
          sx={{ "&:hover": { border: "1px solid gray" }, borderRadius: "8px", cursor: "pointer" }}
          p={4}>
          {display}
        </Box> :
        <Box ref={outSideClickRef} sx={{ width: "100%" }}>
          <RHFTextField control={control} name={name} {...inputProps} />
        </Box>}
    </>
  )
}

export default DisplayClickInputField