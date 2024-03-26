import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import axios from 'axios';
import { Buffer } from 'buffer';


global.Buffer = global.Buffer || require('buffer').Buffer;

const MuscleGroupImage = () => {
  const [image, setImage] = useState('');

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        'https://muscle-group-image-generator.p.rapidapi.com/getMulticolorImage',
        {
          params: {
            primaryColor: '1,228,243', // Adjust primary color as needed
            secondaryColor: '28,108,128', // Adjust secondary color as needed
            primaryMuscleGroups: 'chest', // Adjust primary muscle group as needed
            secondaryMuscleGroups: 'triceps,shoulders', // Adjust secondary muscle groups as needed
            transparentBackground: '1', // Set to '1' for transparent background
          },
          headers: {
            
            'X-RapidAPI-Key': '485940b71bmsh643dd5fbc0bef25p1b23acjsnb16aee981e44',
            'X-RapidAPI-Host': 'muscle-group-image-generator.p.rapidapi.com',
          },
          responseType: 'arraybuffer',
        }
      );

      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      setImage(base64Image);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return image ? (
    <View>
      <Image
        source={{ uri: `data:image/jpeg;base64,${image}` }}
        style={{ width: 400, height: 400}}
        resizeMode="contain"
      />
    </View>
  ) : null;
};

export default MuscleGroupImage;
