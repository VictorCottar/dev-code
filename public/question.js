document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = Array.from(document.querySelectorAll('button'));
    shuffleArray(buttons);
    const parent = buttons[0].parentNode;
    buttons.forEach(button => {
        parent.appendChild(button);
        button.addEventListener('click', handleButtonClick);
    });
});

function handleButtonClick(event) {
    const button = event.target;
    updateQuestions();
    if (button.id === 'button_question_correct') {
        updateCorrectAnswers();
    }
    console.log('correctAnswers:', getCorrectAnswers());
    console.log('questions:', getQuestions());
    if (getQuestions() === 5) {
        endGame();
    } else {
        window.location.reload();
    }
}

function updateQuestions() {
    let questions = getQuestions();
    questions++;
    localStorage.setItem('questions', questions);
}

function updateCorrectAnswers() {
    let correctAnswers = getCorrectAnswers();
    correctAnswers++;
    localStorage.setItem('correctAnswers', correctAnswers);
}

function getQuestions() {
    return localStorage.getItem('questions') ? parseInt(localStorage.getItem('questions')) : 0;
}

function getCorrectAnswers() {
    return localStorage.getItem('correctAnswers') ? parseInt(localStorage.getItem('correctAnswers')) : 0;
}

function endGame() {
    const correctAnswers = getCorrectAnswers();
    window.location.href = `/endgame?score=${correctAnswers}`;
    localStorage.setItem('correctAnswers', 0);
    localStorage.setItem('questions', 0);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}