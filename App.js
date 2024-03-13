// import InitialDemo from './Components/InintialDemo'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Fit Chain"
          component={FirstScreen}
          options={{
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 30 },
          }}
        />
        <Stack.Screen
          name="Select Equipment"
          component={SecondScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 },
            headerLeft: () => (
              <Feather
                name="chevron-left"
                size={25}
                color="white"
                style={{ marginLeft: 15 }}
                onPress={() => {
                  navigation.navigate('Fit Chain');
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Results"
          component={ThirdScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 },
            headerLeft: () => (
              <Feather
                name="chevron-left"
                size={25}
                color="white"
                style={{ marginLeft: 15 }}
                onPress={() => {
                  navigation.navigate('Select Equipment');
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Substitute"
          component={FourthScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#293236', borderBottomWidth: 0, elevation: 10 },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            headerBackTitleStyle: { fontSize: 0.01 },
            headerLeft: () => (
              <Feather
                name="chevron-left"
                size={25}
                color="white"
                style={{ marginLeft: 15 }}
                onPress={() => {
                  navigation.navigate('Results');
                }}
              />
            ),
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
