import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NewSecondScreen = ({ route, navigation }) => {
    const { inputValue } = route.params;
    const [selectedEquipment, setSelectedEquipment] = useState([]);

    const predefinedEquipment = [
        { name: "Not Sure", iconGray: require('../assets/QuestionMark_Gray.png'), iconBlue: require('../assets/QuestionMark_Blue.png') },
        { name: "Full Gym Access", iconGray: require('../assets/GymAccess_Gray.png'), iconBlue: require('../assets/GymAccess_Blue.png') },
        { name: "No Equipment", iconGray: require('../assets/NoEquipment_Gray.png'), iconBlue: require('../assets/NoEquipment_Blue.png') },
        { name: "Dumbbells", iconGray: require('../assets/Dumbbell_Gray.png'), iconBlue: require('../assets/Dumbbell_Blue.png') },
        { name: "EZ Curl Bar", iconGray: require('../assets/EZCurlBar_Gray.png'), iconBlue: require('../assets/EZCurlBar_Blue.png') },
        { name: "Resistance Band", iconGray: require('../assets/ResistanceBand_Gray.png'), iconBlue: require('../assets/ResistanceBand_Blue.png') },
        { name: "Pull Up Bar", iconGray: require('../assets/PullUpBar_Gray.png'), iconBlue: require('../assets/PullUpBar_Blue.png') },
        { name: "Exercise Ball", iconGray: require('../assets/ExerciseBall_Gray.png'), iconBlue: require('../assets/ExerciseBall_Blue.png') },
        { name: "Bench", iconGray: require('../assets/Bench_Gray.png'), iconBlue: require('../assets/Bench_Blue.png') },
        { name: "Barbell", iconGray: require('../assets/Barbell_Gray.png'), iconBlue: require('../assets/Barbell_Blue.png') },
        { name: "Kettle Bell", iconGray: require('../assets/Kettlebell_Gray.png'), iconBlue: require('../assets/Kettlebell_Blue.png') },
        { name: "Step", iconGray: require('../assets/Step_Gray.png'), iconBlue: require('../assets/Step_Blue.png') },
    ];

    const handleEquipmentSelection = (equipment) => {
        if (selectedEquipment.includes(equipment)) {
            setSelectedEquipment(selectedEquipment.filter(item => item !== equipment));
        } else {
            setSelectedEquipment([...selectedEquipment, equipment]);
        }
    };

    const handleNext = () => {
        if (selectedEquipment.length > 0) {
            navigation.navigate('ThirdScreen', { selectedEquipment, inputValue });
        }
    };

    const equipmentNames = predefinedEquipment.map((item, index) => {
        const isSelected = selectedEquipment.includes(item.name);
        const iconSource = isSelected ? item.iconBlue : item.iconGray;

        return (
            <TouchableOpacity
                key={index}
                style={[
                    styles.item,
                    isSelected && styles.selectedItem,
                ]}
                onPress={() => handleEquipmentSelection(item.name)}
            >
                <View style={styles.itemContent}>
                    <Image source={iconSource} style={styles.icon} />
                    <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    });

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
                    <TouchableOpacity style={[styles.button, selectedEquipment.length > 0 ? styles.buttonFocused : styles.buttonDisabled]} onPress={handleNext} disabled={selectedEquipment.length === 0}>
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
        paddingHorizontal: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingBottom: 100,
        width: 350,
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
        flexGrow: 1,
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
    selectedItemText: {
        color: '#01E4F3',
    },
    itemText: {
        position: 'relative',
        top: 20,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    itemContent: {
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    button: {
        position: 'absolute',
        marginTop: 10,
        alignSelf: 'center',
        width: 350,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
    },
    buttonFocused: {
        backgroundColor: '#01E4F3',
    },
    buttonDisabled: {
        backgroundColor: '#028B94',
    },
    buttonText: {
        color: '#293236',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default NewSecondScreen;
