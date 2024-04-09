//App.js

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./Components/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import {
  Platform,
  View,
  StyleSheet,
} from "react-native";
import NewSecondScreen from "./screens/NewSecondScreen";
import { Feather } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FirstScreen"
              component={FirstScreen}
              options={({ navigation }) => ({
                headerTitle: "",
                headerStyle: {
                  backgroundColor: "#313b3f",
                  borderBottomWidth: 0,
                  elevation: Platform.OS === "android" ? 10 : 0,
                  shadowColor:
                    Platform.OS === "ios" ? "#000" : "rgba(0, 0, 0, 0.3)",
                  shadowOffset:
                    Platform.OS === "ios" ? { width: 0, height: 2 } : undefined,
                  shadowOpacity: Platform.OS === "ios" ? 0.25 : undefined,
                  shadowRadius: Platform.OS === "ios" ? 3.84 : undefined,
                  height:
                    Platform.OS === "web"
                      ? 0
                      : Platform.OS === "android"
                      ? 12
                      : 50,
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 30 },
              })}
            />
            <Stack.Screen
              name="SecondScreen"
              component={NewSecondScreen}
              options={({ navigation }) => ({
                headerTitle: "Select Equipment",
                headerStyle: {
                  backgroundColor: "#313b3f",
                  borderBottomWidth: 0,
                  elevation: Platform.OS === "android" ? 10 : 0,
                  shadowColor:
                    Platform.OS === "ios" ? "#000" : "rgba(0, 0, 0, 0.3)",
                  shadowOffset:
                    Platform.OS === "ios" ? { width: 0, height: 2 } : undefined,
                  shadowOpacity: Platform.OS === "ios" ? 0.25 : undefined,
                  shadowRadius: Platform.OS === "ios" ? 3.84 : undefined,
                  height:
                    Platform.OS === "web"
                      ? 60
                      : Platform.OS === "android"
                      ? 60
                      : 110,

                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 25 },
                headerBackTitleStyle: { fontSize: 0.01 },
                headerLeftContainerStyle: {
                  paddingLeft: Platform.OS === "web" ? "5%" : "5%",
                  paddingBottom: Platform.OS === "web" ? "1%" : "2%",
                },
                headerRightContainerStyle: {
                  paddingRight: Platform.OS === "web" ? "5%" : "5%",
                },
                headerTitleContainerStyle: {
                  paddingBottom: Platform.OS === "web" ? "1%" : "2%",
                },
              })}
            />
            <Stack.Screen
              name="ThirdScreen"
              component={ThirdScreen}
              options={({ navigation }) => ({
                headerTitle: "Results",
                headerStyle: {
                  backgroundColor: "#313b3f",
                  borderBottomWidth: 0,
                  elevation: Platform.OS === "android" ? 10 : 0,
                  shadowColor:
                    Platform.OS === "ios" ? "#000" : "rgba(0, 0, 0, 0.3)",
                  shadowOffset:
                    Platform.OS === "ios" ? { width: 0, height: 2 } : undefined,
                  shadowOpacity: Platform.OS === "ios" ? 0.25 : undefined,
                  shadowRadius: Platform.OS === "ios" ? 3.84 : undefined,
                  height:
                    Platform.OS === "web"
                      ? 60
                      : Platform.OS === "android"
                      ? 60
                      : 110,

                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 25 },
                headerBackTitleStyle: { fontSize: 0.01 },
                headerLeftContainerStyle: {
                  paddingLeft: Platform.OS === "web" ? "5%" : "5%",
                  paddingBottom: Platform.OS === "web" ? "1%" : "2%",
                },
                headerRightContainerStyle: {
                  paddingRight: Platform.OS === "web" ? "5%" : "5%",
                },
                headerTitleContainerStyle: {
                  paddingBottom: Platform.OS === "web" ? "1%" : "2%",
                },
              })}
            />
            <Stack.Screen
              name="FourthScreen"
              component={FourthScreen}
              options={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: "#313b3f",
                  borderBottomWidth: 0,
                  elevation: Platform.OS === "android" ? 10 : 0,
                  shadowColor:
                    Platform.OS === "ios" ? "#000" : "rgba(0, 0, 0, 0.3)",
                  shadowOffset:
                    Platform.OS === "ios" ? { width: 0, height: 2 } : undefined,
                  shadowOpacity: Platform.OS === "ios" ? 0.25 : undefined,
                  shadowRadius: Platform.OS === "ios" ? 3.84 : undefined,
                  height:
                    Platform.OS === "web"
                      ? 60
                      : Platform.OS === "android"
                      ? 60
                      : 110,

                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 25 },
                headerBackTitleStyle: { fontSize: 0.01 },
                headerLeftContainerStyle: {
                  paddingLeft: Platform.OS === "web" ? "5%" : "5%",
                  paddingBottom: Platform.OS === "web" ? "1%" : "2%",
                },
                headerRightContainerStyle: {
                  paddingRight: Platform.OS === "web" ? "5%" : "5%",
                  paddingTop: Platform.OS === "web" ? "2%" : "0%",
                },
                headerTitleContainerStyle: {
                  paddingBottom: Platform.OS === "web" ? "1%" : "2%",
                },
                headerRight: () => (
                  <Feather
                    name="search"
                    size={27}
                    right={8}
                    color="white"
                    style={{ right: "9%", bottom: 4 }}
                    onPress={() => {
                      navigation.navigate("SearchScreen");
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={({ navigation }) => ({
                headerTitle: "",
                headerStyle: {
                  backgroundColor: "#313b3f",
                  borderBottomWidth: 0,
                  elevation: Platform.OS === "android" ? 10 : 0,
                  shadowColor:
                    Platform.OS === "ios" ? "#000" : "rgba(0, 0, 0, 0.3)",
                  shadowOffset:
                    Platform.OS === "ios" ? { width: 0, height: 2 } : undefined,
                  shadowOpacity: Platform.OS === "ios" ? 0.25 : undefined,
                  shadowRadius: Platform.OS === "ios" ? 3.84 : undefined,
                  height:
                    Platform.OS === "web"
                      ? 0
                      : Platform.OS === "android"
                      ? 12
                      : 50,
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 30 },
                headerLeft: null,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}
//WEB HEADER STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191F21",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: "#000",
    maxWidth: 400,
    width: Platform.OS === "web" ? 400 : "100%",
    alignSelf: "center",
    height: "100%",
    alignContent: "flex-end",

  },
});