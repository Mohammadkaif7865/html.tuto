<?php
   if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'] && isset($_POST['message'])) {
       include 'customer.php';
       echo "hello";
   }
   else{
       header("location: project.html");
   }