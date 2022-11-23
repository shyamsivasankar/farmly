function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "afiitjeeboy.zr@gmail.com",
        Password : "Un!versit0",
        To : '20pd40c1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Regarding farmly",
        Body : "Name: " + document.getElementById("name").value
            + "Email: " + document.getElementById("email").value
            + "Phone number: " + document.getElementById("pnum").value
            + "Comments: " + document.getElementById("msg").value
    }).then(
      message => alert("Mail has been sent successfully")
    );
}