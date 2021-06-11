import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { MyProvider } from './src/context/';
import App from './src/components/App';
import Toast from 'react-native-toast-message';

const provider = () => (
  <MyProvider>
    <Toast ref={(ref) => Toast.setRef(ref)} />
    <App />
  </MyProvider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
