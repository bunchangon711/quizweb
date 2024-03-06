document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    const submitBtn = document.getElementById('submitBtn');
    const quizContainer = document.querySelector('.quiz-container');

    // Demo questions
    const questions = [
        { question: 'Câu hỏi 1. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'A' },
        { question: 'Câu hỏi 2. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'B' },
        { question: 'Câu hỏi 3. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'C' },
        { question: 'Câu hỏi 4. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'A' },
        { question: 'Câu hỏi 5. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'B' },
        { question: 'Câu hỏi 6. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'C' },
        { question: 'Câu hỏi 7. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'A' },
        { question: 'Câu hỏi 8. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'B' },
        { question: 'Câu hỏi 9. Chọn đáp án đúng:', options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'], answer: 'C' }
        // Can add questions here
    ];

    let currentQuestionIndex = 0;
    let timer;
    let timeLeft = 2700; // exam time requirement in seconds

    function startTimer() {
        timer = setInterval(function() {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerElement.textContent = 'Thời gian còn lại: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerElement.textContent = 'Hết giờ!'; //Display out of time in the timer section
            }
        }, 1000);
    }
    
    function displayQuestion() {
        quizContainer.innerHTML = '';
        questions.forEach((question, index) => {
            quizContainer.innerHTML += `<h2>${question.question}</h2>`;
            question.options.forEach(option => {
                const optionElement = document.createElement('input');
                optionElement.type = 'radio';
                optionElement.name = 'question' + index;
                optionElement.value = option;
                quizContainer.appendChild(optionElement);
                quizContainer.appendChild(document.createTextNode(option));
                quizContainer.appendChild(document.createElement('br'));
            });
            quizContainer.appendChild(document.createElement('hr')); // Add a line between questions
        });
    }

    function submitQuiz() {
        clearInterval(timer);
        alert('Bài thi đã được nộp!');
        //Save exam data (Not added)
        window.location.href = 'Result page/index.html';
    }

    submitBtn.addEventListener('click', submitQuiz);

    startTimer();
    displayQuestion();
});