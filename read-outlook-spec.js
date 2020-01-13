
describe("Read OTP", function () {

    it("should find the otp and store it", async function () {

        var ews = require('ews-javascript-api');
        var service = new ews.ExchangeService(ews.ExchangeVersion.Exchange2013);
        service.Credentials = new ews.ExchangeCredentials("Aasim_anwar@outlook.com", "#######");
        service.Url = new ews.Uri("https://outlook.office365.com/Ews/Exchange.asmx");
        var MailInbox = await ews.Folder.Bind(service, ews.WellKnownFolderName.Inbox);

        var view = new ews.ItemView(10);
        view.PropertySet = new ews.PropertySet(ews.BasePropertySet.FirstClassProperties);

        var mailItems = await MailInbox.FindItems("Verification token", view);
        for (let item of mailItems.Items) {
            console.log(item.Subject);
            console.log(item.DateTimeReceived.toString());
            await (item.Load(new ews.PropertySet(ews.BasePropertySet.FirstClassProperties, [ews.EmailMessageSchema.Body])))
            console.log(item.Body.Text.replace(/<\/?[^>]+(>|$)/g, ""));

            //Store this item.Body.Text in a variable and write a simple logic to get the otp and use it.
        }

    }) // end of it
}) // end of desc