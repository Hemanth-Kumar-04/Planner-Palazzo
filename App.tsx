import 'react-native-gesture-handler';
import React from 'react';
import Onboarding from './src/screens/auth/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const App = () => {
  return(
    <NavigationContainer>

      <Onboarding />
    </NavigationContainer>
  )
};

export default App;