function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "contact@farmlysoftware.com",
        Password : "372CD7FD01DD05C8384F065F12A847E8637B",
        To : 'contact@farmlysoftware.com',
        From : "contact@farmlysoftware.com",
        Subject : "Regarding farmly",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone number: " + document.getElementById("pnum").value
            + "<br> Comments: " + document.getElementById("msg").value
    }).then(
      message => alert("Mail has been sent successfully")
    );
}

function subscriptionEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "contact@farmlysoftware.com",
      Password : "372CD7FD01DD05C8384F065F12A847E8637B",
      To : 'contact@farmlysoftware.com',
      From : "contact@farmlysoftware.com",
      Subject : "Subscription to newsletter",
      Body : "New Subscription: " + document.getElementById("subscriptionmail").value
  }).then(
    message => alert("Your have subscribed to our newsletter")
  );
}
