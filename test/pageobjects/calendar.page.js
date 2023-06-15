import ZodiacPickerData from "../../constants/ZodiacPickerData"
import MockZodiacPickerData from "./mockZodiacPickerData"

class CalendarPage {

    // so this needs find the sign functionality basically
    getSwipeableDates() { return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/" }

    getSign(date) {
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
        
        if (birthDay <= numTing) {
            var signFromArr = zodiacDataVal[0][0]
            return signFromArr
        } else {
            var signFromArr = zodiacDataVal[0][1]
            return signFromArr
        }
    }

    getDatePickerSign(month, day) {
        
        var birthMonth = MockZodiacPickerData[0][month]
        var zodiacDataKey = Object.keys(birthMonth)
        var numTing = Number(zodiacDataKey[0])
        var zodiacDataVal = Object.values(birthMonth)
        
        if (day <= numTing) {
            var signFromArr = zodiacDataVal[0][0]
            return signFromArr
        } else {
            var signFromArr = zodiacDataVal[0][1]
            return signFromArr
        }
    }
}

export default new CalendarPage()