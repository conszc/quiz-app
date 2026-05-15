<?php

// =========================
// GET QUESTIONS FILE
// getQuestions.php
// =========================


header("Content-Type: application/json");

include "db.php";

// =========================
// GET 10 RANDOM QUESTIONS
// =========================
$sql = "
    SELECT 
        id,
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        correct_answer
    FROM questions
    ORDER BY RAND()
    LIMIT 10
";


$result = $conn->query($sql);


$questions = [];


if ($result->num_rows > 0) {


    while ($row = $result->fetch_assoc()) {


        $questions[] = [
            "id" => $row["id"],
            "question" => $row["question"],

            "answers" => [
                $row["option_a"],
                $row["option_b"],
                $row["option_c"],
                $row["option_d"]
            ],


            "correct" => $row["correct_answer"]
        ];
    }
}


echo json_encode($questions);

$conn->close();

?>