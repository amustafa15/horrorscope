import React, {useState} from "react";
import {SafeAreaView, TextInputFocusEventData, Switch, Text, View} from "react-native";

import styles from "./characteristics.styles";
import GenderView from "./gender-specific/GenderView";

const Characteristics = ({zodiacData, horoscopeData}) => {

    const [isEnabled, setEnabled] = useState(false)

    const toggleSwitch = () => setEnabled(previousState => !previousState)

    function addToAbout(about) {
        var newAbout = about
        var newAboutArr = newAbout.split('.')
        // return newAboutArr[2]
        return newAbout
    }

    return (
        <SafeAreaView>
            <Text>{zodiacData.name}'s horoscope: </Text>
            <Text accessibilityLabel="horoscope">{horoscopeData}</Text>
            <Text>{zodiacData.name} Characteristics</Text>
            <Text></Text>
            <Text>About: </Text>
            <Text>{addToAbout(zodiacData.about)}</Text>
            <Text></Text>
            <Text>Career: </Text>
            <Text>{zodiacData.career}</Text>
            <Text></Text>
            <Text>Health: </Text>
            <Text>{zodiacData.health}</Text>
            <Text></Text>
            <Text>Love: </Text>
            <Text>{zodiacData.love}</Text>
            <Text></Text>
            <Text>Relationships: </Text>
            <Text>{zodiacData.relationship}</Text>
            <Text></Text>
            <Text>Nature: </Text>
            <Text>{zodiacData.nature}</Text>
            <Text></Text>
            <Text>Strengths: </Text>
            <Text>{zodiacData.strengths}</Text>
            <Text></Text>
            <Text>Weaknesses: </Text>
            <Text>{zodiacData.weaknesses}</Text>
            <Text></Text>
            <Switch 
                trackColor={{false: '#fff', true: '#000'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
               { isEnabled ? 
                <View>
                    <Text>Men</Text>
                    <GenderView gender={zodiacData.man} />
                </View> : 
                <View>
                    <Text>Women</Text>
                    <GenderView gender={zodiacData.woman} />
                </View>
            }
            
        </SafeAreaView>
    )
}

export default Characteristics