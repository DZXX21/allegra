<?php
require_once "local_config.php";
require_once "functions.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];
    $repeatPassword = $_POST["repeatPassword"];
    

    if (!validateEmail($email)) {
        echo "Invalid email format.";
        exit;
    }

    if ($password !== $repeatPassword) {
        echo "Passwords do not match.";
        exit;
    }

    if (isEmailTaken($email)) {
        echo "Email is already taken.";
        exit;
    }

    if (registerUser($email, $password, $firstName, $lastName)) {
        echo "Registration successful!";
    } else {
        echo "Error registering user.";
    }
}
?>
