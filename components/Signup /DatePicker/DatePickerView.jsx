import React, {useState} from "react";
import { View, Text, Button, Pressable, SafeAreaView } from "react-native"
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import styles from "./datepickerview.styles";
import ZodiacPickerData from "../../../constants/ZodiacPickerData";

const DatePickerView = ({navigation}) => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [sign, setSign] = useState('')
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate); 
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        display: "spinner",
        is24Hour: true,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };

    const findSign = (date) => {
      var stringDate = JSON.stringify(date)

      var uh = stringDate.slice(1, 11)
      
      var newDateArr = uh.split("-")
      
      var birthMonth = newDateArr[1]
      var birthDay = newDateArr[2]

      var birthMonthMatch = newDateArr.filter(month => month == birthMonth)
      var thing = birthMonthMatch[0]
      
      var zodiacStuff = ZodiacPickerData[0][thing]
      
      var zodiacDataKey = Object.keys(zodiacStuff)
      
      var numTing = Number(zodiacDataKey[0])
      var zodiacDataVal = Object.values(zodiacStuff)
      
      // maybe this is better if called from useEffect? probably
      if (birthDay <= numTing) {
        
          var signFromArr = zodiacDataVal[0][0]
          setSign(signFromArr)
          navigation.navigate('ZodiacDetails', {
            paramKey: signFromArr
          })
      } else {
        
          var signFromArr = zodiacDataVal[0][1]
          setSign(signFromArr)
          navigation.navigate('ZodiacDetails', {
            paramKey: signFromArr
          })
      }
    }

    const buttonFunctions = () => {
      findSign(date)
    }
  
    return (

      <SafeAreaView style={styles.datePickerSafeViewContainer}>
        <View style={styles.datePickerViewContainer}>
          <Button onPress={showDatepicker} title="When is your birthday?" accessibilityLabel="showDatepickerBtn"/>
        </View>
        <View style={styles.saveBtnContainer}>
          <Pressable onPress={buttonFunctions} style={styles.saveBtn} accessibilityLabel="saveZodiacPressable">
            <Text style={styles.saveBtnText}>Save</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      
    )
}

export default DatePickerView