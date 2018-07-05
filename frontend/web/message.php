<?php
$txt = $_POST["txt"];
$checkUser = $_POST["checkUser"];

$usersChat = json_decode(file_get_contents('msg/usersChat.json'),true);
$blockMsg = fopen('msg/usersChat.json', 'w');
if (flock($blockMsg, LOCK_EX)) { // установка исключительной блокировки на запись
    //  Проверка на первое сообщение
    if ($usersChat ==""){
        // Запись в массив
        $usersChat[0]["userId"] = $checkUser;
        $usersChat[0]["txt"] = $txt;
    } else {
        // Запись в массив
        $num = count($usersChat);
        $usersChat[$num]["userId"] = $checkUser;
        $usersChat[$num]["txt"] = $txt;
    }
    // записываем в фаил
    fwrite($blockMsg, json_encode($usersChat));
    flock($blockMsg, LOCK_UN); // снятие блокировки
}
fclose($blockMsg);

echo json_encode($usersChat,true);
?>
