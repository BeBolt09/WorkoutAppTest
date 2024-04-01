// NewSecondScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles, NewSecondScreenStyles } from "../Styles";


const NewSecondScreen = ({ route, navigation }) => {
  const { inputValue } = route.params;
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const isWeb = Platform.OS === "web";

  const predefinedEquipment = [
    {
      name: "Not Sure",
      iconGray: require("../assets/QuestionMark_Gray.png"),
      iconBlue: require("../assets/QuestionMark_Blue.png"),
    },
    {
      name: "Full Gym Access",
      iconGray: require("../assets/GymAccess_Gray.png"),
      iconBlue: require("../assets/GymAccess_Blue.png"),
    },
    {
      name: "No Equipment",
      iconGray: require("../assets/NoEquipment_Gray.png"),
      iconBlue: require("../assets/NoEquipment_Blue.png"),
    },
    {
      name: "Dumbbells",
      iconGray: require("../assets/Dumbbell_Gray.png"),
      iconBlue: require("../assets/Dumbbell_Blue.png"),
    },
    {
      name: "EZ Curl Bar",
      iconGray: require("../assets/EZCurlBar_Gray.png"),
      iconBlue: require("../assets/EZCurlBar_Blue.png"),
    },
    {
      name: "Resistance Band",
      iconGray: require("../assets/ResistanceBand_Gray.png"),
      iconBlue: require("../assets/ResistanceBand_Blue.png"),
    },
    {
      name: "Pull Up Bar",
      iconGray: require("../assets/PullUpBar_Gray.png"),
      iconBlue: require("../assets/PullUpBar_Blue.png"),
    },
    {
      name: "Exercise Ball",
      iconGray: require("../assets/ExerciseBall_Gray.png"),
      iconBlue: require("../assets/ExerciseBall_Blue.png"),
    },
    {
      name: "Bench",
      iconGray: require("../assets/Bench_Gray.png"),
      iconBlue: require("../assets/Bench_Blue.png"),
    },
    {
      name: "Barbell",
      iconGray: require("../assets/Barbell_Gray.png"),
      iconBlue: require("../assets/Barbell_Blue.png"),
    },
    {
      name: "Kettle Bell",
      iconGray: require("../assets/Kettlebell_Gray.png"),
      iconBlue: require("../assets/Kettlebell_Blue.png"),
    },
    {
      name: "Step",
      iconGray: require("../assets/Step_Gray.png"),
      iconBlue: require("../assets/Step_Blue.png"),
    },
  ];

  const handleEquipmentSelection = (equipment) => {
    if (selectedEquipment.includes(equipment)) {
      setSelectedEquipment(
        selectedEquipment.filter((item) => item !== equipment)
      );
    } else {
      setSelectedEquipment([...selectedEquipment, equipment]);
    }
  };

  const handleNext = () => {
    if (selectedEquipment.length > 0) {
      navigation.navigate("ThirdScreen", { selectedEquipment, inputValue });
    }
  };

  const equipmentNames = predefinedEquipment.map((item, index) => {
    const isSelected = selectedEquipment.includes(item.name);
    const iconSource = isSelected ? item.iconBlue : item.iconGray;

    return (
      <TouchableOpacity
        key={index}
        style={[
          NewSecondScreenStyles.item,
          isSelected && NewSecondScreenStyles.selectedItem,
        ]}
        onPress={() => handleEquipmentSelection(item.name)}
      >
        <View style={NewSecondScreenStyles.itemContent}>
          <Image source={iconSource} style={NewSecondScreenStyles.icon} />
          <Text
            style={[
              NewSecondScreenStyles.itemText,
              isSelected && NewSecondScreenStyles.selectedItemText,
            ]}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={GlobalStyles.rootContainer}>
      <View
        style={isWeb ? GlobalStyles.webContainer : GlobalStyles.mobileContainer}
      >
        <LinearGradient
          colors={GlobalStyles.gradient.colors}
          style={GlobalStyles.gradient}
        >
          <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
          <View style={NewSecondScreenStyles.body}>
            <ScrollView
              contentContainerStyle={NewSecondScreenStyles.scrollView}
            >
              <View style={NewSecondScreenStyles.headerContainer}>
                <Text style={NewSecondScreenStyles.h2}>
                  What equipment is available for you to use? We'll suggest
                  exercises based on what you select.
                </Text>
              </View>
              <View style={NewSecondScreenStyles.contentContainer}>
                {equipmentNames}
              </View>
            </ScrollView>
            <View style={NewSecondScreenStyles.bottomContainer}>
              <TouchableOpacity
                style={[
                  NewSecondScreenStyles.button,
                  selectedEquipment.length > 0
                    ? NewSecondScreenStyles.buttonFocused
                    : NewSecondScreenStyles.buttonDisabled,
                ]}
                onPress={handleNext}
                disabled={selectedEquipment.length === 0}
              >
                <Text style={NewSecondScreenStyles.buttonText}>
                  Find Substitute
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default NewSecondScreen;
