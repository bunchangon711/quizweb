document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const statusSelect = document.getElementById('status');
    const examsList = document.querySelector('.exams-list');

    // Exam demo data
    const exams = [
        { name: 'Luyện tập', status: 'available' },
        { name: 'Giữa kỳ', status: 'time-specific' },
        { name: 'Cuối kỳ', status: 'time-specific' }
        // Can add another if needed
    ];

    function renderExams() {
        const filteredExams = exams.filter(exam => {
            const statusMatch = statusSelect.value === 'all' || statusSelect.value === exam.status;
            const searchMatch = !searchInput.value || exam.name.toLowerCase().includes(searchInput.value.toLowerCase());
            return statusMatch && searchMatch;
        });
    
        examsList.innerHTML = '';
        filteredExams.forEach(exam => {
            const examElement = document.createElement('div');
            examElement.classList.add(`exam-${exam.status}`); // Add class based on exam status
    
            const examNameElement = document.createElement('h3');
            examNameElement.textContent = exam.name;
            examElement.appendChild(examNameElement);
    
            const statusElement = document.createElement('p');
            statusElement.textContent = `Trạng thái: ${exam.status}`;
            examElement.appendChild(statusElement);
    
            examElement.addEventListener('click', function() {
                window.location.href = 'Exam page/index.html';
            });
            examsList.appendChild(examElement);
        });
    }

    searchInput.addEventListener('input', renderExams);
    statusSelect.addEventListener('change', renderExams);

    renderExams();
});