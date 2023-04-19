<?php
header('Content-Type: text/html; charset=utf-8');
define('subject', 'Заявка на работу с моего сайта');
define('emails', 'Enigrade@gmail.com');
if (isset($_GET['form'])){
    if ($_GET['form']=='zakaz'){
        if (isset($_GET['name'],$_GET['phone'],$_GET['comment']) && !empty($_GET['comment'])){
            $message = sprintf("
                Форма: %s\n
                Имя: %s\n
                Телефон: %s\n
                Комментарий: %s\n
            ",
                "Заказ с сайта епт",
                $_GET['name'],
                $_GET['phone'],
                $_GET['comment']
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