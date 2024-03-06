import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const FirstScreen = ({ navigation }) => {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [inputValue, setInputValue] = useState('');
    const [geminiOutput1, setgeminiOutput1] = useState("");
    const handleButtonPress = async () => {
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
                { text: `Give me a List of 10 exercises names that can substitute this exercise: ${inputValue}` },
            ];
            const result = await model.generateContent({
                contents: [{ role: "user", parts }],
                generationConfig,
                safetySettings,
            });
            const response = result.response;
            setgeminiOutput1(response.text());
        } catch (error) {
            console.error('Error generating response:', error);
        }
    };

    useEffect(() => {
        if (geminiOutput1) {
            navigation.navigate('SecondScreen', { geminiOutput1, inputValue });
        }
    }, [geminiOutput1, inputValue, navigation]);

    return (
        <View>
            <View style={{ width: '100%', backgroundColor: 'black', height: 1 }}></View>
            <Text style={{ fontSize: 18, margin: 10, textAlign: 'center' }}>
                What Exercise do you want to replace?
            </Text>
            <TextInput onChangeText={setInputValue} value={inputValue} style={{ borderWidth: 1, width: 300, height: 40, alignSelf: 'center', borderRadius: 10 }}></TextInput>
            <Button title='Next' onPress={handleButtonPress}></Button>
        </View>
    );
};

export default FirstScreen;
