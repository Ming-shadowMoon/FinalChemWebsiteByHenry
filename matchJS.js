let firstSelectedCard = null;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => handleCardSelection(card));
});

function handleCardSelection(card) {
    if (card.classList.contains('hidden')) return;

    if (!firstSelectedCard) {
        firstSelectedCard = card;
        card.classList.add('selected');
    } else {
        const isMatch = card.dataset.match === firstSelectedCard.dataset.match;

        if (isMatch && card !== firstSelectedCard) {
            card.classList.add('hidden');
            firstSelectedCard.classList.add('hidden');
            displayFeedback('Correct! Good job!', true);
        } else {
            displayFeedback('Try Again!', false);
        }

        firstSelectedCard.classList.remove('selected');
        firstSelectedCard = null;
    }
}

function displayFeedback(message, isCorrect) {
    const feedback = document.querySelector('.feedback');
    feedback.textContent = message;
    feedback.style.color = isCorrect ? '#388e3c' : '#d32f2f';
}
