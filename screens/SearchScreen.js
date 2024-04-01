//SearchScreen.js

import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FirstScreenStyles, GlobalStyles, SearchScreenStyles } from "../Styles";
import { Feather } from "@expo/vector-icons";

const SearchScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isWeb = Platform.OS === "web";

  const handleButtonPress = () => {
    navigation.navigate("SecondScreen", { inputValue });
  };

  return (
    <View style={GlobalStyles.rootContainer}>
      <View
        style={
          isWeb ? FirstScreenStyles.webContainer : GlobalStyles.mobileContainer
        }
      >
        <LinearGradient
          colors={GlobalStyles.gradient.colors}
          style={GlobalStyles.gradient}
        >
          <StatusBar backgroundColor="#313b3f" barStyle="light-content" />

          <View style={SearchScreenStyles.body}>
            <View style={SearchScreenStyles.inputContainer}>
              <TouchableOpacity
                onPress={handleButtonPress}
                style={SearchScreenStyles.searchButton}
              >
                <Feather name="search" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputValue("")}
                style={SearchScreenStyles.XButton}
              >
                <Feather name="x" size={28} color="white" />
              </TouchableOpacity>
              <TextInput
                placeholder="Swap exercise"
                placeholderTextColor="gray"
                style={SearchScreenStyles.input}
                onChangeText={setInputValue}
                value={inputValue}
              />
              <TouchableOpacity
                style={SearchScreenStyles.cancelButton}
                onPress={() =>
                  navigation.navigate("FourthScreen", {
                    selectedExercise: inputValue,
                  })
                }
              >
                <Text style={SearchScreenStyles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SearchScreen;
