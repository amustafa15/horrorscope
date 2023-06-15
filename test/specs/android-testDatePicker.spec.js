import ZodiacPickerData from "../../constants/ZodiacPickerData"
import CalendarPage from "../pageobjects/calendar.page"
import React from "react"

describe('the date time picker page tests', async() => {

    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    const ReturnMockDateTimePicker = async ({time}) => {

        const showMode = (currentMode) => {
            DateTimePickerAndroid.open({
              value: time,
              onChange,
              mode: currentMode,
              display: "spinner",
              is24Hour: true,
            });
          };

        const showDatepicker = () => {
            showMode('date');
          };

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

    it('test cancel button', async () => {
        // const app = await $('android.widget.ScrollView')
        // const signUpBtn = await $('~SignUpBtn')
        // // await expect(signUpBtn).toBeExisting()
        // signUpBtn.click()

        
        const showDatepickerBtn = await $('~showDatepickerBtn')
        await expect(showDatepickerBtn).toBeExisting()
        showDatepickerBtn.click()

        const datePicker = await $('android.widget.DatePicker')
        await expect(datePicker).toBeExisting()
        const cancelBtn = await $('//android.widget.LinearLayout/android.widget.Button[1]')
        await expect(cancelBtn).toBeExisting()
        await expect(cancelBtn).toHaveText('CANCEL')

        await cancelBtn.click()

        const backBtn = await $('~Navigate up')
        await expect(backBtn).toBeExisting()
        backBtn.click()
        
        await expect(signUpBtn).toBeExisting()
    })

    it('test setDate with current date', async () => {
        const app = await $('android.widget.ScrollView')
        const signUpBtn = await $('~SignUpBtn')
        // await expect(signUpBtn).toBeExisting()
        signUpBtn.click()

        const showDatepickerBtn = await $('~showDatepickerBtn')
        await expect(showDatepickerBtn).toBeExisting()
        showDatepickerBtn.click()

        const datePicker = await $('android.widget.DatePicker')
        await expect(datePicker).toBeExisting()
        const okBtn = await $('//android.widget.LinearLayout/android.widget.Button[2]')

        await expect(okBtn).toBeExisting()
        okBtn.click()

        const todaysZodiac = CalendarPage.getSign(new Date())
        const savePressable = await $('~saveZodiacPressable')
        await expect(savePressable).toBeExisting()
        savePressable.click()

        // right name
        const zodiacHeaderName = await $('~zodiac name')
        await expect(zodiacHeaderName).toBeExisting()
        await expect(zodiacHeaderName).toHaveText(todaysZodiac)

        const backBtn = await $('android.widget.Button')
        await expect(backBtn).toBeExisting()
        backBtn.click()

        await expect(signUpBtn).toBeExisting()
    })

    it('test setDate with random date', async () => {
        // const app = await $('android.widget.ScrollView')
        // const signUpBtn = await $('~SignUpBtn')
        // await expect(signUpBtn).toBeExisting()
        // signUpBtn.click()

        var dTPComponent = await render(<ReturnMockDateTimePicker value={new Date()}/>)

        await expect(dTPComponent).toBeExisting()
        const showDatepickerBtn = await $('~showDatepickerBtn')
        await expect(showDatepickerBtn).toBeExisting()
        showDatepickerBtn.click()

        const datePicker = await $('android.widget.DatePicker')
        await expect(datePicker).toBeExisting()
        const month = await $('//android.widget.NumberPicker[1]/android.widget.EditText')

        var random = Math.floor(Math.random() * 12)
        await expect(month).toBeExisting()
        await month.click()
        month.setValue(months[random])

        var random1 = Math.floor(Math.random() * 28) + 1
        const day = await $('//android.widget.NumberPicker[2]/android.widget.EditText')
        await expect(day).toBeExisting()
        await day.click()
        day.setValue(random1)

        const expectedSign = await CalendarPage.getDatePickerSign(months[random], random1)

        const okBtn = await $('//android.widget.LinearLayout/android.widget.Button[2]')
        await expect(okBtn).toBeExisting()
        okBtn.click()

        const savePressable = await $('~saveZodiacPressable')
        await expect(savePressable).toBeExisting()
        savePressable.click()

        // right name
        const zodiacHeaderName = await $('~zodiac name')
        await expect(zodiacHeaderName).toBeExisting()
        await expect(zodiacHeaderName).toHaveText(expectedSign)
    })
})