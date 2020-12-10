<?php
    $firstname =$_POST['name'];
    $mail =$_POST['email'];
    $mobileno =$_POST['phone'];
    $feedback =$_POST['message'];
    /*database creation*/
    $con =new mysqli('localhost','root','','my_order');
    if($con->connect_error){
        die('connectoin failed :'.$conn->connect_error);
    }
    else{
        $stmt =$conn->prepare("insert into order(name,email,phone,message)values(? , ?, ?, ?)");
          $stmt->bind_param("ssis",$name,$email,$phone,$message);
          $stmt->executed();
          echo "ordered successfully....";
          $stmt->close();
          $conn->close();

    }
?>