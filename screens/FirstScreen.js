import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FirstScreen = ({ navigation }) => {
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
            navigation.navigate('SecondScreen', { inputValue });
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
        display: 'flex',
        flex: 1,
        height: 'auto',
    },
    webContainer: {
        width: 370,
        height: 568,
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
        bottom: '15%',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        elevation: 10,
    },
    contentContainer: {
        bottom: '5%',
        backgroundColor: '#293236',
        borderRadius: 25,
        width: '100%',
        justifyContent: 'top',
        textAlign: 'left',
        alignSelf: 'center',
    },
    image: {
        position: 'relative',
        bottom: '2%',
        width: '100%',
        height: '30%',
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    h1: {
        position: 'relative',
        bottom: '22%',
        marginLeft: '7.5%',
        fontSize: 22,
        textAlign: 'left',
        color: '#fff',
        fontWeight: '600',
        paddingTop: '25%',
    },
    p: {
        position: 'relative',
        bottom: '18%',
        marginHorizontal: '5%',
        marginLeft: '7.5%',
        fontSize: 19,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: '400',
        color: '#fff',
        lineHeight: 30,
    },
    h2: {
        position: 'relative',
        bottom: '2.5%',
        marginLeft: '7.5%',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'left',
        color: '#fff',
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        height: 45,
        alignSelf: 'center',
        position: 'relative',
        marginHorizontal: '5%',
        borderWidth: 2,
        width: '85%',
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
        top: Platform.OS === 'web' ? '40%' : '67%',        
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#01E4F3',
        width: '85%',
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
