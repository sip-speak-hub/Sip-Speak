// LingoLand - Урок 1: Привет!

let correctAnswers = 0;
let totalQuestions = 3;

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Медленнее для детей
    utterance.pitch = 1.1; // Чуть выше голос
    window.speechSynthesis.speak(utterance);
}

function checkAnswer(button, isCorrect) {
    // Блокируем все кнопки в этом упражнении
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll('.quiz-option');
    buttons.forEach(btn => {
        btn.style.pointerEvents = 'none';
    });
    
    if (isCorrect) {
        button.classList.add('correct');
        correctAnswers++;
        
        // Показываем награду если все ответы правильные
        if (correctAnswers === totalQuestions) {
            setTimeout(() => {
                document.getElementById('rewardSection').style.display = 'block';
                // Сохраняем прогресс
                saveProgress();
            }, 1000);
        }
    } else {
        button.classList.add('wrong');
        // Показываем правильный ответ
        buttons.forEach(btn => {
            if (btn.onclick.toString().includes('true')) {
                btn.classList.add('correct');
            }
        });
    }
}

function saveProgress() {
    let progress = JSON.parse(localStorage.getItem('lingolandProgress')) || {
        completedLessons: [],
        stars: {},
        wordsLearned: []
    };
    
    if (!progress.completedLessons.includes(1)) {
        progress.completedLessons.push(1);
    }
    progress.stars[1] = correctAnswers;
    
    // Добавляем выученные слова
    const words = ['Hello', 'Goodbye', 'What\'s your name?', 'My name is...'];
    words.forEach(word => {
        if (!progress.wordsLearned.includes(word)) {
            progress.wordsLearned.push(word);
        }
    });
    
    localStorage.setItem('lingolandProgress', JSON.stringify(progress));
}

function completeLesson() {
    saveProgress();
    alert('Урок завершен! Ты получил ' + correctAnswers + ' из ' + totalQuestions + ' звёзд! ⭐');
    window.location.href = 'lingoland.html';
}

function goBack() {
    window.location.href = 'lingoland.html';
}

function toggleParentTips() {
    const tips = document.getElementById('parentTips');
    tips.classList.toggle('show');
}