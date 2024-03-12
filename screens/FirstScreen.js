import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';

const FirstScreen = ({ navigation }) => {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false); // State to track input focus
    const [isButtonFocused, setIsButtonFocused] = useState(false); // State to track button focus

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
            navigation.navigate('SecondScreen', { geminiOutput1: response.text(), inputValue });
        } catch (error) {
            console.error('Error generating response:', error);
        }
    };

    return (
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/screen1bg.png')}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.h1}>Swap Exercise</Text>
                    <Text style={styles.p}>What exercise are you trying to replace? We'll help you find a substitute!</Text>
                    <Text style={styles.h2}>Exercise</Text>
                    <TextInput
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder='ex: Bulgarian Split Squat'
                        placeholderTextColor='lightgray'
                        style={[
                            styles.input,
                            isFocused && styles.inputFocused, // Apply focused style conditionally
                        ]}
                        onFocus={() => {
                            setIsFocused(true); // Set focus state to true
                            setIsButtonFocused(true); // Set button focus state to true
                        }}
                        onBlur={() => {
                            setIsFocused(false); // Set focus state to false
                            setIsButtonFocused(false); // Set button focus state to false
                        }}
                    />
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isButtonFocused && styles.buttonFocused, // Apply focused style conditionally
                        ]}
                        onPress={handleButtonPress}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'top',
        width: 'auto',
        elevation: 10, 
    },
    contentContainer: {
        position: 'absolute',
        top: 168,
        backgroundColor: '#293236', 
        borderRadius: 60,
        width: 395,
        justifyContent: 'top',
        textAlign:'left',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: 400,
        height: 200,

    },
    h1: {
        position: 'relative',
        bottom: 70,
        left: 30,
        fontSize: 25,
        textAlign: 'left',
        color: '#fff',
        fontWeight: '600',
        paddingTop: 100,
    },
    h2: {
        position: 'relative',
        bottom: 10,
        left: 30,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'left',
        color: '#fff',
        fontWeight: '500',
    },
    p: {
        position: 'relative',
        bottom: 60,
        left: 20,
        padding: 10,
        fontSize: 19,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: '400',
        color: '#fff',
        lineHeight: 30,
    },
    input: {
        position: 'relative',
        left: 30,
        borderWidth: 2,
        width: 340,
        height: 55,
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: '#293236',
        color: 'white',
        paddingLeft: 10,
        fontSize: 20,
    },
    inputFocused: {
        borderColor: '#01E4F3',
    },
    button: {
        position: 'relative',
        top: 140,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#028B94',
        width: 350,
        height: 50,
        borderRadius: 50,
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

export default FirstScreen;
