<?php

// =========================
// LOGIN FILE
// login.php
// =========================

session_start();
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    // =========================
    // CHECK IF USER EXISTS
    // =========================
    $sql = "SELECT * FROM users WHERE username = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();

    $result = $stmt->get_result();

    // =========================
    // USER FOUND
    // =========================
    if ($result->num_rows > 0) {

        $user = $result->fetch_assoc();

        if (password_verify($password, $user["password"])) {

    
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["username"] = $user["username"];

       
            header("Location: ../index.html");
            exit();

        } else {

       
            echo "Incorrect password.";

        }

    } else {


        echo "User does not exist.";

    }


    $stmt->close();
}


$conn->close();

?>