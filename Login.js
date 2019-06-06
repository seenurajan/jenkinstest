describe('Login page', function() {
	
	var login = require("./loginobjects.js");	
	var using = require('jasmine-data-provider');
	var input = require("./logindataprovider.js");
	login.getURL();
	
	using(input.logindataaccess, function (data, description) {
	it('Posse login page', function() {
		
    login.clickjoinbutton1.click().then (function(){
    	browser.sleep(9000);
 
    });
		
	login.Enteremail.sendKeys(data.Enteremail);
	
	login.Enterpassword.sendKeys(data.Enterpassword);
	
	login.signin.click().then (function(){
    	browser.sleep(9000);
    });	
	
	browser.driver.navigate().back();
	});
	
	});
});


