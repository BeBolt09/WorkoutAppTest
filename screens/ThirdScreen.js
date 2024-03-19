import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ThirdScreen = ({ route, navigation }) => {
    const { selectedEquipment, inputValue } = route.params;
    const [listOfExercises, setListOfExercises] = useState('');
    const [selectedExercise, setSelectedExercise] = useState(null);

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
                    { text: `only having access to these pieces of equipment: ${selectedEquipment} Give me a list of 10+ exercise names that could substitute this exercise: ${inputValue} And still target the same muscle group. Only give the names of the exercises (Don't include '-' or '*' or numbers)` },
                ];
                const result = await model.generateContent({
                    contents: [{ role: "user", parts }],
                    generationConfig,
                });
                const response = result.response;
                setListOfExercises(response.text());
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
        const textDecorationStyle = /^[-*\d]/.test(exercise) ? {} : styles.itemText;
        const itemStyle = isSelected ? styles.selectedItem : null;
        const arrowContainerStyle = isSelected ? [styles.selectedArrowContainer, styles.selectedArrowColor] : styles.arrowContainer;

        return (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelection(cleanedExercise)}>
                <View style={[styles.item, itemStyle]}>
                    <Text style={[styles.itemText, textDecorationStyle]} numberOfLines={1}>
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
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
            <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.h1}>
                        {exerciseCards.length} Substitutes for <Text style={styles.inputValue}>{inputValue}</Text>
                    </Text>
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
    selectedItem: {
        borderColor: '#01E4F3',
        backgroundColor: '#2c535e',
        borderWidth: 1.5,
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
    selectedArrowContainer: {
        backgroundColor: '#6b868e',
        borderRadius: 50,
        padding: 0,
        marginLeft: 'auto',
        width: 28,
        height: 28,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedArrowColor: {
        color: '#fff',
    },
});

export default ThirdScreen;
