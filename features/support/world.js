const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor({ parameters }) {
        this.context = null;
        this.page = null;
    }
}

setWorldConstructor(CustomWorld);