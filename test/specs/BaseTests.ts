const assert = require('assert');
export class BaseTests {

    before(): any {
        browser.url('http://automationpractice.com/index.php');
    }

    navigateToHomePage(){
        browser.url('http://automationpractice.com/index.php');
        return this;
    }

    assertTitle(actualTitle:string) {
        assert.equal(actualTitle,'My Store');
    }
}

