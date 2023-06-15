import zodiacJSON from "../../constants/ZodiacJSON"
import DetailsPage from "../pageobjects/details.page"

describe('these are the tests for the details page', () => {

    const exportedZodiacJSON = zodiacJSON
    const zodiacSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'] 

    it('makes sure correct data on the clicked details page loads', async () => {
        // so reads from filess
        // finds correct data
        // makes sure it loads
        const app = await $('android.widget.ScrollView') 
        
        // decide which sign to check for
        const random = Math.floor(Math.random() * 12)
        const testing = zodiacSigns[random]
        const uppercaseTesting = testing.charAt(0).toUpperCase() + testing.substring(1)

        // click
        const signImage = await $('~' + testing + ' image icon') 
        await expect(signImage).toBeExisting()
        signImage.click()

        // details page
        const headerIcon = await $('~' + testing + ' header icon')
        await expect(headerIcon).toBeExisting()

        // right name
        const zodiacHeaderName = await $('~zodiac name')
        await expect(zodiacHeaderName).toBeExisting()
        await expect(zodiacHeaderName).toHaveText(uppercaseTesting)

        const backBtn = await $('android.widget.Button')
        await expect(backBtn).toBeExisting()
        backBtn.click()
    })

    it('makes sure correct horoscope loads', async () => {
        // does api call
        // then checks against loaded

        const app = await $('android.widget.ScrollView') 
        
        // decide which sign to check for
        const random = Math.floor(Math.random() * 12)
        const testing = zodiacSigns[random]
        const uppercaseTesting = testing.charAt(0).toUpperCase() + testing.substring(1)

        // click
        const signImage = await $('~' + testing + ' image icon') 
        await expect(signImage).toBeExisting()
        const horoscope = await DetailsPage.getHoroscope(uppercaseTesting)
        signImage.click()

        console.log("testing is: ", testing)
        

        // make sure horoscope data is loaded
        // wdio intercept stuffs
        
        // it seems you can't do authorization headers in webdriver.io?
        // https://github.com/webdriverio/webdriverio/issues/6361
        // const horoscope = await DetailsPage.getHoroscope(testing)

        const pageHoroscope = await $('~horoscope')
        await expect(pageHoroscope).toBeExisting()
        console.log("horoscope from app is: ", pageHoroscope.getText())
        console.log("horoscope in this test is: ", horoscope)
        await expect(pageHoroscope).toHaveText(horoscope)
    })
})