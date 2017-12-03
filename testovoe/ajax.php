<?php
header('Content-Type: text/html; charset=utf-8');
define('subject', 'Заявка с сайта Dealtech');
define('emails', 'Enigrade@gmail.com');
if (isset($_POST['form'])){
    if ($_POST['form']=='1'){
        if (isset($_POST['name'],$_POST['phone']) && !empty($_POST['name']) && !empty($_POST['phone']) ){
            $message = sprintf("
                Форма: %s\n
                Имя автора: %s\n
                Телефон автора: %s\n
            ",
                "Шапка",
                $_POST['name'],
                $_POST['phone'],
            );
        }
    }
    if ($_POST['form']=='2'){
        if (isset($_POST['name'],$_POST['email'],$_POST['phone'],$_POST['mess']) && !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['mess'])){
            $message = sprintf("
                Форма: %s\n
                Имя автора: %s\n
                Email автора: %s\n
                Телефон автора: %s\n
                Сообщение автора: %s\n
            ",
                "Подвал",
                $_POST['name'],
                $_POST['email'],
                $_POST['phone']
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