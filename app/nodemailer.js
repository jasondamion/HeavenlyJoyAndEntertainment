var nodemailer = require("nodemailer");

console.log("Connected");

  var mailer = {
    reserve(gender1, guardianName1, childName1, phone1, address1, email1, childBday1, event1, age1, package1, theme1, packagePrice1, addOnPrice1, totalPrice1, deposit1) {

      
      var gender = "<h1>Gender: " + gender1 + "</h1>";
      var guardianName = "<h1>Guardian Name: " + guardianName1 + "</h1>";
      var childName = "<h1>Child Name: " + childName1 + "</h1>";
      var phone = "<h1>Phone: " + phone1 + "</h1>";
      var address = "<h1>Address: " + address1 + "</h1>";
      var email = "<h1>Email: " + email1 + "</h1>";
      var childBday = "<h1>Child Birthday: " + childBday1 + "</h1>";
      var event = "<h1>Event Date: " + event1 + "</h1>";
      var age = "<h1>Age: " + age1 + "</h1>";
      var package = "<h1>Package Chosen: " + package1 + "</h1>";
      var theme = "<h1>Theme: " + theme1 + "</h1>";
      var packagePrice = "<h1>Package Price: " + "$" + packagePrice1 + "</h1>";
      var addOnPrice = "<h1>Add-On Price: " + "$" + addOnPrice1 + "</h1>";
      var totalPrice = "<h1>Total Price: " + "$" + totalPrice1 + "</h1>";
      var deposit = "<h1>Deposit to be made: " + "$" + deposit1 + "</h1>";
      var fullEmail = gender + guardianName + childName + phone + address + email + childBday + event + age + package + theme + packagePrice + addOnPrice + totalPrice + deposit;

      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // create reusable transporter object using STMP
        let transporter = nodemailer.createTransport({
          host: "smtp.ionos.com",
          port: 587,
          auth: {
            user: "support@heavenlyjoyevents.com",
            pass: "SummerJOJO19#"
          }
        });

        const mailOptions = {
          from: 'support@heavenlyjoyevents.com', // sender address
          to: 'support@heavenlyjoyevents.com', // list of receivers
          subject: 'Thank You For Reserving', // Subject line
          html: fullEmail// plain text body
        };

        transporter.sendMail(mailOptions, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log("Email Send: "+ info.response);
       });

      }

      main().catch(console.error);
    }
  }

module.exports =  mailer;