import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import axios from 'axios'; // Import Axios properly

export default function App() {
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [videoWeShow, setVideo] = useState(null);

  const handleShowVideo = () => {
    AiExercises();
  };

  const AiExercises = () => {
    async function run() {
      const genAI = new GoogleGenerativeAI('AIzaSyA_dw6uJmAVV1gd2Ta1JCtU7ciOA7vIZs0');
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
        { text: `Find the title of 1 youtube video that explains biceps curls, Don't give me anything other than that one title` },
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
    setShowVideo(!showVideo);
  }

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            key: "AIzaSyBJEMszIiajj10X8ZyhQ8nb6LbUBjCmfBY",
            q: generatedResponse,
            part: 'snippet',
            maxResults: 1,
            type: 'video'
          }
        });
        if (response.data.items.length > 0) {
          const selectedVideo = response.data.items[0];
          setVideo(selectedVideo.id.videoId);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };
    fetchVideo();
  }, [generatedResponse]); // Include generatedResponse in the dependency array

  return (
    <View>
      <TouchableOpacity style={{ top: 300 }} onPress={handleShowVideo}>
        <Text>Click to see video</Text>
      </TouchableOpacity>
      <Text style={{ top: 300 }}>{generatedResponse}</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
