import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';

const FirstScreen = ({ navigation }) => {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const isWeb = Platform.OS === 'web'; // Check if app is running in a web browser

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleButtonPress = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

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
            navigation.navigate('SecondScreen', { geminiOutput1: response.text(), inputValue });
        } catch (error) {
            console.error('Error generating response:', error);
            handleButtonPress();
        }
    };

    return (
        <View style={styles.rootContainer}>
            <View style={isWeb ? styles.webContainer : styles.mobileContainer}>
                <LinearGradient
                    colors={['#293236', '#293236', '#293236']}
                    style={styles.gradient}
                >
                    <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
                    <View style={styles.container}>
                        <Image
                            source={require('../assets/screen1bg.png')}
                            style={styles.image}
                        />
                        {isLoading && ( 
                            <View style={styles.loadingOverlay}>
                                <ActivityIndicator size="large" color="#01E4F3" />
                            </View>
                        )}
                        {!isLoading && ( 
                            <KeyboardAvoidingView
                                behavior={Platform.OS === 'ios' ? 'padding' : null}
                                style={styles.contentContainer}
                                keyboardVerticalOffset={Platform.OS === 'ios' ? -140 : 0} 
                            >
                                <Text style={styles.h1}>Swap Exercise</Text>
                                <Text style={styles.p}>What exercise are you trying to replace?</Text>
                                <Text style={styles.p}>We'll help you find a substitute!</Text>
                                <Text style={styles.h2}>Exercise</Text>
                                <TextInput
                                    onChangeText={text => {
                                        setInputValue(text);
                                        setIsFocused(!!text);
                                    }}
                                    value={inputValue}
                                    placeholder='ex: Bulgarian Split Squat'
                                    placeholderTextColor='lightgray'
                                    style={[
                                        styles.input,
                                        isFocused && styles.inputFocused,
                                    ]}
                                    keyboardShouldPersistTaps='always'
                                />
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        !inputValue.trim() && styles.buttonDisabled,
                                        Platform.OS === 'ios' && styles.buttonIOS,
                                    ]}
                                    onPress={handleButtonPress}
                                    disabled={!inputValue.trim()}
                                >
                                    <Text style={styles.buttonText}>Next</Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        )}
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
        width: 370,
        height: 844,
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
    container: {
        bottom: 115,
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        elevation: 10,
    },
    contentContainer: {
        bottom: 30,
        backgroundColor: '#293236',
        borderRadius: 25,
        width: '100%',
        justifyContent: 'top',
        textAlign: 'left',
        alignSelf: 'center',
    },
    image: {
        position: 'relative',
        bottom: 13,
        width: '100%',
        height: 250,
        resizeMode: 'stretch',
        borderBottomWidth: 20,
        alignSelf: 'center',
    },
    h1: {
        position: 'relative',
        bottom: 70,
        left: 20,
        fontSize: 22,
        textAlign: 'left',
        color: '#fff',
        fontWeight: '600',
        paddingTop: 90,
    },
    p: {
        position: 'relative',
        bottom: 60,
        left: 20,
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
    h2: {
        position: 'relative',
        bottom: 10,
        left: 20,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'left',
        color: '#fff',
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        width: 330,
        height: 45,
        alignSelf: 'flex-start',
        position: 'relative',
        left: 20,
        borderWidth: 2,
        width: '90%',
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: '#293236',
        color: 'white',
        paddingLeft: 10,
        fontSize: 18,
        textTransform: 'capitalize',
        //fontStyle: 'italic',
    },
    inputFocused: {
        borderColor: '#01E4F3',
    },
    button: {
        position: 'relative',
        top: 210,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#01E4F3',
        width: '90%',
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        color: '#293236',
    },
    buttonIOS: {
        marginTop: 45,
    },
    buttonDisabled: {
        backgroundColor: '#1c6c80',
    },
    buttonText: {
        color: '#293236',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        top: 170,
        alignItems: 'center',
        backgroundColor: '#293236',
    },
});

export default FirstScreen;
