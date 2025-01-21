// Defining the checkAnswer function
function checkAnswer() {
    const correctAnswer = "4";

    // Retrieving the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    const feedback = document.getElementById('feedback');

    // Comparing the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; 
    } else if (userAnswer) {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; 
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange"; 
    }
}

// Adding an event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
