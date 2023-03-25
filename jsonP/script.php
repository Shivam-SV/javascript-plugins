<?php

function response($data){
    echo "scripter.__asyncMount('".base64_encode(json_encode($data))."')";
}


try{
    // creating a connection 

    $driver = "mysql";
    $host = "localhost";
    $username = 'root';
    $password = "";
    $database = 'travel_door';

    $conn = new PDO("{$driver}:host={$host};dbname={$database}",$username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $err){
    die($err->getMessage());
}

$query = "SELECT * FROM `users`";

$resFromQuery = $conn->query($query);

$rows = $resFromQuery->fetchAll(PDO::FETCH_ASSOC);

response($rows);