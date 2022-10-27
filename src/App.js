import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';
import AddProduct from './pages/AddProduct';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Splash from './pages/Splash';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
}

const App = () => {
  const queryCache = new QueryCache();
  const queryClient = new QueryClient({
    queryCache,
    defaultOptions: {
      queries: {
        retry: 2,
      },
    },
  });

  if (__DEV__) {
    import('react-query-native-devtools').then(({addPlugin}) => {
      addPlugin({queryClient});
    });
  }
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MyStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
