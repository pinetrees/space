<?php
require('../sendgrid-php/lib/SendGrid.php');
$sendgrid = new SendGrid('', '');
$email = new SendGrid\Email();
$email
    ->addTo('joshua@tier27.com')
    ->setFrom($_POST['email'])
    ->setSubject('Personal Website Inquiry!')
    ->setText($_POST['message'])
    ->setHtml('<strong>Hello World!</strong>')
;

$sendgrid->send($email);
echo "Mail Sent.";
?>
