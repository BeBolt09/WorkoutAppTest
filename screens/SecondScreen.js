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
                equipmentListGen();
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
                style={[
                    styles.item,
                    selectedEquipment.includes(itemName) && styles.selectedItem, // Apply selected style conditionally
                ]}
                onPress={() => handleEquipmentSelection(itemName)}
            >
                <Text style={styles.itemText}>{itemName}</Text>
            </TouchableOpacity>
        );
    }).filter(card => card !== null); // Filter out null elements (blank cards)
    

    return (
        <LinearGradient
        colors={['#293236', '#293236', '#293236']}
        style={styles.gradient}
    >
        <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.headerContainer}>
                <Text style={styles.h1}>
                    What equipment is available for you to use? We'll suggest exercises based on what you select.
                </Text>
            </View>
            <View style={styles.contentContainer}>
                    {equipmentNames}
            </View>
                </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={[styles.button, selectedEquipment.length > 0 && styles.buttonFocused]} onPress={handleNext}>
                    <Text style={styles.buttonText}>Find Substitute</Text>
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
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        height: 80,
        backgroundColor: '#293236'
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
        textAlign: 'left',
        padding: 10,
    },
    scrollView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
    },
    item: {
        height: 140,
        width: 150,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 10,
        backgroundColor: '#293236',
        borderColor: 'white',
        borderRadius: 8,
    },
    selectedItem: {
        height: 140,
        width: 150,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 11,
        backgroundColor: '#01E4F314',
        borderColor: '#01E4F3',
        borderRadius: 8,
    },
    itemText: {
        position: 'relative',
        top: 20,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#028B94',
        width: 350,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
    },
    buttonFocused: {
        backgroundColor: '#01E4F3',
    },
    buttonText: {
        color: '#293236',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default SecondScreen;
