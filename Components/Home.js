import React from 'react';
import { Text, View, TouchableOpacity,Image, ImageBackground } from 'react-native';

export default function Home() {
    const handlePress = () => {
        console.log('Button pressed!');
      };
    
      const PushImage = require('../assets/PushDayWorkout.png');
      const LegImage = require('../assets/LegWorkout.png');
      const PullImage = require('../assets/PullWorkout.png');
      const ArmImage = require('../assets/ArmWorkout.png');
      const CoreImage = require('../assets/CoreWorkout.jpeg');

      const scheduleIcon = require('../assets/ScheduleIcon.png');
      const ProfileIcon = require('../assets/ProfileIcon.png');
      const TaskIcon = require('../assets/TaskIcon.png');
  return (
      <View style={{ flex: 1, justifyContent: 'center' }}>

        <View style={{flexDirection: 'row', justifyContent:'center'}}> 
          <TouchableOpacity onPress={handlePress} style={{ width: 100,bottom:20}}>
              <Image source={scheduleIcon} style={{width: 40,height: 40}}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress} style={{ width: 80,bottom:20}}>
            <Image source={ProfileIcon} style={{width: 40,height: 40,left:10,right:10}}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress} style={{ width: 80, bottom:20}}>
            <Image source={TaskIcon} style={{left:30,width: 40,height: 40}}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handlePress} style={{ width: 450, height: 100, position: 'top' }}>
          <ImageBackground onPress={handlePress} source={PushImage} style={{width: 450,height: 100, position:"top"}}>
            <Text style={{fontSize:30,top:15,left:15}}>Push Workout</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={{height:10}}></View>
        
        <TouchableOpacity onPress={handlePress} style={{ width: 450, height: 100, position: 'top' }}>
          <ImageBackground source={PullImage} style={{width: 450,height: 100, position:"top"}}>
            <Text style={{fontSize:30,top:15,left:15}}>Pull Workout</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={{height:10}}></View>
        
        <TouchableOpacity onPress={handlePress} style={{ width: 450, height: 100, position: 'top' }}>
          <ImageBackground source={LegImage} style={{width: 450,height: 100, position:"top"}}>
            <Text style={{fontSize:30,top:15,left:15}}>Leg Workout</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={{height:10}}></View>
        
        <TouchableOpacity onPress={handlePress} style={{ width: 450, height: 100, position: 'top' }}>
          <ImageBackground source={ArmImage} style={{width: 450,height: 100, position:"top"}}>
            <Text style={{fontSize:30,top:15,left:15}}>Arm Workout</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={{height:10}}></View>
        
        <TouchableOpacity onPress={handlePress} style={{ width: 450, height: 100, position: 'top' }}>
          <ImageBackground source={CoreImage} style={{width: 450,height: 100, position:"top"}}>
            <Text style={{fontSize:30,top:15,left:15}}>Core Workout</Text>
          </ImageBackground>
        </TouchableOpacity>

      </View>
  )
}
