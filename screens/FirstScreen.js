// FirstScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, FirstScreenStyles } from '../Styles';

const FirstScreen = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const isWeb = Platform.OS === 'web';

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleButtonPress = async () => {
            navigation.navigate('SecondScreen', { inputValue });
    };

    return (
        <View style={GlobalStyles.rootContainer}>
            <View style={isWeb ? FirstScreenStyles.webContainer : GlobalStyles.mobileContainer}>
                <LinearGradient
                    colors={GlobalStyles.gradient.colors}
                    style={GlobalStyles.gradient}
                >
                    <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
                    <View style={FirstScreenStyles.container}>
                        <Image
                            source={require('../assets/screen1bg.png')}
                            style={FirstScreenStyles.image}
                        />
                        {isLoading && ( 
                            <View style={FirstScreenStyles.loadingOverlay}>
                                <ActivityIndicator size="large" color="#01E4F3" />
                            </View>
                        )}
                        {!isLoading && ( 
                            <KeyboardAvoidingView
                                behavior={Platform.OS === 'ios' ? 'padding' : null}
                                style={FirstScreenStyles.contentContainer}
                                keyboardVerticalOffset={Platform.OS === 'ios' ? -140 : 0} 
                            >
                                <Text style={FirstScreenStyles.h1}>Swap Exercise</Text>
                                <Text style={FirstScreenStyles.h2}>What exercise are you trying to replace?</Text>
                                <Text style={FirstScreenStyles.h2}>We'll help you find a substitute!</Text>
                                <Text style={FirstScreenStyles.h3}>Exercise</Text>
                                <TextInput
                                    onChangeText={text => {
                                        setInputValue(text);
                                        setIsFocused(!!text);
                                    }}
                                    value={inputValue}
                                    placeholder='ex: Bulgarian Split Squat'
                                    placeholderTextColor='lightgray'
                                    style={[
                                        FirstScreenStyles.input,
                                        isFocused && FirstScreenStyles.inputFocused,
                                    ]}
                                    keyboardShouldPersistTaps='always'
                                />
                            </KeyboardAvoidingView>
                        )}
                    </View>
                                <TouchableOpacity
                                    style={[
                                        FirstScreenStyles.button,
                                        !inputValue.trim() && FirstScreenStyles.buttonDisabled,
                                        Platform.OS === 'ios' && FirstScreenStyles.buttonIOS,
                                    ]}
                                    onPress={handleButtonPress}
                                    disabled={!inputValue.trim()}
                                >
                                    <Text style={FirstScreenStyles.buttonText}>Next</Text>
                                </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    );
};

export default FirstScreen;