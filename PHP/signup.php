<?php

// =========================
// SIGNUP FILE
// signup.php
// =========================

include "db.php";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    $confirmPassword = trim($_POST["confirm_password"]);

    // =========================
    // CHECK IF PASSWORDS MATCH
    // =========================
    if ($password !== $confirmPassword) {
        die("Passwords do not match.");
    }

    // =========================
    // CHECK IF USERNAME EXISTS
    // =========================
    $checkSql = "SELECT * FROM users WHERE username = ?";

    $checkStmt = $conn->prepare($checkSql);

    $checkStmt->bind_param("s", $username);

    $checkStmt->execute();

    $result = $checkStmt->get_result();

    if ($result->num_rows > 0) {
        die("Username already exists.");
    }

    // =========================
    // HASH PASSWORD
    // =========================
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // =========================
    // INSERT NEW USER
    // =========================
    $sql = "INSERT INTO users (username, email, password)
            VALUES (?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param(
        "sss",
        $username,
        $email,
        $hashedPassword
    );

    if ($stmt->execute()) {


        header("Location: ../login.html");
        exit();

    } else {

        echo "Error creating account.";

    }

    $stmt->close();
    $checkStmt->close();
}

$conn->close();

?>