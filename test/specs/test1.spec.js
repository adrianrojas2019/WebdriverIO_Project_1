
describe('Demo Tests', () => {

    it('My First Test', async () => {

        await browser.url('https://google.com')
        await $('[name="q"]').setValue('WebdriverIO')
        await browser.pause(2000)
        // await $('[class="FPdoLc lJ9FBc"] .gNO89b').click()
        await browser.keys('Enter')
        await browser.pause(2000)
    })

})