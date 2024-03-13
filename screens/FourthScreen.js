import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';

const FourthScreen = ({ route }) => {
    const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
    const { selectedExercise } = route.params;

    const [showVideo, setShowVideo] = useState(false);
    const [videoWeShow, setVideo] = useState(null);
    const [youtubeTitle, setYoutubeTitle] = useState(null); // Added state variable for YouTube title

    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [geminiInstructions, setGeminiInstructions] = useState("");

    const fetchInstructions = async() => {
        try {
            const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
            const generationConfig = {
                temperature: 0.1,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
            };
            const parts = [
                { text: `step by step instructions on how to perform : ${selectedExercise}, NO TIPS OR ANY ADDITIONAL INFORMATION` },
            ];
            const result = await model.generateContent({
                contents: [{ role: "user", parts }],
                generationConfig,
            });
            const response = result.response;
            const responseWithoutAsterisks = response.text().split("*").join("");
            setGeminiInstructions(responseWithoutAsterisks);
        } catch (error) {
            console.error('Error generating response:', error);
            fetchInstructions();
        }
    };

    const fetchVideo = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    key: YOUTUBE_API_KEY,
                    q: selectedExercise + 'Tutorial',
                    part: 'snippet',
                    maxResults: 1,
                    type: 'video'
                }
            });
            if (response.data.items.length > 0) {
                const selectedVideo = response.data.items[0].id.videoId;
                const title = response.data.items[0].snippet.title; // Extract video title
                setVideo(selectedVideo);
                setYoutubeTitle(title); // Set video title in state
                setShowVideo(true);
            }
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    useEffect(() => {
        // fetchVideo(); // ONLY ENABLE THIS WHEN FULL TESTING(WE CAN ONLY FETCH SEARCH 100/Day)
        fetchInstructions();
    }, []); // Empty dependency array to trigger effect only once when component mounts

    return (
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
        <StatusBar backgroundColor="#293236" barStyle="light-content" />
                <Text style={styles.title}>{selectedExercise}</Text>
                {showVideo && (
                    <View style={styles.videoContainer}>
                        <YoutubeIframe height={300} width={400} play videoId={videoWeShow} />
                    </View>
                )}

                {/* Render YouTube video title */}
                <Text style={styles.youtubeTitle}>{youtubeTitle}</Text>
                
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.instructionsContainer}>
                    <Text style={styles.instructionsTitle}>Instructions:</Text>
                    <Text style={styles.instructions}>
                        {geminiInstructions}
                    </Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    youtubeTitle: {
        color: 'white',
        marginBottom: 10,
    },
    videoContainer: {
        width: '100%',
        alignItems: 'center',
    },
    instructionsContainer: {
        padding: 12,
        width: 390,
        backgroundColor: '#293236',
        borderTopWidth: 2,
        borderColor: 'white',
    },
    instructionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    instructions: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'left',
        marginLeft: 20,
        lineHeight: 25,
    },
});

export default FourthScreen;
