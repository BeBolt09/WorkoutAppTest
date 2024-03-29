import React, { useState } from "react";
import { View, TextInput, Platform, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles, SearchScreenStyles } from "../Styles";

const SearchScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const isWeb = Platform.OS === "web";

  const handleButtonPress = () => {
    navigation.navigate("SecondScreen", { inputValue });
  };

  return (
    <View style={GlobalStyles.rootContainer}>
      <View style={isWeb ? GlobalStyles.webContainer : GlobalStyles.mobileContainer}>
        <LinearGradient colors={GlobalStyles.gradient.colors} style={GlobalStyles.gradient}>
          <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
          <View style={SearchScreenStyles.body}>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SearchScreen;
