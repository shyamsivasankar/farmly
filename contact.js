function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "afiitjeeboy.zr@gmail.com",
        Password : "11CE70875072F26FEB5D3FB06D9D8479A06B",
        To : 'afiitjeeboy.zr@gmail.com',
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