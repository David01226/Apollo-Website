<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $service = $_POST['service'];
    $mailFrom = strval($_POST['email']);  // trying to print full email after the @ symbol ??
    $message = $_POST['message'];

    $mailTo = "gibsonhere@hotmail.co.uk";
    $subject = "Message from " . $name . " via Apollo Website";
    $headers = "From: gibsonhere@hotmail.co.uk";
    $txt = 'Name: ' . $name . "\n" . 'Contact Number: ' . $number . "\n" . 'Email: ' . $mailFrom . "\n" . 'Interested in: ' . $service . "\n" .'Message: ' . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: submitted.html?mailsend");
}