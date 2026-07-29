// LingoLand - Урок 1: Привет! (Расширенный)

let correctAnswers = 0;
let totalQuestions = 5;
let selectedCard = null;
let matchedPairs = 0;

function updateProgress(section) {
    const progress = (section / 7) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
}

function playSong() {
    const lyrics = "Hello, hello, everyone! I'm Nanny Shine, hello! Come in and get ready, Come on, everyone — let's go! My name is Nanny Shine. Tell me what's your name.";
    const utterance = new SpeechSynthesisUtterance(lyrics);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function checkAnswer(button, isCorrect, exerciseNum) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll('.quiz-option');
    buttons.forEach(btn => {
        btn.style.pointerEvents = 'none';
    });
    
    if (isCorrect) {
        button.classList.add('correct');
        correctAnswers++;
        updateProgress(exerciseNum);
        
        if (correctAnswers === totalQuestions) {
            setTimeout(() => {
                document.getElementById('rewardSection').style.display = 'block';
                document.getElementById('rewardSection').scrollIntoView({ behavior: 'smooth' });
                saveProgress();
            }, 1000);
        }
    } else {
        button.classList.add('wrong');
        buttons.forEach(btn => {
            if (btn.onclick.toString().includes('true')) {
                btn.classList.add('correct');
            }
        });
    }
}

function checkMatch(card, word) {
    if (card.classList.contains('matched')) return;
    
    if (!selectedCard) {
        selectedCard = card;
        card.style.background = '#764ba2';
        card.style.color = 'white';
    } else {
        const pairs = {
            'Hello': 'Привет',
            'Goodbye': 'До свидания',
            'Mummy': 'Мама'
        };
        
        if (pairs[selectedCard.textContent] === word || pairs[word] === selectedCard.textContent) {
            card.classList.add('matched');
            selectedCard.classList.add('matched');
            matchedPairs++;
            
            if (matchedPairs === 3) {
                setTimeout(() => {
                    alert('Отлично! Все пары найдены! ');
                    correctAnswers++;
                    updateProgress(5);
                }, 500);
            }
        } else {
            selectedCard.style.background = 'white';
            selectedCard.style.color = 'black';
        }
        
        selectedCard = null;
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
    
    const words = ['Hello', 'Goodbye', 'What\'s your name?', 'My name is...', 'mummy', 'daddy', 'brother', 'sister'];
    words.forEach(word => {
        if (!progress.wordsLearned.includes(word)) {
            progress.wordsLearned.push(word);
        }
    });
    
    localStorage.setItem('lingolandProgress', JSON.stringify(progress));
}

function completeLesson() {
    if (correctAnswers < totalQuestions) {
        alert('Выполни все упражнения, чтобы получить звёзды! ⭐');
        return;
    }
    
    saveProgress();
    alert('Урок завершен! Ты получил ' + correctAnswers + ' из ' + totalQuestions + ' звёзд! \n\nОтличная работа!');
    window.location.href = 'lingoland.html';
}

function goBack() {
    if (confirm('Ты уверен, что хочешь выйти? Прогресс будет сохранён.')) {
        window.location.href = 'lingoland.html';
    }
}

function toggleParentTips() {
    const tips = document.getElementById('parentTips');
    tips.classList.toggle('show');
}

function downloadHomework() {
    alert('Домашнее задание скачивается... 📥\n\nPDF будет сгенерировано с прописями и упражнениями.');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgress(0);
});