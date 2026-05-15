<?php

// =========================
// SUBMIT SCORE FILE
// submitScore.php
// =========================


session_start();


header("Content-Type: application/json");

include "db.php";

// =========================
// CHECK IF USER IS LOGGED IN
// =========================
if (!isset($_SESSION["user_id"])) {

    echo json_encode([
        "success" => false,
        "message" => "User not logged in."
    ]);

    exit();
}

// =========================
// GET DATA FROM FRONTEND
// =========================


$data = json_decode(file_get_contents("php://input"), true);


if (!isset($data["score"])) {

    echo json_encode([
        "success" => false,
        "message" => "Score is required."
    ]);

    exit();
}


$userId = $_SESSION["user_id"];
$score = $data["score"];

$totalQuestions = $data["total_questions"] ?? 10;

// =========================
// INSERT SCORE INTO DATABASE
// =========================
$sql = "
    INSERT INTO scores (
        user_id,
        score,
        total_questions
    )
    VALUES (?, ?, ?)
";

$stmt = $conn->prepare($sql);


$stmt->bind_param(
    "iii",
    $userId,
    $score,
    $totalQuestions
);

if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Score submitted successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Failed to submit score."
    ]);
}

$stmt->close();

$conn->close();

?>