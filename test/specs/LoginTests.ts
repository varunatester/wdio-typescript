
import {BaseTests} from './BaseTests';

describe('AutomationPractice page for testing',()=>{
    it('should have the right title', () => {
        new BaseTests().navigateToHomePage().assertTitle(browser.getTitle());
    })
});
