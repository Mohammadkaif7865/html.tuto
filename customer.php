<?php
    $serverName ="localhost";
    $userName ="root";
    $password ="";
    $dbname ="my_order";
    /*creaste connection*/
    $conn =mysqli_connect($serverName,$userName,$password,$dbname);
    if(!$conn){
        echo "failed to connect"
        exit();

    }
    echo "connection success!!!";
    ?>
        
    
