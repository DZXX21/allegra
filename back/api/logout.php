<?php
if (!isset($_SESSION)) { session_start(); }

$_SESSION = array(); 

session_destroy(); 

header("Location: ../index.php"); //login.php if you havent setup your htaccess to use without.php
exit();
?>