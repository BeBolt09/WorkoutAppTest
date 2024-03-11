import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';

const FourthScreen = ({ route }) => {
    const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
    const { selectedExercise } = route.params;

    const [showVideo, setShowVideo] = useState(false);
    const [videoWeShow, setVideo] = useState(null);
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
                const selectedVideo = response.data.items[0];
                setVideo(selectedVideo.id.videoId);
                setShowVideo(true);
            }
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    return (
        <LinearGradient
            colors={['#1A1A1A', '#000', '#1A1A1A']}
            style={styles.gradient}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{selectedExercise}</Text>
                <TouchableOpacity style={styles.button} onPress={fetchVideo}>
                    <Text style={styles.buttonText}>See Video</Text>
                </TouchableOpacity>
                {showVideo && (
                    <View style={styles.videoContainer}>
                        <YoutubeIframe height={300} width={400} play videoId={videoWeShow} />
                    </View>
                )}
                <View style={styles.instructionsContainer}>
                    <Text style={styles.instructionsTitle}>Instructions:</Text>
                    <Text style={styles.instructions}>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text style={styles.instructions}>
                        2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Text style={styles.instructions}>
                        3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: 'gray',
        width: 200,
        height: 40,
        borderRadius: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
    videoContainer: {
        width: '100%',
        alignItems: 'center',
    },
    instructionsContainer: {
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 5,
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
    },
});

export default FourthScreen;
