import { VStack, Heading, Center, Link } from 'native-base'
import { Image, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/button';

export default function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (data) => {
    try {
      setIsLoading(true); 
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setIsLoading(false); 
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
      setIsLoading(false); 
    }
  }

  return (
    <VStack bgColor="coolGray.700" flex={1} px={10}>
      <Center mt={24}>
        <Image
          source={require('../../assets/favicon.png')}
          alt='logo'
        />
        <Heading mb={12}>
          <Text>Login</Text>
        </Heading>

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
        <Button
          title={isLoading ? 'Entrando...' : 'Entrar'} 
          onPress={handleSubmit(handleSignIn)}
          isLoading={isLoading}
        />

        <Link href='#' mt={16}>
          Não tem uma conta? Clique aqui!
        </Link>
        <Link href='#' mt={16}>
          Esqueci minha senha
        </Link>
      </Center>
      
    </VStack>
  );
}
