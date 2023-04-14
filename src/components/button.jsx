import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

export default function Button({IButtonProps, title, ...rest }){
  return(
    <NativeBaseButton 
      w='full'
      h={16}
      bg="green.500"
      _pressed={{
        bgColor: 'green.300'
      }}
    >
      <Text color='white' fontSize='md'>
        {title}
      </Text>
    </NativeBaseButton>
  )
}