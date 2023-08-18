<?php

//Login Function
function login($conn, $email, $password) {
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($userId, $hashedPassword);
    $stmt->fetch();
    $stmt->close();

    if (password_verify($password, $hashedPassword)) {
        // Password is correct, set up user session
        session_start();
        $_SESSION["user_id"] = $userId;
        $_SESSION["email"] = $email;
        return true;
    } else {
        return false;
    }
}


function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function registerUser($email, $password, $firstName, $lastName) {
    global $conn;

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);

    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }

    $stmt->close();
}


function isEmailTaken($email) {
    global $conn;

    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        return true;
    } else {
        return false;
    }

    $stmt->close();
}
?>
