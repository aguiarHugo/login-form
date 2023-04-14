import { VStack, Heading, Center } from 'native-base'
import { Image, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/button';

export default function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  function handleSignUp(data){
    console.log(data);
  }

  return (
    <VStack bgColor="coolGray.700" flex={1} px={10}>
      <Center mt={24}>
        <Image
          source={require('../../assets/favicon.png')}
          alt='logo'
        />
        <Heading mb={12}>
          <Text>Crie sua conta</Text>
        </Heading>

        <Controller
          control={control}
          name='name'
          rules={{
            required: 'Informe o nome.',
            minLength: {
              value: 3,
              message: 'Nome deve ter mais de 3 caracteres'
            },
          }}
          render={({field: { onChange } }) => (
            <Input 
              placeholder="Nome" 
              onChangeText={onChange} 
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='email'
          rules={{
            required: 'Informe seu e-mail',
          }}
          render={({field: { onChange } }) => (
            <Input 
              placeholder="E-mail" 
              onChangeText={onChange} 
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          render={({field: { onChange } }) => (
            <Input 
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange} 
            />
          )}
        />

        <Controller
          control={control}
          name='password_confirm'
          render={({field: { onChange } }) => (
            <Input 
              placeholder="Confirme a senha"
              secureTextEntry
              onChangeText={onChange} 
            />
          )}
        />

        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleSignUp)}
        />
      </Center>
    </VStack>
  );
}
