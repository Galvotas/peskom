<?php 
/* Configuration */
$subject = 'Peskom.lt Form'; // Set email subject line here
$mailto  = 'sarunas@peskom.lt'; // Email address to send the form to
/* END Configuration */
$message    = $_POST['message'];
$name     	= $_POST['name'];
$email          = $_POST['email'];
$timestamp 	= date("F jS Y, h:iA.", time());

// HTML for email to send submission details
$body = "
<br>
<p><b>Message: $message<br>
<p><b>Name</b>: $name <br>
<b>Email</b>: $email<br>
<p>Date email sent<b>:$timestamp</b></p>
";

// Success Message
$success = "Užklausa sėkmingai išsiūsta.";

$headers = "From: $name <$email> \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "$success"; // success
} else {
    echo 'Nepavyko išsiūsti užklausos.'; // failure
}
?>