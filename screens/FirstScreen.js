import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';

const FirstScreen = ({ navigation }) => {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isButtonFocused, setIsButtonFocused] = useState(false);

    const handleButtonPress = async () => {
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
                { text: `Give me a List of 10 exercises names that can substitute this exercise: ${inputValue}` },
            ];
            const result = await model.generateContent({
                contents: [{ role: "user", parts }],
                generationConfig,
            });
            const response = result.response;
            navigation.navigate('Select Equipment', { geminiOutput1: response.text(), inputValue });
        } catch (error) {
            console.error('Error generating response:', error);
            handleButtonPress();
        }
    };

    return (
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
            <StatusBar backgroundColor="#293236" barStyle="light-content" />
            <View style={styles.container}>
                <Image
                    source={require('../assets/screen1bg.png')}
                    style={styles.image}
                />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : null}
                    style={styles.contentContainer}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0} 
                >
                    <Text style={styles.h1}>Swap Exercise</Text>
                    <Text style={styles.p}>What exercise are you trying to replace?</Text>
                    <Text style={styles.p}>We'll help you find a substitute!</Text>
                    <Text style={styles.h2}>Exercise</Text>
                    <TextInput
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder='ex: Bulgarian Split Squat'
                        placeholderTextColor='lightgray'
                        style={[
                            styles.input,
                            isFocused && styles.inputFocused,
                        ]}
                        onFocus={() => {
                            setIsFocused(true);
                            setIsButtonFocused(true);
                        }}
                        onBlur={() => {
                            setIsFocused(false);
                            setIsButtonFocused(false);
                        }}
                    />
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isButtonFocused && styles.buttonFocused,
                        ]}
                        onPress={handleButtonPress}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        bottom: 90,
        flex: 1,
        justifyContent: 'center',
        width: 'auto',
        elevation: 10,
    },
    contentContainer: {
        bottom: 30,
        backgroundColor: '#293236',
        borderRadius: 60,
        width: 395,
        justifyContent: 'top',
        textAlign: 'left',
        alignSelf: 'center',
    },
    image: {
        position: 'relative',
        top: 0,
        width: 500,
        height: 250,
        resizeMode: 'stretch',
        borderBottomWidth: 20,
        alignSelf: 'center'
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
        left: 30,
        padding: 0,
        paddingRight: 40,
        paddingBottom: 0,
        fontSize: 19,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: '400',
        color: '#fff',
        lineHeight: 30,
    },
    input: {
        borderWidth: 1,
        width: 330,
        height: 40,
        alignSelf: 'flex-start',
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
        color: '#293236',
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
