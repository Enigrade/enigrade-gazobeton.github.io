<?php
//irmosholl@mail.ru,feedback@webmaster38.ru,
header('Content-Type: text/html; charset=utf-8');
define('subject', 'Заявка на работу с сайта');
define('emails', 'Enigrade@gmail.com');
if (isset($_POST['form'])){
    if ($_POST['form']=='zakaz'){
        if (isset($_POST['name'],$_POST['phone']),$_POST['comment']) && !empty($_POST['name']) && !empty($_POST['phone'])){
            $message = sprintf("
                Форма: %s\n
                Имя: %s\n
                Телефон: %s\n
                Комментарий: %s\n
            ",
                "Заказ с сайта епт",
                $_POST['name'],
                $_POST['phone'],
                $_POST['comment']
            );
        }
    }
    if(isset($message)){
        if (mail(emails, subject, $message)){
            echo "Заявка отправлена";
        }   else    {
            echo "Ошибка сервера";
        }
    }
}