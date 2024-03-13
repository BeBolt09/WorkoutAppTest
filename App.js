// import InitialDemo from './Components/InintialDemo'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './Components/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';

import NewSecondScreen from './screens/NewSecondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fit Chain" component={FirstScreen}           
        options={{
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 30 },
          }}/>
        <Stack.Screen name="Select Equipment" component={NewSecondScreen}
        options={{
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 }, 
          }}
         />
        <Stack.Screen name="Results" component={ThirdScreen}
        options={{
          headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 }, 
          }}
         />
        <Stack.Screen name="Substitute" component={FourthScreen} 
        options={{
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 }, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
