<?php

// =========================
// DATABASE CONNECTION FILE
// db.php
// =========================

$host = "localhost";
$dbname = "quiz_app";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional message for testing
// echo "Database connected successfully";

?>