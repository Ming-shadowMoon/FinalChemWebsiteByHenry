// Function to check fill-in-the-blank answers
function checkFillBlank(inputId, correctAnswer) {
    const input = document.getElementById(inputId);
    const feedback = input.nextElementSibling;
    if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = '✔ Correct!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = '✘ Try Again!';
        feedback.className = 'feedback wrong';
    }
}
// Function to check the selected multiple-choice answer
function checkMultipleChoice(button) {
    const section = button.parentElement;
    const selectedChoice = section.querySelector('.choice.selected');
    const feedback = section.querySelector('.feedback');

    if (!selectedChoice) {
        feedback.textContent = 'Please select an answer!';
        feedback.className = 'feedback wrong';
        return;
    }

    const isCorrect = selectedChoice.dataset.status === 'correct';
    if (isCorrect) {
        feedback.textContent = '✔ Correct!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = '✘ Try Again!';
        feedback.className = 'feedback wrong';
    }
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.parentElement.parentElement;
        section.querySelectorAll('.choice').forEach(choice => choice.classList.remove('selected'));

        button.classList.add('selected');
    });
});
