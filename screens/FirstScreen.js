import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LinearGradient } from 'expo-linear-gradient';

const FirstScreen = ({ navigation }) => {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        // Hide loading overlay after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleButtonPress = async () => {
            navigation.navigate('SecondScreen', { inputValue });
    };

    return (
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
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        bottom: 115,
        flex: 1,
        justifyContent: 'center',
        width: 'auto',
        elevation: 10,
    },
    contentContainer: {
        bottom: 30,
        backgroundColor: '#293236',
        borderRadius: 25,
        width: 393,
        justifyContent: 'top',
        textAlign: 'left',
        alignSelf: 'center',
    },
    image: {
        position: 'relative',
        bottom: 13,
        width: 500,
        height: 250,
        resizeMode: 'stretch',
        borderBottomWidth: 20,
        alignSelf: 'center'
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
        width: 350,
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: '#293236',
        color: 'white',
        paddingLeft: 10,
        fontSize: 18,
        textTransform: 'capitalize'
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
        width: 350,
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
