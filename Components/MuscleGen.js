import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import axios from "axios";
import { Buffer } from "buffer";

global.Buffer = global.Buffer || require("buffer").Buffer;

const MuscleGroupImage = ({ muscleGroup }) => {
  const [image, setImage] = useState("");

  const fetchImage = async () => {
    try {
      console.log(muscleGroup);
      const response = await axios.get(
        `https://muscle-group-image-generator.p.rapidapi.com/getImage?muscleGroups=${muscleGroup}`,
        {
          params: {
            color: "1,228,243",
            transparentBackground: "1",
          },
          headers: {
            "X-RapidAPI-Key":
              "485940b71bmsh643dd5fbc0bef25p1b23acjsnb16aee981e44",
            "X-RapidAPI-Host": "muscle-group-image-generator.p.rapidapi.com",
          },
          responseType: "arraybuffer",
        }
      );

      const base64Image = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      setImage(base64Image);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return image ? (
    <Image
      source={{ uri: `data:image/jpeg;base64,${image}` }}
      style={{ width: "100%", height: 400 }}
      resizeMode="cover"
    />
  ) : null;
};

export default MuscleGroupImage;
