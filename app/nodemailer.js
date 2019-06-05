var nodemailer = require("nodemailer");

console.log("Connected");

  var mailer = {
    reserve(gender1, guardianName1, childName1, phone1, address1, email1, childBday1, event1, age1, package1, theme1, packagePrice1, addOnPrice1, totalPrice1, deposit1) {

      var gender = "<br><h1>Gender: " + gender1 + "</h1><br>";
      var guardianName = "<h1>Guardian Name: " + guardianName1 + "</h1><br>";
      var childName = "<h1>Child Name: " + childName1 + "</h1><br>";
      var phone = "<h1>Phone: " + phone1 + "</h1><br>";
      var address = "<h1>Address: " + address1 + "</h1><br>";
      var email = "<h1>Email: " + email1 + "</h1><br>";
      var childBday = "<h1>Child Birthday: " + childBday1 + "</h1><br>";
      var event = "<h1>Event Date: " + event1 + "</h1><br>";
      var age = "<h1>Age: " + age1 + "</h1><br>";
      var package = "<h1>Package Chosen: " + package1 + "</h1><br>";
      var theme = "<h1>Theme: " + theme1 + "</h1><br>";
      var packagePrice = "<h1>Package Price: " + "$" + packagePrice1 + "</h1><br>";
      var addOnPrice = "<h1>Add-On Price: " + "$" + addOnPrice1 + "</h1><br>";
      var totalPrice = "<h1>Total Price: " + "$" + totalPrice1 + "</h1><br>";
      var deposit = "<h1>Deposit to be made: " + "$" + deposit1 + "</h1><br>";
      var fullEmail = gender + guardianName + childName + phone + address + email + childBday + event + age + package + theme + packagePrice + addOnPrice + totalPrice + deposit;

      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // create reusable transporter object using gmail
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "jasonnelson11@gmail.com",
            pass: 'sharainelson'
          }
        });

        // send mail with defined transport object
        // let info = await transporter.sendMail({
        //   from: '"Heavenly Joy and Entertainment" <jasonnelson11@gmail.com>', // sender address
        //   to: "jasonfswd@gmail.com", // list of receivers
        //   subject: "Reservation", // Subject line
        //   text: "Reservation: ", // plain text body
        //   html: fullEmail // html body
        // });
        const mailOptions = {
          from: 'jasonnelson11@gmail.com', // sender address
          to: 'jasonfswd@gmail.com', // list of receivers
          subject: 'Reservation', // Subject line
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