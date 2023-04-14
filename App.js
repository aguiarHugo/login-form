import { NativeBaseProvider } from 'native-base'

import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';


export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}
