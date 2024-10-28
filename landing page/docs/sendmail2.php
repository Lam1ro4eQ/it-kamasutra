<?php

function adopt($text)
{
	return '=?UTF-8?B?' . base64_encode($text) . '?=';
}


$subject = "Заявка с сайта allinone.finance";
$mail_to = "aio.fin@mail.ru,evdokimovich.ant@yandex.ru";

$header = "Content-type: text/html; charset=\"utf-8\"";
$header .= "From: allinone.finance <allinone>";
$header .= "Subject: $subject";
$header .= "MIME-Version: 1.0";
$header .= "X-Mailer: PHP/" . phpversion();



$fields = [
    'name' => [ 'value' => $_POST['name'] ?? '', 'label' => 'Имя' ],
    'phone' => [ 'value' => $_POST['phone'] ?? '', 'label' => 'Номер телефона' ],
    'question' => [ 'value' => $_POST['question'] ?? '', 'label' => 'Сообщение' ],
    ];
    

    $message = '';
    foreach ($fields as $field) {
        if (!empty($field['value'])) {
        $message .= $field['label'] . ': ' . $field['value'] . ";\r\n";
        }
    }




$new_message = mb_convert_encoding($message, "Windows-1251", "UTF-8");

$mail_status = mail($mail_to, adopt($subject), $new_message, $header);


$errorMessage = "";
if (!$mail_status) {
	$errorMessage = error_get_last()['message'];
}



$status = "";

if ($mail_status) {
	$status = "OK";
    echo "Сообщение отправлено.";
} else {
    echo "Сообщение не отправлено.";
}