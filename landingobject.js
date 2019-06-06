function login (){
    //Landing page
	this.clickjoinbutton = element(by.css("a[href*='signin'"));
	this.createaccount = element(by.xpath("//a[contains(text(),'Create an account ›')]")); 
	this.Enteremailid = element(by.name("email"));
	this.Entername = element(by.name("firstName"));
	this.Enterlastname = element(by.xpath("//input[@class='ps-placeholder-front ng-pristine ng-valid ps-no-text']"));
	this.Enterpassword = element(by.name("password"));
	this.ClickSignup = element(by.css("input[class='submit']"));	
	this.getURL = function() {
		browser.get('http://posse.com/');
		};
   };
module.exports = new login();












