function login1 (){
	//Login page
	this.clickjoinbutton1 = element(by.css("a[href*='signin'"));	
	this.Enteremail = element(by.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/form[1]/input[1]"));
	this.Enterpassword = element(by.xpath("//input[@type='password']"));
	this.signin = element(by.css("[type='submit']"));
	
	this.getURL = function() {
		browser.get('http://posse.com/signin');
			};	
		};

module.exports = new login1();