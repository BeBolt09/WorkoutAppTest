import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
} from "react-native";
import validExercises from "../Components/validExercises";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles, FirstScreenStyles } from "../Styles";
import LogoSpin from "../assets/Logo_Spin.png";
import LogoStay from "../assets/Logo_Stay.png";

const FirstScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isValidExercise, setIsValidExercise] = useState(true); // State for invalid exercise
  const isWeb = Platform.OS === "web";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonPress = async () => {
    if (!inputValue.trim()) {
      // Show an error message or handle the case where the input is empty
      return;
    }

    const isValid = validExercises.includes(inputValue.trim());

    setIsValidExercise(isValid); // Update state based on validation

    if (!isValid) {
      // Don't navigate if exercise is not valid
      return;
    }

    navigation.navigate("SecondScreen", { inputValue });
  };

  const [rotation] = useState(new Animated.Value(0));

  const startRotationAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startRotationAnimation();
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-540deg"],
  });

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
          <View style={FirstScreenStyles.container}>
            <Image
              source={require("../assets/screen1bg.png")}
              style={FirstScreenStyles.image}
            />
            {isLoading && (
              <View style={FirstScreenStyles.loadingOverlay}>
                <Animated.Image
                  source={LogoSpin}
                  style={[
                    FirstScreenStyles.logospin,
                    { transform: [{ rotate: spin }] },
                  ]}
                />
                <Image
                  source={LogoStay}
                  style={FirstScreenStyles.logo}
                ></Image>
              </View>
            )}
            {!isLoading && (
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={FirstScreenStyles.contentContainer}
                keyboardVerticalOffset={Platform.OS === "ios" ? -140 : 0}
              >
                <Text style={FirstScreenStyles.h1}>Swap Exercise</Text>
                <Text style={FirstScreenStyles.h2}>
                  What exercise are you trying to replace?
                </Text>
                <Text style={FirstScreenStyles.h2}>
                  We'll help you find a substitute!
                </Text>
                <Text style={FirstScreenStyles.h3}>Exercise</Text>
                <TextInput
                  onChangeText={(text) => {
                    setInputValue(text);
                    setIsFocused(!!text);
                    setIsValidExercise(true); // Reset validation on input change
                  }}
                  value={inputValue}
                  placeholder="ex: Bulgarian Split Squat"
                  placeholderTextColor="gray"
                  style={[
                    FirstScreenStyles.input,
                    isFocused && FirstScreenStyles.inputFocused,
                  ]}
                  keyboardShouldPersistTaps="always"
                />
                {!isValidExercise && inputValue.trim() !== "" && (
                  <Text style={FirstScreenStyles.errorText}>
                    • Please enter a valid exercise
                  </Text>
                )}
              </KeyboardAvoidingView>
            )}
          </View>
          {!isLoading && (
            <TouchableOpacity
              style={[
                FirstScreenStyles.button,
                !inputValue.trim() && FirstScreenStyles.buttonDisabled,
                Platform.OS === "ios" && FirstScreenStyles.buttonIOS,
              ]}
              onPress={handleButtonPress}
              disabled={!inputValue.trim()}
            >
              <Text style={FirstScreenStyles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
        </LinearGradient>
      </View>
    </View>
  );
};

export default FirstScreen;
