class LoginPage {

    /**
     * define selectors using getter methods
     */
    get usernameTextbox () {
        return $('#username');
    }

    get passwordTextbox () {
        return $('#password');
    }

    get loginButton () {
        return $('button[type="submit"]');
    }

    get loginMessage() {
        return $('#flash')
    }

    async login (userName, password) {
        await this.usernameTextbox.setValue(userName)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()
    }

    async checkMessage(msg) {
        await expect(this.loginMessage).toHaveTextContaining(msg)
    }
}
module.exports = new LoginPage()