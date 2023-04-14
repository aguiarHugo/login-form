import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

export default function Input({IInputProps, errorMessage = null, isInvalid, ...rest}){
  const invalid = !!errorMessage || isInvalid;

  return(
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        bg="gray.700"
        fontSize="md"
        h={16}
        isInvalid={invalid}
        _focus={{
          bgColor: "gray.200",
          borderWidth: 2,
          borderColor: "green.500"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}