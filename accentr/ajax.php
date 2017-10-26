<?php
//irmosholl@mail.ru,feedback@webmaster38.ru,
header('Content-Type: text/html; charset=utf-8');
define('subject', 'Заявка с сайта Айси центр');
define('emails', 'Enigrade@gmail.com');
if (isset($_POST['form'])){
    if ($_POST['form']=='strani'){
        if (isset($_POST['strana'],$_POST['name'],$_POST['phone'],$_POST['mail']) && !empty($_POST['name']) && !empty($_POST['phone'])){
            $message = sprintf("
                Форма: %s\n
                Имя автора: %s\n
                Телефон автора: %s\n
            ",
                "Обратный звонок на обучение за границей",
                $_POST['strana'],
                $_POST['name'],
                $_POST['phone'],
                $_POST['mail']
            );
        }
    }
    if ($_POST['form']=='formContacts'){
        if (isset($_POST['name'],$_POST['mail']) && !empty($_POST['name']) && !empty($_POST['mail'])){
            $message = sprintf("
                Форма: %s\n
                Имя автора: %s\n
                Телефон автора: %s\n
            ",
                "Обратный звонок на обучение за границей",
                $_POST['name'],
                $_POST['mail']
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