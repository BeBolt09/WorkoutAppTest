import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function Settings() {
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [profile, setProfile] = useState({
    height: '',
    weight: '',
    age: '',
    gender: '',
    experienceLevel: '',
  });

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setSavedProfiles([...savedProfiles, profile]);
    setProfile({ // Reset profile state to empty object
      height: '',
      weight: '',
      age: '',
      gender: '',
      experienceLevel: '',
    });
    console.log('Profile saved:', profile); // For demonstration purposes
  };

  const renderProfile = ({ item, index }) => {
    const profileNumber = index + 1;
    const { height, weight, age, gender, experienceLevel } = item;

    return (
      <View style={{ margin: 10, borderWidth: 1, padding: 10 }}>
        <Text>Profile {profileNumber}</Text>
        <Text>Height: {height} ft.</Text>
        <Text>Weight: {weight} lbs.</Text>
        <Text>Age: {age}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Experience Level: {experienceLevel}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ flexDirection: 'row', justifyContent: 'flex', height: 40, width: 160, margin: 12, borderWidth: 1, padding: 10, textAlign: 'center' }}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Height"
          keyboardType="numeric"
          value={profile.height}
          onChangeText={(text) => handleChange('height', text)}
        />
        <Text style={{ justifyContent: 'flex-end' }}>ft.</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent: 'flex',height: 40,width:160 ,margin: 12,borderWidth: 1,padding: 10, textAlign:'center'}}>
        <TextInput style={{ flex: 1 }}
        placeholder="Weight"
        keyboardType="numeric"
        value={profile.weight}
        onChangeText={(text) => handleChange('weight', text)}
        />
        <Text style={{justifyContent:'flex-end'}}>lbs.</Text>
      </View>

        <View style={{flexDirection:'row',justifyContent: 'flex',height: 40,width:160 ,margin: 12,borderWidth: 1,padding: 10, textAlign:'center'}}>
        <TextInput style={{ flex: 1 }}
        placeholder="Age"
        keyboardType="numeric"
        value={profile.age}
        onChangeText={(text) => handleChange('age', text)}
        />
        </View>

        <View style={{flexDirection:'row',justifyContent: 'flex',height: 40,width:160 ,margin: 12,borderWidth: 1,padding: 10, textAlign:'center'}}>
        <TextInput style={{ flex: 1 }}
        placeholder="Gender"
        value={profile.gender}
        onChangeText={(text) => handleChange('gender', text)}
        />
        </View>

        <View style={{flexDirection:'row',justifyContent: 'flex',height: 40,width:160 ,margin: 12,borderWidth: 1,padding: 10, textAlign:'center'}}>
        <TextInput style={{ flex: 1 }}
        placeholder="Experience Level"
        value={profile.experienceLevel}
        onChangeText={(text) => handleChange('experienceLevel', text)}
        />
        </View>


        <Button title="Save" onPress={handleSave} />

        {savedProfiles.length > 0 && ( // Check if there are profiles
        <FlatList
          data={savedProfiles}
          renderItem={renderProfile}
          keyExtractor={(item) => item.name || `${Math.random()}`} // Unique key for each item
        />
      )}
    </View>
  )
}