import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GlobalStyles, ThirdScreenStyles } from '../Styles';

const ThirdScreen = ({ route, navigation }) => {
    const { selectedEquipment, inputValue } = route.params;
    const [listOfExercises, setListOfExercises] = useState('');
    const [selectedExercise, setSelectedExercise] = useState(null);
    const isWeb = Platform.OS === 'web';

    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

    useEffect(() => {
        const getListOfExercises = async () => {
            try {
                const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
                const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
                const generationConfig = {
                    temperature: 0.0,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 2048,
                };
                const parts = [
                    { text: `only having access to these pieces of equipment: ${selectedEquipment} Give me list of exercise names that could substitute this exercise: ${inputValue} And still target the same muscle group. when you give the names of the exercises Don't include numbering or '-' or '*' at the beginning of the exercise names` },
                ];
                const result = await model.generateContent({
                    contents: [{ role: "user", parts }],
                    generationConfig,
                });
                const response = result.response;
                setListOfExercises(response.text());
                console.log(response.text())
            } catch (error) {
                console.error('Error generating response:', error);
            }
        };
        getListOfExercises();
    }, [selectedEquipment, inputValue]);

    const handleExerciseSelection = (exercise) => {
        setSelectedExercise(exercise);
        navigation.navigate('FourthScreen', { selectedExercise: exercise });
    };

    const exerciseCards = listOfExercises.split('\n').map((exercise, index) => {
        const cleanedExercise = exercise.replace(/^[-*]\s*/, '');
        const isSelected = cleanedExercise === selectedExercise;
        const textDecorationStyle = /^[-*\d]/.test(exercise) ? {} : ThirdScreenStyles.itemText; 
        const itemStyle = isSelected ? ThirdScreenStyles.selectedItem : null; 
        const arrowContainerStyle = isSelected ? [ThirdScreenStyles.selectedArrowContainer, ThirdScreenStyles.selectedArrowColor] : ThirdScreenStyles.arrowContainer; 

        return (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelection(cleanedExercise)}>
                <View style={[ThirdScreenStyles.item, itemStyle]}> 
                    <Text style={[ThirdScreenStyles.itemText, textDecorationStyle]} numberOfLines={1}> 
                        {exercise}
                    </Text>
                    <View style={arrowContainerStyle}>
                        <Entypo name="chevron-thin-right" size={18} color={isSelected ? '#e7ebed' : '#b8bac1'} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <View style={GlobalStyles.rootContainer}> 
            <View style={isWeb ? GlobalStyles.webContainer : GlobalStyles.mobileContainer}> 
                <LinearGradient
                    colors={GlobalStyles.gradient.colors}
                    style={GlobalStyles.gradient} 
                >
                    <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
                    <View style={ThirdScreenStyles.body}> 
                        <ScrollView style={ThirdScreenStyles.scrollView}> 
                            <Text style={ThirdScreenStyles.h2}>
                                {exerciseCards.length} Substitutes for <Text style={ThirdScreenStyles.inputValue}>{inputValue}</Text>
                            </Text>
                            {exerciseCards}
                        </ScrollView>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

export default ThirdScreen;