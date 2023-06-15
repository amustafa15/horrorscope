import React from "react";
import {Text, View, Pressable} from "react-native";

import styles from "./signupbutton.styles";

const SignupButton = ({handleNavigate}) => {

    return (
        <View>
            <Pressable onPress={handleNavigate} style={styles.button} accessibilityLabel="SignUpBtn">
                <Text style={styles.btnText}>What's My Sign?</Text>
            </Pressable>
        </View>
    )
}

export default SignupButton