// LingoLand - Главный JavaScript

// Инициализация прогресса из localStorage
let lingolandProgress = JSON.parse(localStorage.getItem('lingolandProgress')) || {
    completedLessons: [],
    stars: {},
    wordsLearned: [],
    currentLesson: 1
};

// Обновление статистики при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    updateLessonCards();
});

function updateStats() {
    const totalStars = Object.values(lingolandProgress.stars).reduce((a, b) => a + b, 0);
    document.getElementById('totalStars').textContent = totalStars;
    document.getElementById('completedLessons').textContent = lingolandProgress.completedLessons.length;
    document.getElementById('wordsLearned').textContent = lingolandProgress.wordsLearned.length;
}

function updateLessonCards() {
    lingolandProgress.completedLessons.forEach(lessonNum => {
        const card = document.querySelector(`.lesson-card:nth-child(${lessonNum + 2})`);
        if (card) {
            card.classList.add('completed');
            card.classList.remove('locked');
            
            const starsCount = lingolandProgress.stars[lessonNum] || 0;
            document.getElementById(`stars-${lessonNum}`).textContent = '⭐'.repeat(starsCount);
        }
        
        // Разблокировка следующего урока
        const nextCard = document.querySelector(`.lesson-card:nth-child(${lessonNum + 3})`);
        if (nextCard) {
            nextCard.classList.remove('locked');
        }
    });
}

function startLesson(lessonNum) {
    // Проверка, разблокирован ли урок
    if (lessonNum > 1 && !lingolandProgress.completedLessons.includes(lessonNum - 1)) {
        alert('Сначала пройди предыдущий урок! 📚');
        return;
    }
    
    lingolandProgress.currentLesson = lessonNum;
    localStorage.setItem('lingolandProgress', JSON.stringify(lingolandProgress));
    window.location.href = `lingoland-lesson${lessonNum}.html`;
}

function showDictionary() {
    alert('Словарик скоро будет доступен! 📖');
    // Будет перенаправление на lingoland-dictionary.html
}

function showPassport() {
    alert('Паспорт ученика скоро будет доступен! 🎓');
    // Будет перенаправление на lingoland-passport.html
}

function showParentTips() {
    alert('👨‍👩‍👧 Советы для родителей:\n\n' +
          '1. Сидите рядом с ребёнком во время уроков\n' +
          '2. Поощряйте его говорить вслух\n' +
          '3. Хвалите за старания, даже если есть ошибки\n' +
          '4. Помогайте с произношением, если нужно\n' +
          '5. Делайте обучение весёлым!\n\n' +
          '💡 Помните: регулярность важнее длительности. 20 минут в день лучше, чем 2 часа раз в неделю.');
}

function completeLesson(lessonNum, stars) {
    if (!lingolandProgress.completedLessons.includes(lessonNum)) {
        lingolandProgress.completedLessons.push(lessonNum);
    }
    lingolandProgress.stars[lessonNum] = stars;
    localStorage.setItem('lingolandProgress', JSON.stringify(lingolandProgress));
}

function addWordToDictionary(word) {
    if (!lingolandProgress.wordsLearned.includes(word)) {
        lingolandProgress.wordsLearned.push(word);
        localStorage.setItem('lingolandProgress', JSON.stringify(lingolandProgress));
    }
}