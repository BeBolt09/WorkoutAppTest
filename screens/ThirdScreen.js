import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

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
                const parts = [
                    { text: `only having access to these pieces of equipment: ${selectedEquipment} Give me a list of exercise names that could substitute this exercise: ${inputValue}. Only give the names of the exercises (Don't include '-' or '*' or numbers)` },
                ];
                const result = await model.generateContent({
                    contents: [{ role: "user", parts }],
                    generationConfig,
                });
                const response = result.response;
                setListOfExercises(response.text());
            } catch (error) {
                console.error('Error generating response:', error);
                GetListOfExercises();
            }
        };
        GetListOfExercises();
    }, [selectedEquipment, inputValue]); 

    const handleExerciseSelection = (exercise) => {
        console.log('Selected exercise:', exercise);
        navigation.navigate('FourthScreen', { selectedExercise: exercise });
    };

    const exerciseCards = listOfExercises.split('\n').map((exercise, index) => {
        const cleanedExercise = exercise.replace(/^[-*]\s*/, '');   
        const textDecorationStyle = /^[-*\d]/.test(exercise) ? {} : styles.itemText;
        
        return (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelection(cleanedExercise, index)}>
                <View style={styles.item}>
                    <Text style={[styles.itemText, textDecorationStyle]}>
                        {exercise}
                    </Text>
                    {/* Wrap arrow icon inside a View with rounded corners */}
                    <View style={styles.arrowContainer}>
                        <Entypo name="chevron-thin-right" size={22} color="#b8bac1" />
                    </View>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
        <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.h1}>{exerciseCards.length} Substitutes for <Text style={styles.inputValue}>{inputValue}</Text></Text>
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
        paddingHorizontal: 15,
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
        marginVertical: 10,
        marginLeft: 10,
        textAlign: 'left',
        paddingVertical: 10,
    },
    inputValue: {
        textTransform: 'capitalize'
    },
    scrollView: {
        width: '100%',
        flex: 1,
        paddingBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto',
        height: 90,
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        paddingBottom: 40,
        margin: 8,
        backgroundColor: '#2a3a40',
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
    arrowContainer: {
        backgroundColor: '#3f4e53',
        borderRadius: 50, 
        padding: 0, 
        marginLeft: 'auto',
        width: 28,
        height: 28,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ThirdScreen;
