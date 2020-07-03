import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import MainStack from './src/navigation';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar translucent={true} backgroundColor="#4B419A" />
            <MainStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;