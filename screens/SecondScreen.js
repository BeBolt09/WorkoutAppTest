import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

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
                style={{
                    height: 150,
                    width: '50%',
                    borderWidth: 1,
                    borderColor: selectedEquipment.includes(itemName) ? 'blue' : 'black',
                }}
                onPress={() => handleEquipmentSelection(itemName)}
            >
                <Text>{itemName}</Text>
            </TouchableOpacity>
        );
    }).filter(card => card !== null); // Filter out null elements (blank cards)
    

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', backgroundColor: 'black', height: 1 }}></View>
            <Text style={{ fontSize: 18, margin: 10, textAlign: 'center' }}>
                What equipment do you have ?
            </Text>
            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {equipmentNames}
            </ScrollView>
            <View style={{ borderRadius: 10, borderWidth: 1, height: 50, margin: 30 }}>
                <Button title='Next' onPress={handleNext}></Button>
            </View>
        </View>
    );
}

export default SecondScreen;
