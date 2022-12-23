import { TextInput, TextInputProps } from '@mantine/core';
import { Controller, Control } from "react-hook-form";

import { memo } from "react";

type RHFTextFieldProps = {
  control: Control<any, any>,
  name: string,
} & TextInputProps

export default memo(function RHFTextField(props: RHFTextFieldProps) {
  const { control, name, ...textInputProps } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextInput
          {...field}
          {...textInputProps}
          error={fieldState.error?.message}
        />
      )}
    />
  )
})