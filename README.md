# Quiz App Project

## Project Description
This is a quiz application built using HTML, CSS, JavaScript, PHP, and MySQL. Users can take quizzes, view scores, and track their history.

## Features
- User signup and login system
- Quiz with 10 random questions
- Score tracking
- User profile with history
- Leaderboard system

## How to Run Locally
1. Install XAMPP or similar server
2. Place project in `htdocs`
3. Start Apache and MySQL
4. Import database into MySQL
5. Open `http://localhost/quiz-app`

## Deployment
This project is deployed on Render using a PHP web service.

## Database Schema
- users(id, username, email, password)
- scores(id, user_id, score, total_questions, created_at)

## Start Command (Render)
php -S 0.0.0.0:$PORT -t .
