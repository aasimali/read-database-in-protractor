
exports.config = {

	directConnect: true,

	/*
	capabilities: {
	browserName: 'chrome',
	//chromedriverVersion: '2.46',
	chromeOptions: {

        //args: ["--headless", "--disable-gpu", "--window-size=1280,1024","--disable-web-security","--no-sandbox","--incognito"],
        prefs: {    
            'download.default_directory': '/home/ttpllt21/Desktop/download',
            'download.prompt_for_download':false,
            'download.directory_upgrade':true,
            "safebrowsing.enabled":false,
            "safebrowsing.disable_download_protection":true
          }
    }
},
	*/

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			prefs: {
				'enableNetwork': true,
				'enablePage': false,
				'enableTimeline': false
			}
		},
		loggingPrefs: {
			performance: 'ALL',
			browser: 'ALL'
		}
	},

	framework: 'jasmine',

	suites: {
		smoke: ['./download-spec.js']
	},

	//specs: ['./download-spec.js'],

	baseUrl: 'https://outlook.live.com/owa/',

	jasmineNodeOpts: {
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 1440000000
	},
	// onPrepare: function() {
	// browser.driver.manage().window().maximize();
	// },

	// onPrepare: function () {
	// 	var MailListener = require("mail-listener2");

	// 	// here goes your email connection configuration
	// 	var mailListener = new MailListener({
	// 		username: "rocksaasim@gmail.com",
	// 		password: "Aasim_ali92",
	// 		host: "imap.gmail.com",
	// 		port: 993, // imap port 
	// 		tls: true,
	// 		tlsOptions: { rejectUnauthorized: false },
	// 		mailbox: "INBOX", // mailbox to monitor 
	// 		searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved 
	// 		markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
	// 		fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
	// 		mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib. 
	// 		attachments: true, // download attachments as they are encountered to the project directory 
	// 		attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
	// 	});

	// 	mailListener.start();

	// 	mailListener.on("server:connected", function () {
	// 		console.log("Mail listener initialized");
	// 	});

	// 	global.mailListener = mailListener;
	// },

	// onCleanUp: function () {
	// 	mailListener.stop();
	// },

}
