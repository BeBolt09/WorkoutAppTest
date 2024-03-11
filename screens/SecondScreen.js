import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { LinearGradient, RadialGradient } from 'expo-linear-gradient';

const SecondScreen = ({ route, navigation }) => {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const { geminiOutput1, inputValue } = route.params;
    const [geminiOutput2, setGeminiOutput2] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState([]);

    useEffect(() => {
        const equipmentListGen = async () => {
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
                    { text: `Give a list of equipment names that could be needed for these exercises: ${geminiOutput1}.Only the names of the equipment.Don't repeat equipment names. If no equipment is needed don't tell me anything just move on to the next, Don't say N/A or None, Just leave blank` },
                ];
                const result = await model.generateContent({
                    contents: [{ role: "user", parts }],
                    generationConfig,
                    safetySettings,
                });
                const response = result.response;
                setGeminiOutput2(response.text());
            } catch (error) {
                console.error('Error generating response:', error);
            }
        };
        equipmentListGen();
    }, []);

    const handleEquipmentSelection = (equipment) => {
        if (selectedEquipment.includes(equipment)) {
            setSelectedEquipment(selectedEquipment.filter(item => item !== equipment));
        } else {
            setSelectedEquipment([...selectedEquipment, equipment]);
        }
    };
    const handleNext = () => {
        navigation.navigate('ThirdScreen', { selectedEquipment, inputValue });
    };

    const equipmentNames = geminiOutput2.split('\n').map((name, index) => {
        const itemName = name.split('. ')[1];
        // Check if itemName is blank or empty
        if (!itemName || /^\s*$/.test(itemName)) {
            return null; // Return null if blank or empty
        }
        return (
            
            <TouchableOpacity
                key={index}
                style={selectedEquipment.includes(itemName) ? styles.selectedItem : styles.item}
                onPress={() => handleEquipmentSelection(itemName)}
            >
                <Text style={styles.itemText}>{itemName}</Text>
            </TouchableOpacity>
        );
    }).filter(card => card !== null); // Filter out null elements (blank cards)
    

    return (
        <LinearGradient
        colors={['#1A1A1A', '#000', '#1A1A1A']}
        style={styles.gradient}
    >
        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <Text style={styles.h1}>
                    What equipment is available for you to use? We'll suggest exercises based on what you select.
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {equipmentNames}
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,       
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    contentContainer: {
        marginTop: 80,
        flex: 1,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        height: 80,
        backgroundColor: '#1a1a1a'
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '800',
        textAlign: 'center',
        padding: 10,
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 5,
        backgroundColor: '#D9D9D9',
        borderColor: 'white',
        borderRadius: 5,
    },
    selectedItem: {
        height: 150,
        width: 150,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 5,
        backgroundColor: '#696969',
        borderColor: 'white',
        borderRadius: 10,
        color: 'green',
    },
    itemText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 15,
        backgroundColor: 'gray',
        width: 200,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default SecondScreen;
