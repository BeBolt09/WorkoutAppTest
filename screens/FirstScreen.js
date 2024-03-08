import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';

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
        <LinearGradient
        colors={['#1A1A1A', '#11133A', '#1A1A1A']}
        style={styles.gradient}
    >
        <View style={styles.body}>
            <Image
                source={require('../assets/weight.png')}
                style={styles.image}
            />
            <Text style={styles.h1}>
                Swap Exercise
            </Text>
            <Text style={styles.p}>
                What exercise are you trying to replace? We'll help you find a substitute!
            </Text>
            <Text style={styles.h2}>
                Exercise
            </Text>
            <TextInput
                onChangeText={setInputValue}
                value={inputValue}
                placeholder='ex: Bulgarian Split Squat'
                placeholderTextColor='gray'
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
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
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        position: 'absolute',
        top: 0,
        width: 400,
        height: 200,
        resizeMode: 'auto',
        marginBottom: 20,
        elevation: 20,
    },
    h1: {
        position: 'relative',
        bottom: 80,
        fontSize: 20,
        textAlign: 'left',
        color: '#fff',
        fontWeight: '700',

    },
    h2: {
        position: 'relative',
        bottom: 10,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'left',
        color: '#fff',
        fontWeight: '300',
    },
    p: {
        position: 'relative',
        bottom: 60,
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: '300',
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        width: 330,
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 5,
    },
    button: {
        position: 'absolute',
        bottom: 60,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: 'gray',
        width: 200,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default FirstScreen;
