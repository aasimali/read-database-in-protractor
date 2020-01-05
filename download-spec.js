// describe('Email Testing', function () {

// 	it('should login with a registration code sent to an email', function () {
// 		browser.waitForAngularEnabled(false);
// 		browser.driver.manage().window().maximize();
// 		browser.get('');
// 		element(by.xpath("//a[text()= 'Sign in']")).click();
// 		browser.sleep(4000);
// 		element(by.id('i0116')).sendKeys("******@outlook.com");
// 		element(by.id('idSIButton9')).click();
// 		browser.sleep(4000);
// 		element(by.id('i0118')).sendKeys("*****");
// 		element(by.id('idSIButton9')).click();
// 		browser.sleep(4000);
// 		element(by.xpath("//input[@placeholder='Search']")).sendKeys("*****@gmail.com");
// 		browser.sleep(3000);
// 		element(by.xpath("//div[@class='_3VLCZTSBL_AIvpdO59LcWg']")).click();
// 		browser.sleep(3000);
// 		element(by.xpath("//span[@title='*****@gmail.com']")).click();
// 		browser.sleep(3000);
// 		element(by.xpath("//a[contains(text(),'osian')]")).getText().
// 		then(function(value){
// 			console.log("value is "+value);
// 		})
// 	})
// })




describe('MYSQL Test', function () {
	function ConnectDatabase() {
		var mysql = require("./node_modules/mysql")
		this.connection = mysql.createConnection({

			host: '85.10.205.173',
			user: 'test_account_db',
			password: '******',
			database: 'account_aasim'

		})
	}
	fit('DataBase testing in Protractor', function (done) {
		var connectDatabase = new ConnectDatabase()
		connectDatabase.connection.connect();
		var sql = 'SELECT * FROM Persons';
		connectDatabase.connection.query(sql, function (err, rows) {
			if (err) {
				console.log("custom error is "+err)
			} else {
				
				Object.keys(rows).forEach(function (keyItem) {
					var row = rows[keyItem]
					console.log(row.PersonID + " " + row.LastName)
				})
			}
			connectDatabase.connection.end()
			done()
		})
	});
});