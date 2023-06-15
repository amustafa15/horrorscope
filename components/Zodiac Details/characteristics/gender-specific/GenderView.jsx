import React from "react";
import { View, Text } from "react-native";

const GenderView = ({ gender }) => {

    return (
        <View>
            <Text>{gender}</Text>
        </View>
    )
}

export default GenderView