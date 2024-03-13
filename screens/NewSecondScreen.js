import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NewSecondScreen = ({ route, navigation }) => {
    const { inputValue } = route.params;
    const [selectedEquipment, setSelectedEquipment] = useState([]);

    const predefinedEquipment = [
        "Not Sure",
        "Full Gym Access",
        "No Equipment",
        "Dumbbells",
        "EZ Curl Bar",
        "Resistance Band",
        "Pull Up Bar",
        "Exercise Ball",
        "Barbell",
        "Kettle Bell",
        "Step"
    ];

    const handleEquipmentSelection = (equipment) => {
        if (selectedEquipment.includes(equipment)) {
            setSelectedEquipment(selectedEquipment.filter(item => item !== equipment));
        } else {
            setSelectedEquipment([...selectedEquipment, equipment]);
        }
    };

    const handleNext = () => {
        navigation.navigate('Results', { selectedEquipment, inputValue });
    };

    const equipmentNames = predefinedEquipment.map((name, index) => (
        <TouchableOpacity
            key={index}
            style={[
                styles.item,
                selectedEquipment.includes(name) && styles.selectedItem, // Apply selected style conditionally
            ]}
            onPress={() => handleEquipmentSelection(name)}
        >
            <Text style={styles.itemText}>{name}</Text>
        </TouchableOpacity>
    ));

    return (
        <LinearGradient
            colors={['#293236', '#293236', '#293236']}
            style={styles.gradient}
        >
            <StatusBar backgroundColor="#293236" barStyle="light-content" />
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.h1}>
                            What equipment is available for you to use? We'll suggest exercises based on what you select.
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        {equipmentNames}
                    </View>
                </ScrollView>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={[styles.button, selectedEquipment.length > 0 && styles.buttonFocused]} onPress={handleNext}>
                        <Text style={styles.buttonText}>Find Substitute</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,       
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        height: 80,
        backgroundColor: '#293236'
    },
    h1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
        textAlign: 'left',
        padding: 10,
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
    },
    item: {
        height: 140,
        width: 150,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 11,
        backgroundColor: '#01E4F310',
        borderColor: 'white',
        borderRadius: 8,
    },
    selectedItem: {
        height: 140,
        width: 150,
        borderWidth: 1.5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 11,
        backgroundColor: '#01E4F318',
        borderColor: '#01E4F3',
        borderRadius: 8,
    },
    itemText: {
        position: 'relative',
        top: 20,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#028B94',
        width: 350,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
    },
    buttonFocused: {
        backgroundColor: '#01E4F3',
    },
    buttonText: {
        color: '#293236',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default NewSecondScreen;