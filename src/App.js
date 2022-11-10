import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AddProduct from './pages/AddProduct';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Product from './pages/Product';
import Splash from './pages/Splash';
import CounterScreen from './pages/CounterScreen';

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
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      />
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
