import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const ThirdScreen = ({ route }) => {
    const { selectedEquipment, inputValue } = route.params;
    const [listOfExercises, setListOfExercises] = useState('');
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

    useEffect(() => {
        const GetListOfExercises = async () => {
            try {
                const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
                const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
                const generationConfig = {
                    temperature: 0.9,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 2048,
                };
                const safetySettings = [
                    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
                ];
                const parts = [
                    { text: `only having access to these pieces of equipment: ${selectedEquipment} Give me a list of exercise names that could substitute this exercise: ${inputValue}. Only give the names of the exercises` },
                ];
                const result = await model.generateContent({
                    contents: [{ role: "user", parts }],
                    generationConfig,
                    safetySettings,
                });
                const response = result.response;
                setListOfExercises(response.text());
            } catch (error) {
                console.error('Error generating response:', error);
            }
        };
        GetListOfExercises();
    }, [selectedEquipment, inputValue]); // Include selectedEquipment and inputValue in the dependency array to trigger useEffect on change

    const handleExerciseSelection = (exercise) => {
        // Handle the selection of the exercise here
        console.log('Selected exercise:', exercise);
    };

    const exerciseCards = listOfExercises.split('\n').map((exercise, index) => {
        const cleanedExercise = exercise.replace(/^[-*]\s*/, '');        
        return (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelection(cleanedExercise)}>
                <View style={{ padding: 10, margin: 5, backgroundColor: 'lightgray', borderRadius: 5 }}>
                    <Text>{cleanedExercise}</Text>
                </View>
            </TouchableOpacity>
        );
    });


    return (
        <View>
            <Text style={{ alignSelf: "center", paddingTop: 30, fontSize: 18 }}>List of exercises to Substitute for:</Text>
            <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: 'bold' }}>{inputValue}</Text>
            {exerciseCards}
        </View>
    );
};

export default ThirdScreen;
