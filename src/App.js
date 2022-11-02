import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';
import AddProduct from './pages/AddProduct';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Product from './pages/Product';
import Splash from './pages/Splash';
import CrudReactQuery from './pages/CrudReactQuery';
import CrudReduxQuery from './pages/CrudReduxQuery';

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
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CrudReactQuery" component={CrudReactQuery} />
      <Stack.Screen name="CrudReduxQuery" component={CrudReduxQuery} />
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
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      />
      <QueryClientProvider client={queryClient}>
        <MyStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
