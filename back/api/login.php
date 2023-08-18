<?php
session_start();
require_once "local_config.php";
require_once "functions.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    if (login($conn, $email, $password)) {
        header("Location: index.php");
        exit();
    } else {
        echo "Invalid email or password.";
    }
}
?>
