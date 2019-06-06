describe('Landing page', function() {
	var land = require("./landingobject.js");
	var using = require('jasmine-data-provider');
	var input = require("./Registrationdatas.js");
	
	land.getURL();

	using(input.dataaccess1, function (data, description) {
	it('Posse landing page', function() {

		land.clickjoinbutton.click().then(function(){
			browser.sleep(5000);
		})

		land.createaccount.click().then(function(){
			browser.sleep(5000);
		})

		
		land.Enteremailid.sendKeys(data.Enteremailid);
		
		land.Entername.sendKeys(data.Entername);
		
		land.Enterlastname.sendKeys(data.Enterlastname);
		land.Enterpassword.sendKeys(data.Enterpassword);

		
		land.ClickSignup.click().then(function(){
			browser.sleep(5000);
		})

		
		console.log("Registration is pass");
		
	});

	});

});
