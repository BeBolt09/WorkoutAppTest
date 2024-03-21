import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ThirdScreen = ({ route, navigation }) => {
    const { selectedEquipment, inputValue } = route.params;
    const [listOfExercises, setListOfExercises] = useState('');
    const [selectedExercise, setSelectedExercise] = useState(null);
    const isWeb = Platform.OS === 'web'; // Check if app is running in a web browser

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
        <View style={styles.rootContainer}>
            <View style={isWeb ? styles.webContainer : styles.mobileContainer}>
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#191F21',
        flex: 1,
    },
    webContainer: {
        width: 390,
        height: 510,
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    mobileContainer: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    body: {
        flex: 1,
        alignSelf: 'center',
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
        marginVertical: 10,
        marginLeft: '7%',
        textAlign: 'left',
        paddingVertical: 10,
    },
    inputValue: {
        textTransform: 'capitalize'
    },
    scrollView: {
        width: 390,
        flex: 1,
        paddingBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '85%',
        height: 90,
        borderWidth: 1,
        borderColor: 'white',
        padding: '5%',
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
