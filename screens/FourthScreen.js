import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';

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
              q: selectedExercise+'Tutorial',
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
        <View>
            <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: 'bold' }}>{selectedExercise}</Text>
            <Button title='Next' onPress={fetchVideo}></Button>
            {showVideo && (
            <View style={{top:100}}>
                <YoutubeIframe height={300} play videoId={videoWeShow}/>
            </View>
            )}
        </View>
    );
};

export default FourthScreen;
