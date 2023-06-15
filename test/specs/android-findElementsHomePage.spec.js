describe('these are the tests to find elements on the home page', () => {

    const zodiacSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
    // const btnID = ''

    // use async?
    it('Find sign icon on the first page w/ accessibility id', async () => {
        const app = await $('android.widget.ScrollView')

        // decide which sign to check for
        const random = Math.floor(Math.random() * 12)
        const testing = zodiacSigns[random]

        // assertion
        const signImage = await $('~' + testing + ' image icon')
        await expect(signImage).toBeExisting()
    })

    it('Find whats your birthday button w/ accessibility id', async() => {
        const app = await $('android.widget.ScrollView')

        // find it
        const signUpBtn = await $('~SignUpBtn')

        // assertion
        await expect(signUpBtn).toBeExisting()
    })
})