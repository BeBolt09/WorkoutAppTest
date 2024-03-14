// import InitialDemo from './Components/InintialDemo'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './Components/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';

import NewSecondScreen from './screens/NewSecondScreen';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10, height: 50, },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 30 },
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={NewSecondScreen}
          options={({ navigation }) => ({
            headerTitle: 'Select Equipment',
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 },
          })}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={({ navigation }) => ({
            headerTitle: 'Results',
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10,},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 },
          })}
        />
        <Stack.Screen
          name="FourthScreen"
          component={FourthScreen}
          options={({ navigation }) => ({
            headerTitle: 'Substitute',
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 },
            headerRight: () => (
              <Feather
                name="search"
                size={25}
                color="white"
                style={{ marginRight: 15 }}
                onPress={() => {
                  navigation.navigate('SearchScreen');
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}