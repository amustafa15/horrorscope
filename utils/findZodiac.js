import ZodiacPickerData from "../constants/ZodiacPickerData";
import React, {useState} from "react";

const findZodiac = () => {
// date passed by date picker

    const [sign, setSign] = useState('')

    const findSign = (date) => {
        var newDateArr = date.split(" ")
        var birthMonth = newDateArr[0]
        var birthDay = newDateArr[1]

        // use a .filter(() => {}) function
        // then compare to newDate[0]
        // then compare to newDate[1]
        // 
        // then set that sign
        // then save to profile
        // so have to create profile then save data to it
        // how to create profile?

        var birthMonthMatch = newDateArr.filter(month => birthMonth == month)
        if (birthDay <= birthMonthMatch[0]) {
            console.log("sign in if is: ", birthMonthMatch[0][0])
        } else {
            console.log("sign in else is: ", birthMonthMatch[0][1])
        }
    }
}

export default { findSign }