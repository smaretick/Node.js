var webdriver = require('selenium-webdriver');
// Input capabilities
var capabilities = {
 'os_version' : 'High Sierra',
 'resolution' : '1920x1080',
 'browserName' : 'Firefox',
 'browser_version' : '70.0',
 'os' : 'OS X',
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