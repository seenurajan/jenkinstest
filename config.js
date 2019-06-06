var Jasmine2HtmlReporter1 = require('protractor-jasmine2-html-reporter');
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub', //direce connect without start server
  specs: ['Landing.js'],
  
//  capabilities:{
//  'browserName':'firefox' 
//  },
  
  onPrepare : function(){
		
		browser.driver.manage().window().maximize();
		//browser.waitForAngularEnabled(false);
		jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter1({
			        savePath: 'target/screenshots'
			        })
			      );
 
  },
  
  suites :
  {
    Smoke : 'Login.js' 
    
  },
  
jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
