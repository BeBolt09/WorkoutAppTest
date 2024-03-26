import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, StatusBar, Platform , StyleSheet } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, FourthScreenStyles } from '../Styles';
import MuscleGroupImage from '../Components/MuscleGen';

const FourthScreen = ({ route, navigation }) => {
    const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
    const { selectedExercise } = route.params;

    const [showVideo, setShowVideo] = useState(false);
    const [videoWeShow, setVideo] = useState(null);
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
    const [geminiInstructions, setGeminiInstructions] = useState("");
    
    const [displayVideo,setDisplayVideo] = useState(true)
    const [displayMuscles,setDisplayMuscles] = useState(false)

    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabPress = (tabName) => {
      setActiveTab(tabName);
      setDisplayVideo(!displayVideo);
      setDisplayMuscles(!displayMuscles);
    };

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
    const [muscleGroup,setMuscleGroup] = useState('');
    const fetchMuscleGroup = async () => {
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
              { text: `return the Main muscle group that is targeted when doing ${selectedExercise} Try to be specific you can only use these muscle group as a response:"all",
              "all_lower",
              "all_upper",
              "abductors",
              "abs",
              "adductors",
              "back",
              "back_lower",
              "back_upper",
              "biceps",
              "calfs",
              "chest",
              "core",
              "core_lower",
              "core_upper",
              "forearms",
              "gluteus",
              "hamstring",
              "hands",
              "latissimus",
              "legs",
              "neck",
              "quadriceps",
              "shoulders",
              "shoulders_back",
              "shoulders_front",
              "triceps"` },
          ];
          const result = await model.generateContent({
              contents: [{ role: "user", parts }],
              generationConfig,
          });
          const response = result.response;
          const responseWithoutAsterisks = response.text().split("*").join("");
          setMuscleGroup(responseWithoutAsterisks);
      } catch (error) {
          console.error('Error generating response:', error);
          fetchMuscleGroup();
      }
  };

    useEffect(() => {
        // fetchVideo(); // ONLY ENABLE THIS WHEN FULL TESTING(WE CAN ONLY FETCH SEARCH 100/Day)
        fetchInstructions();
        fetchMuscleGroup();
        
        navigation.setOptions({
            headerTitle: selectedExercise,
        });
    }, []); 

    return (
    <>
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.tab, activeTab === 'Tab1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab1')}
            >
                <Text style={styles.tabText}>Video Instructions</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tab, activeTab === 'Tab2' && styles.activeTab]}
                onPress={() => handleTabPress('Tab2')}
            >
                <Text style={styles.tabText}>Muscles</Text>
            </TouchableOpacity>
        </View>
    
        {displayVideo &&    <View style={GlobalStyles.rootContainer}>
            <View style={Platform.OS === 'web' ? GlobalStyles.webContainer : GlobalStyles.mobileContainer}>
                <LinearGradient
                    colors={GlobalStyles.gradient.colors}
                    style={GlobalStyles.gradient}
                >
                    <StatusBar backgroundColor="#313b3f" barStyle="light-content" />
                    {showVideo && (
                        <View style={FourthScreenStyles.videoContainer}>
                            <YoutubeIframe height={300} width={Platform.OS === 'web' ? 370 : 400} play videoId={videoWeShow.videoId} />
                            <View style={FourthScreenStyles.videoInfoContainer}>
                                <Image source={{ uri: videoWeShow.channelIcon }} style={FourthScreenStyles.channelIcon} />
                                <View style={FourthScreenStyles.videoTextContainer}>
                                    <Text style={FourthScreenStyles.videoTitle}>{videoWeShow.title}</Text>
                                    <Text style={FourthScreenStyles.channelTitle}>{videoWeShow.channelTitle}</Text>
                                    <Text style={FourthScreenStyles.videoDetails}>{videoWeShow.views} • {videoWeShow.datePublished}</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    <View style={FourthScreenStyles.separator}></View>
                    <ScrollView contentContainerStyle={FourthScreenStyles.container}>
                        <View style={FourthScreenStyles.instructionsContainer}>
                            <Text style={FourthScreenStyles.instructionsTitle}>Instructions:</Text>
                            <Text style={FourthScreenStyles.instructions}>
                                {geminiInstructions}
                            </Text>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        </View>}

        {displayMuscles && <View>
            <MuscleGroupImage muscleGroup={muscleGroup}/>
        </View>}
    </>
    );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#eee',
      height: 50,
    },
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: 'blue',
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default FourthScreen;