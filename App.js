import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from './Screens/Home';
import {Detailscreen} from './Screens/Details';

const Stack = createStackNavigator();

export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detailscreen" component={Detailscreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
}