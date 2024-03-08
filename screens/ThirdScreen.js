import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';

const ThirdScreen = ({ route, navigation }) => {
    const { selectedEquipment, inputValue } = route.params;
    const [listOfExercises, setListOfExercises] = useState('');
    const [editedExercises, setEditedExercises] = useState([]);
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
                setEditedExercises(response.text().split('\n').map(exercise => exercise.replace(/[*-]/g, '').trim())); // Initialize editedExercises state with exercise list
            } catch (error) {
                console.error('Error generating response:', error);
            }
        };
        GetListOfExercises();
    }, [selectedEquipment, inputValue]); 

    const handleExerciseSelection = (exercise, index) => {
        // Update the edited exercise text in the state
        const updatedExercises = [...editedExercises];
        updatedExercises[index] = exercise;
        setEditedExercises(updatedExercises);
    };

    const exerciseCards = editedExercises.map((exercise, index) => {
        return (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelection(cleanedExercise, index)}>
                <View style={styles.item}>
                    <TextInput
                        value={exercise}
                        onChangeText={text => handleExerciseSelection(text, index)}
                        style={styles.itemText}
                    />
                </View>
            </TouchableOpacity>
        );
    });

    return (

        <LinearGradient
        colors={['#1A1A1A', '#11133A', '#1A1A1A']}
        style={styles.gradient}
    >
        <View style={styles.body}>
            <Text style={styles.h1}>Select an Exercise to Substitute for:</Text>
            <Text style={styles.p}>{inputValue}</Text>
            <ScrollView style={styles.scrollView}>
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
        justifyContent: 'top',
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        marginBottom: 10,
    },
    p: {
        justifyContent: 'center',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '900',
        color: '#8ff',
        marginBottom: 15,
        textTransform: 'uppercase',
        
    },
    scrollView: {
        width: '100%',
        flex: 1,
    },
    item: {
        width: 330,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 5,
        backgroundColor: '#D9D9D9',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        elevation: 2,
    },
    itemText: {
        color: '#1a1a1a',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
});

export default ThirdScreen;
