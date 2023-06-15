import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./zodiacheader.styles";
import HomePageIcons from "../../../constants/HomePageIcons";

const ZodiacHeader = ({zodiacData, zodiac}) => {

    var accessibilityLabelZodiac = zodiac

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={{ height: 115, width: 115}}
                    source={HomePageIcons[0][zodiac.toLowerCase()].uri}
                    accessibilityLabel={zodiacData.name.toLowerCase() + ' header icon'}
                />
            </View>
            <View style={styles.detailsContainer}>
                <Text accessibilityLabel="zodiac name">{zodiacData.name}</Text>
                <Text>{zodiacData.date_range}</Text>
                <Text>Symbol: {zodiacData.symbol}</Text>
                <Text>Element: {zodiacData.element}</Text>
                <Text>Planet: {zodiacData.ruling_planet}</Text>
            </View>
        </View>
    )
}

export default ZodiacHeader