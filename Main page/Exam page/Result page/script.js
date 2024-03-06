document.addEventListener('DOMContentLoaded', function() {
    const correctAnswersElement = document.getElementById('correctAnswers');
    const totalQuestionsElement = document.getElementById('totalQuestions');
    const scoreElement = document.getElementById('score');
    const answersContainer = document.querySelector('.answers');

    // Dữ liệu demo câu hỏi và đáp án
    const questions = [
        { question: 'Câu hỏi 1', options: ['A', 'B', 'C', 'D'], answer: 'A', userAnswer: 'A' },
        { question: 'Câu hỏi 2', options: ['A', 'B', 'C', 'D'], answer: 'B', userAnswer: 'B' },
        { question: 'Câu hỏi 3', options: ['A', 'B', 'C', 'D'], answer: 'C', userAnswer: 'C' },
        { question: 'Câu hỏi 4', options: ['A', 'B', 'C', 'D'], answer: 'D', userAnswer: 'B' },
        { question: 'Câu hỏi 5', options: ['A', 'B', 'C', 'D'], answer: 'A', userAnswer: 'A' },
        { question: 'Câu hỏi 6', options: ['A', 'B', 'C', 'D'], answer: 'B', userAnswer: 'B' }
        // Thêm thêm câu hỏi và đáp án khác nếu cần
    ];

    let correctAnswers = 0;
    questions.forEach(question => {
        if (question.answer === question.userAnswer) {
            correctAnswers++;
        }
    });

    correctAnswersElement.textContent = correctAnswers;
    totalQuestionsElement.textContent = questions.length;
    scoreElement.textContent = (correctAnswers / questions.length) * 10;

    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<h3>${question.question}</h3><p>Lựa chọn của bạn: ${question.userAnswer}</p><p>Đáp án đúng: ${question.answer}</p>`;
        answersContainer.appendChild(questionElement);
    });
});