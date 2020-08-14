var webdriver = require('selenium-webdriver');
// Input capabilities
var capabilities = {
 'device' : 'iPhone 11',
 'realMobile' : 'true',
 'os_version' : '13.0',
 'browserstack.user' : 'scottmaretick2',
 'browserstack.key' : 'MDKicy4nya2192zewKpz'
}
var driver = new webdriver.Builder().usingServer('https://hub-cloud.browserstack.com/wd/hub').
withCapabilities(capabilities).build();
driver.get('https://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
}); 
