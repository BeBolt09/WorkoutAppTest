import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, StatusBar, Platform } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';

const FourthScreen = ({ route, navigation }) => {
    const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
    const { selectedExercise } = route.params;

    const [showVideo, setShowVideo] = useState(false);
    const [videoWeShow, setVideo] = useState(null);
    const [youtubeTitle, setYoutubeTitle] = useState(null);
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [geminiInstructions, setGeminiInstructions] = useState("");

    const fetchInstructions = async () => {
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
                const videoId = response.data.items[0].id.videoId;
                const title = response.data.items[0].snippet.title;
                const channelId = response.data.items[0].snippet.channelId;

                const videoDetailsResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
                    params: {
                        key: YOUTUBE_API_KEY,
                        id: videoId,
                        part: 'snippet,statistics',
                    }
                });

                if (videoDetailsResponse.data.items.length > 0) {
                    const views = formatViews(videoDetailsResponse.data.items[0].statistics.viewCount);
                    const datePublished = formatDate(videoDetailsResponse.data.items[0].snippet.publishedAt);

                    const channelResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
                        params: {
                            key: YOUTUBE_API_KEY,
                            id: channelId,
                            part: 'snippet',
                        }
                    });

                    if (channelResponse.data.items.length > 0) {
                        const channelTitle = channelResponse.data.items[0].snippet.title;
                        const channelIcon = channelResponse.data.items[0].snippet.thumbnails.default.url;

                        setVideo({
                            videoId,
                            title,
                            views,
                            datePublished,
                            channelTitle,
                            channelIcon
                        });
                        setShowVideo(true);
                        setYoutubeTitle(title);
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    const formatViews = (views) => {
        const numViews = parseInt(views);
        if (numViews >= 1000) {
            return (numViews / 1000).toFixed(0) + 'k views';
        } else {
            return numViews + ' views';
        }
    };

    const formatDate = (dateString) => {
        const currentDate = new Date();
        const publishedDate = new Date(dateString);
        const timeDiff = currentDate.getTime() - publishedDate.getTime();
        const yearsDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));

        if (yearsDiff === 0) {
            return 'Less than a year ago';
        } else if (yearsDiff === 1) {
            return '1 year ago';
        } else {
            return yearsDiff + ' years ago';
        }
    };

    useEffect(() => {
        fetchVideo(); // ONLY ENABLE THIS WHEN FULL TESTING(WE CAN ONLY FETCH SEARCH 100/Day)
        fetchInstructions();
        
        navigation.setOptions({
            headerTitle: selectedExercise,
        });
    }, []); // Empty dependency array to trigger effect only once when component mounts

    return (
        <View style={styles.rootContainer}>
            <View style={Platform.OS === 'web' ? styles.webContainer : styles.mobileContainer}>
                <LinearGradient
                    colors={['#293236', '#293236', '#293236']}
                    style={styles.gradient}
                >
                    <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
                    {showVideo && (
                        <View style={styles.videoContainer}>
                            <YoutubeIframe height={300} width={400} play videoId={videoWeShow.videoId} />
                            <View style={styles.videoInfoContainer}>
                                <Image source={{ uri: videoWeShow.channelIcon }} style={styles.channelIcon} />
                                <View style={styles.videoTextContainer}>
                                    <Text style={styles.videoTitle}>{videoWeShow.title}</Text>
                                    <Text style={styles.channelTitle}>{videoWeShow.channelTitle}</Text>
                                    <Text style={styles.videoDetails}>{videoWeShow.views} • {videoWeShow.datePublished}</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    <View style={styles.separator}></View>
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.instructionsContainer}>
                            <Text style={styles.instructionsTitle}>Instructions:</Text>
                            <Text style={styles.instructions}>
                                {geminiInstructions}
                            </Text>
                        </View>
                    </ScrollView>
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
        width: 390,
        height: 510,
        overflow: 'hidden',
        display: 'flex',
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    videoContainer: {
        width: '100%',
        alignItems: 'center',
    },
    videoTextContainer: {
        flex: 1,
    },
    videoInfoContainer: {
        flexDirection: 'row',
        alignItems: 'top',
        bottom: '15%'
    },
    channelIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: "3%",
        marginLeft: "7%",
    },
    channelTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
    },
    videoTitle: {
        color: 'white',
        marginBottom: '2%',
        fontSize: 18,
        fontWeight: '600',
    },
    videoDetails: {
        fontSize: 14,
        color: 'white',
    },
    separator: {
        paddingBottom: '0%',
        borderWidth: 0.5,
        borderColor: '#fff',
        marginBottom: '0%',
        bottom: Platform.OS === 'web' ? '10%' : "0%",
    },
    instructionsContainer: {
        bottom:  Platform.OS === 'web' ? '10%' : "0%",
        paddingTop: '15%',
        padding: '5%',
        width: '100%',
        backgroundColor: '#293236',
        marginLeft: "7%",

    },
    instructionsTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 15,
        right: '5%'
    },
    instructions: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 5,
        paddingBottom: 5,
        textAlign: 'left',
        lineHeight: 25,
    },
});

export default FourthScreen;
