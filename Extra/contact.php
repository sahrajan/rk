<?php
$to = "rajan3922.cs@gmail.com";
$subject = "Test Email";
$message = "This is a test email.";
$headers = "From: shah-44@hotmail.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Email sending failed.";
}

?>
