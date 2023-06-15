import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from "../Homescreen/Homescreen";
import ZodiacDetails from "../Zodiac Details/[id]";
import SignupButton from "../Signup Button/SignupButton"
import DatePickerView from "../Signup /DatePicker/DatePickerView"
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
            <Stack.Navigator>

                <Stack.Screen 
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: 'Welcome',
                        headerShown: false
                        // shouldn't be shown but hiding it moves up tab bar
                        // need to set tab view margins and such
                    }}
                />
                <Stack.Screen 
                    name="ZodiacDetails"
                    component={ZodiacDetails}
                    options={{
                        title: 'henlo'
                    }}
                />
                <Stack.Screen 
                    name="SignupButton"
                    component={SignupButton}
                    options={{title: 'okay'}}
                />
                <Stack.Screen
                    name="DatePickerView"
                    component={DatePickerView}
                    options={{title: '!'}}
                />
            </Stack.Navigator>
    )
}

export default MyStack;