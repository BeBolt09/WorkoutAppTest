import { View, Text, TextInput, Button,TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import axios from 'axios';
import YoutubeIframe from 'react-native-youtube-iframe';

const GetTitle = () => {
  const [inputValue, setInputValue] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
  const [videoWeShow, setVideo] = useState(null);
  const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
  const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;

  const handleButtonPress = () => {
    // Do something with the input value, for now, let's just log it
    console.log("Input value:", inputValue);
    async function run() {
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
          { text: `What is a good replacement exercise for ${inputValue}, Once you have found a good exercise to replace that. You will find a youtube video tittle of a youtube video that explains how to do that exercise and give me that tittle. DO NO GIVE ME ANYTHING OTEHR THAN THAT TITTLE` },
        ];
        const result = await model.generateContent({
          contents: [{ role: "user", parts }],
          generationConfig,
          safetySettings,
        });
        const response = result.response;
        setGeneratedResponse(response.text());
      }
      run();

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
        setShowVideo(!showVideo);
      }
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  return (
    <View style={{ top: 100 }}>
      <Text>What Exercises do you want to replace</Text>
      <TextInput
        style={{ top: 0, borderWidth: 1, height: 30, width: 100 }}
        onChangeText={setInputValue}
        value={inputValue}
      />
      <Button
        title='Find replacements'
        onPress={handleButtonPress}
      />
      {generatedResponse && 
      <Text>{generatedResponse}</Text>
      }

        <TouchableOpacity style={{ top: 300 }} onPress={fetchVideo}>
            <Text>Click to see video</Text>
        </TouchableOpacity>
        {showVideo && (
        <View style={{ height: 300, top: 300 }}>
          <YoutubeIframe
            height={600}
            play
            videoId={videoWeShow} // Use videoWeShow state here
          />
        </View>
      )}
    </View>
  );
};

export default GetTitle;