import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonPress = () => {
        navigation.navigate('SecondScreen', { inputValue });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                onChangeText={setInputValue}
                value={inputValue}
                placeholder="Search..."
                style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: '80%' }}
            />
            <TouchableOpacity
                onPress={handleButtonPress}
                style={{ backgroundColor: 'blue', padding: 10 }}
                disabled={!inputValue.trim()}
            >
                <Text style={{ color: 'white' }}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchScreen;
