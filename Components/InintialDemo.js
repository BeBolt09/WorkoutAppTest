import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';

const InitialDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [videoWeShow, setVideo] = useState(null);
  const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
  const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;

  const handleButtonPress = async () => {
    try {
      const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      };
      const safetySettings = [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      ];
      const parts = [
        { text: `What is a good replacement exercise for ${inputValue}, Once you have found a good exercise to replace that. You will find a youtube video title of a youtube video that explains how to do that exercise and give me that title. DO NOT GIVE ME ANYTHING OTHER THAN THAT TITLE` },
      ];
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
      });
      const response = result.response;
      setGeneratedResponse(response.text());
    } catch (error) {
      console.error('Error generating response:', error);
    }

    setInputValue('');
  };

  const fetchVideo = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: YOUTUBE_API_KEY,
          q: generatedResponse,
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What Exercise do you want to replace?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
      />
      <Button
        title='Find replacements'
        onPress={handleButtonPress}
      />
      {generatedResponse && 
        <Text style={styles.generatedResponse}>{generatedResponse}</Text>
      }

      <TouchableOpacity style={styles.button} onPress={fetchVideo}>
        <Text style={styles.buttonText}>Click to see video</Text>
      </TouchableOpacity>
      
      {showVideo && (
        <View style={styles.videoContainer}>
          <YoutubeIframe
            height={300}
            play
            videoId={videoWeShow}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop:100
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  generatedResponse: {
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default InitialDemo;
