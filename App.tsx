import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNav from './src/navigation/AppNav';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <AppNav />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
