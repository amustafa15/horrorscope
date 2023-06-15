import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import HomePageIcons from '../../constants/HomePageIcons'

const HomePageIcon = ({zodiacSign, handleNavigate}) => {

    var logo = zodiacSign.toLowerCase()

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableOpacity onPress={handleNavigate} accessibilityLabel={HomePageIcons[0][logo].imgName + ' image icon'}>
                <Image 
                    style={{justifyContent: 'center', alignItems: 'center', height: 115, width: 115}}
                    source={HomePageIcons[0][logo].uri}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HomePageIcon