<?php
    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get email address from '.env' file in the root
      $envFile = fopen(".env","r");
      $myEmail = fgets($envFile);

      // Get the form fields and remove whitespace.
      $plan = strip_tags(trim($_POST["plan"]));
      $plan = str_replace(array("\r","\n"),array(" "," "),$plan);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

      // Check that data was sent to the mailer.
      if ( empty($plan) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        //http_response_code(400);
        echo "There was a problem with sending your inquiry. Please complete the form and try again.";
        exit;
      }
      // Set the recipient email address.
      $recipient = "$myEmail";

      // Set the email subject.
      $subject = "Early access sign up for Trainr $plan";

      // Build the email content.
      $email_content = "Plan: $plan\n";
      $email_content .= "Email: $email\n\n";
      $email_content .= "Subject: Early access sign up for Trainr\n\n";

      // Build the email headers.
      $email_headers = "From: $plan <$email>";

      // Send the email.
      if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        //http_response_code(200);
        echo "Thank You! Your message has been sent.";
      } else {
        // Set a 500 (internal server error) response code.
        //http_response_code(500);
        echo "Oops! Something went wrong and we couldn\"t send your message.";
      }
    } else {
      // Not a POST request, set a 403 (forbidden) response code.
      //http_response_code(403);
      echo "There was a problem with sending your inquiry. Please try again.";
    }
?>
