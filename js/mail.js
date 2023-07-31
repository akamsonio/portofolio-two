function sendEmail(emailAddress, subject, message) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method and the request URL.
  xhr.open("POST", "/sendmail", true);

  // Set the request headers.
  xhr.setRequestHeader("Content-Type", "application/json");

  // Create a JSON object containing the email message.
  var data = {
    email: emailAddress,
    subject: subject,
    message: message
  };

  // Convert the JSON object to a string.
  var jsonString = JSON.stringify(data);

  // Send the request body.
  xhr.send(jsonString);

  // Handle the response.
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        // The email was sent successfully.
      } else {
        // The email was not sent successfully.
      }
    }
  };
}