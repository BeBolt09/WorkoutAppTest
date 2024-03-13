import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const ThirdScreen = ({ route, navigation }) => {
    const { selectedEquipment, inputValue } = route.params;
    const [listOfExercises, setListOfExercises] = useState('');

    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

    useEffect(() => {
        const GetListOfExercises = async () => {
            try {
                const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
                const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
                const generationConfig = {
                    temperature: 0.0,
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
    }, [selectedEquipment, inputValue]); 

    const handleExerciseSelection = (exercise) => {
        // Handle the selection of the exercise here
        console.log('Selected exercise:', exercise);
        // Navigate to FourthScreen and pass selected exercise as parameter
        navigation.navigate('Substitute', { selectedExercise: exercise });
    };

    const exerciseCards = listOfExercises.split('\n').map((exercise, index) => {
        const cleanedExercise = exercise.replace(/^[-*]\s*/, '');   
        // Check if the exercise starts with '*', '-', or a number
        const textDecorationStyle = /^[-*\d]/.test(exercise) ? {} : styles.itemText;
        
        return (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelection(cleanedExercise, index)}>
                <View style={styles.item}>
                    <TextInput
                        value={exercise}
                        onChangeText={text => handleExerciseSelection(text, index)}
                        style={[styles.itemText, textDecorationStyle]} // Apply conditional style
                    />
                    <AntDesign name="rightcircleo" size={26} color="gray" />
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
        <StatusBar backgroundColor="#293236" barStyle="light-content" />
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.h1}>{exerciseCards.length} substitutes for {inputValue}</Text>
                    {exerciseCards}
                </ScrollView>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1, 
    },
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        zIndex: 1,
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
    },
    scrollView: {
        width: '100%',
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        height: 90,
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        paddingBottom: 40,
        margin: 8,
        backgroundColor: '#01E4F314',
        borderRadius: 15,
        elevation: 2,
    },
    itemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        textTransform: 'capitalize',
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default ThirdScreen;
