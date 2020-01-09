
describe('Read data from MySQL', function () {
	function ConnectDatabase() {
		var mysql = require("./node_modules/mysql")
		this.connection = mysql.createConnection({

			host: '85.10.205.173',
			user: 'test_account_db',
			password: '******',
			database: 'account_aasim'

		})
	}
	it('should be able to fetch the data from mysql', function (done) {
		var connectDatabase = new ConnectDatabase()
		connectDatabase.connection.connect();
		var sql = 'SELECT * FROM Persons';
		connectDatabase.connection.query(sql, function (err, rows) {
			if (err) {
				console.log("custom error is " + err)
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

















//__________________________________________________________________

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

	// var ibmdb = require('ibm_db');

	// ibmdb.open("DATABASE=<BLUDB;HOSTNAME=dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net;UID=hxq19960;PWD=#####-d5;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
	//   console.log("1")
	// 	if (err) return console.log(err);

	//   conn.query('select * from Persons', function (err, data) {
	// 	if (err) console.log(err);
	// 	else console.log("error data is "+data);

	// 	conn.close(function () {
	// 	  console.log('correct done '+data);
	// 	});
	//   });
// 	// });
// 	var ibmdb = require("ibm_db"),
//     connString = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=hxq19960;PWD=#####-d5;";
//  console.log("1")
// try {
//       var option = { connectTimeout : 80, systemNaming : true };// Connection Timeout after 40 seconds.
// 	  var conn = ibmdb.openSync(connString, option);
// 	  console.log("2")
//       conn.query("CREATE TABLE testDB;", function (err, rows) {
// 		console.log("3")
//         if (err) {
//             console.log(err);
//         } else {
//           console.log(rows);
//         }
//         conn.close();	
//       });
//     } catch (e) {
//       console.log(e.message);
//     }

// const EWS = require('node-ews');

// // exchange server connection info
// const ewsConfig = {
//   username: 'aasim_anwar@outlook.com',
//   password: '**********',
//   host: 'https://outlook.office365.com',
//   auth: 'basic'
// };

// // initialize node-ews
// const ews = new EWS(ewsConfig);

// // define ews api function
// const ewsFunction = 'ExpandDL';

// // define ews api function args
// const ewsArgs = {

//   'Mailbox': {

//     'EmailAddress':'aasim_anwar@outlook.com'
//   }
// };
// console.log("1")
// // query EWS and print resulting JSON to console
// ews.run(ewsFunction, ewsArgs)
//   .then(result => {
//     console.log(JSON.stringify(result));
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// var ews = require("ews-javascript-api");
// var ewsAuth = require("ews-javascript-api-auth");
// ews.ConfigurationApi.ConfigureXHR(new ewsAuth.cookieAuthXhrApi(credentials., credentials.));


// console.log("end of it")
// })

// console.log("end of des")
// })