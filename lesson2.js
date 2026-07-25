// ================= DATA: LESSON 2 - THE MOVIES WE LOVE =================
const lessonData = {
    title: "The Movies We Love",
    subtitle: "Cinema, Genres & Stories That Shape Us",
    theme: "Vintage Cinema ",
    goal: "To discuss films fluently: genres, plot elements, character development, and critical analysis",
    
    // VIDEO RESOURCES - 2 videos
videos: [
    {
        title: "What Makes a Movie Great?",
        src: "videos/video1.mp4",
        duration: "5:42",
        description: "Exploring what separates good films from great ones",
        level: "B2-C1"
    },
    {
        title: "The Power of Movies",
        src: "videos/video2.mp4",
        duration: "4:18",
        description: "How films impact our emotions and perspectives",
        level: "B2"
    }
],
    
    // CATEGORIZED VOCABULARY
    vocabCategories: {
        " Classic Genres": [
            { word: "comedy", def: "a film designed to make you laugh", ex: "I'm in the mood for a light comedy tonight." },
            { word: "drama", def: "a serious film focusing on realistic characters and emotions", ex: "She loves emotional dramas that make her cry." },
            { word: "horror", def: "a film designed to frighten and create suspense", ex: "I can't watch horror movies before bed." },
            { word: "action film", def: "exciting film with fights, chases, and explosions", ex: "The action film had incredible stunt work." },
            { word: "romance/romantic comedy", def: "a film centered around a love story", ex: "Rom-coms are my guilty pleasure." },
            { word: "thriller", def: "a suspenseful film with excitement and tension", ex: "The thriller kept me guessing until the end." },
            { word: "science fiction (sci-fi)", def: "films about futuristic concepts, space, technology", ex: "I love sci-fi that explores philosophical questions." },
            { word: "fantasy", def: "films with magical or supernatural elements", ex: "The fantasy film had stunning visual effects." },
            { word: "documentary", def: "a non-fiction film about real events or subjects", ex: "The documentary changed my perspective on climate change." },
            { word: "animation", def: "a film created using animated images", ex: "Pixar animations appeal to both kids and adults." },
            { word: "mystery", def: "a film focused on solving a crime or puzzle", ex: "The mystery had so many red herrings." },
            { word: "adventure", def: "an exciting film with a journey or quest", ex: "The adventure film was shot in exotic locations." }
        ],
        
        "🎪 Modern & Hybrid Genres": [
            { word: "psychological thriller", def: "a thriller focusing on mental and emotional states", ex: "Black Swan is a gripping psychological thriller." },
            { word: "coming-of-age story", def: "a story about growing up and maturity", ex: "Lady Bird is a brilliant coming-of-age story." },
            { word: "dark comedy", def: "comedy dealing with serious topics humorously", ex: "The film is a dark comedy about death." },
            { word: "neo-noir", def: "modern films inspired by classic noir style", ex: "Blade Runner 2049 is a stunning neo-noir." },
            { word: "mockumentary", def: "a fictional story presented as a documentary", ex: "What We Do in the Shadows is a hilarious mockumentary." },
            { word: "superhero film", def: "a film about characters with superhuman abilities", ex: "Superhero films dominate the box office." },
            { word: "period drama", def: "a film set in a specific historical period", ex: "The period drama had incredible costume design." }
        ],
        
        "🎬 Describing Films": [
            { word: "visually stunning", def: "extremely beautiful to look at", ex: "The cinematography was visually stunning." },
            { word: "thought-provoking", def: "making you think deeply", ex: "It's a thought-provoking film about identity." },
            { word: "overrated", def: "not as good as people say", ex: "I found it pretty overrated, honestly." },
            { word: "underrated gem", def: "excellent but not widely recognized", ex: "This movie is an underrated gem." },
            { word: "binge-worthy", def: "so good you want to watch many episodes", ex: "The series is totally binge-worthy." },
            { word: "plot twist", def: "an unexpected change in the story", ex: "The plot twist at the end blew my mind." },
            { word: "predictable", def: "you can guess what will happen", ex: "The ending was too predictable for me." },
            { word: "gripping", def: "holding your attention completely", ex: "It was so gripping I forgot to check my phone." }
        ],
        
        "🎥 Film Elements": [
            { word: "character development", def: "how characters change throughout the story", ex: "The character development was exceptional." },
            { word: "cinematography", def: "the art of camera work and lighting", ex: "The cinematography won an Oscar." },
            { word: "soundtrack", def: "the music used in the film", ex: "The soundtrack perfectly complements the mood." },
            { word: "pacing", def: "the speed at which the story unfolds", ex: "The pacing was a bit slow in the middle." },
            { word: "chemistry", def: "natural connection between actors", ex: "The chemistry between the leads was electric." },
            { word: "special effects (SFX)", def: "artificial elements created for film", ex: "The special effects were groundbreaking." },
            { word: "screenplay/script", def: "the written text of a film", ex: "The screenplay was adapted from a novel." }
        ],
        
        "💬 Opinions & Reviews": [
            { word: "it hits different", def: "affects you in a unique way (modern slang)", ex: "Watching it as an adult just hits different." },
            { word: "standout performance", def: "exceptional acting", ex: "Her performance was the standout of the film." },
            { word: "lived up to the hype", def: "was as good as expected", ex: "It totally lived up to the hype." },
            { word: "missed the mark", def: "failed to achieve its goal", ex: "The ending really missed the mark for me." },
            { word: "a masterclass in...", def: "an excellent example of something", ex: "It's a masterclass in storytelling." },
            { word: "two thumbs up", def: "highly recommended (informal)", ex: "I give it two thumbs up!" },
            { word: "not my cup of tea", def: "not something I enjoy", ex: "Horror movies aren't really my cup of tea." }
        ],
        
        "🎬 Watching Habits": [
            { word: "guilty pleasure", def: "something you enjoy but feel embarrassed about", ex: "Romantic comedies are my guilty pleasure." },
            { word: "rewatch value", def: "how worth it is to watch again", ex: "This film has high rewatch value." },
            { word: "spoiler-free", def: "without revealing key plot points", ex: "I'll keep this review spoiler-free." },
            { word: "on the edge of my seat", def: "extremely excited/nervous", ex: "I was on the edge of my seat the whole time." },
            { word: "binge-watch", def: "watch many episodes in one sitting", ex: "We binge-watched the entire season." },
            { word: "movie buff", def: "someone who knows a lot about films", ex: "My friend is a total movie buff." },
            { word: "marathon movies", def: "watch many films in succession", ex: "We marathoned all the Lord of the Rings films." }
        ]
    },
    
    
    warmup: [
        "What's a movie you could watch over and over without getting tired of it?",
        "What was the last film that made you cry or feel emotional?",
        "Do you prefer watching movies at home or in the cinema? Why?",
        "What's a movie everyone loves but you just don't get?",
        "If you could live in any movie universe, which would you choose?"
    ],
    
    story: "I used to hate horror movies. Like, genuinely couldn't sleep after watching one. But last year, my friend convinced me to watch Get Out. I went in expecting cheap scares, but what I got was so much more. It was a psychological thriller wrapped in social commentary, with brilliant cinematography and a plot twist I never saw coming. \n\nThe character development was subtle but powerful. The pacing kept me on the edge of my seat without relying on jump scares. And the ending? A masterclass in storytelling. Now I'm hooked on psychological thrillers. Turns out, I don't hate horror—I just hate poorly made horror. That film had serious rewatch value, and every time I watch it, it hits different. It's an underrated gem in my book, even though it won an Oscar.",
    
    discussion: [
        "What's a film that changed your perspective on something important?",
        "How do you feel about remakes and reboots? Are they ever justified?",
        "What makes a movie 'binge-worthy' versus a one-time watch?",
        "Do you think streaming services have improved or damaged cinema as an art form?",
        "What's the most overrated film you've seen recently? Why didn't it work for you?",
        "How important is cinematography compared to plot? Can beautiful visuals save a weak story?",
        "What film has the best plot twist you've ever experienced?",
        "Do you prefer character-driven stories or plot-driven action? Why?",
        "What's a guilty pleasure movie you're embarrassed to admit you love?",
        "How has your taste in movies changed as you've gotten older?"
    ],
    
    debate: "Streaming services like Netflix have done more harm than good for the film industry.",
    
    roleplay: [
        "You're trying to convince your friend to watch a movie they're skeptical about. Pitch it to them.",
        "You're at a party and someone asks for a movie recommendation based on your personality. What do you suggest and why?",
        "You disagree with your friend about a popular movie. They loved it, you hated it. Discuss respectfully."
    ],
    
    genreQuiz: [
        { question: "A film that makes you laugh but deals with serious topics", answer: "dark comedy" },
        { question: "A modern film inspired by 1940s detective noir style", answer: "neo-noir" },
        { question: "A story about a young person growing up and finding themselves", answer: "coming-of-age story" },
        { question: "A thriller that focuses on mental and emotional states", answer: "psychological thriller" }
    ]
};

// ================= APP STATE =================
let currentStep = 0;
const totalSteps = 14; // Increased to 13 (added video section)
let timerInterval = null;
let timeLeft = 60;
let currentCategory = 0;
let currentQuizIndex = 0;
let selectedVideo = 0;
// === ПЕРЕМЕННЫЕ ДЛЯ Fill in the Blanks (Lesson 2 - Movies) ===
let blankIndex = 0;
let blankScore = 0;
let blankSelected = false;

const fillInBlanksData = [
    {
        sentence: "I'm in the mood for a light ___ tonight.",
        options: ["drama", "comedy", "thriller", "horror"],
        correct: "comedy"
    },
    {
        sentence: "The ___ at the end blew my mind!",
        options: ["pacing", "chemistry", "plot twist", "soundtrack"],
        correct: "plot twist"
    },
    {
        sentence: "Her performance was the ___ of the film.",
        options: ["guilty pleasure", "standout", "spoiler", "rewatch value"],
        correct: "standout"
    },
    {
        sentence: "We ___ the entire season in one weekend.",
        options: ["marathoned", "spoiled", "pitched", "missed"],
        correct: "marathoned"
    },
    {
        sentence: "It's a ___ in storytelling.",
        options: ["missed mark", "cup of tea", "masterclass", "guilty pleasure"],
        correct: "masterclass"
    }
];
// === НОВЫЕ ПЕРЕМЕННЫЕ ДЛЯ VOCABULARY BATTLE ===
let vocabBattleIndex = 0;
let vocabBattleScore = 0;
let vocabBattleShowAnswer = false;
let vocabBattleWords = [];
// Flatten vocabulary for some activities
const allVocab = Object.values(lessonData.vocabCategories).flat();

// ================= RENDER FUNCTIONS =================
function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function renderScreen() {
    updateProgress();
    const main = document.getElementById('mainContent');
    main.style.animation = 'none';
    main.offsetHeight;
    main.style.animation = 'fadeIn 0.5s ease';

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (currentStep === 0) {
        nextBtn.textContent = 'Start Lesson';
        prevBtn.style.visibility = 'hidden';
    } else if (currentStep === totalSteps - 1) {
        nextBtn.textContent = 'Finish';
        prevBtn.style.visibility = 'visible';
    } else {
        nextBtn.textContent = 'Next';
        prevBtn.style.visibility = 'visible';
    }

       switch(currentStep) {
        case 0: renderWelcome(); break;
        case 1: renderWarmUp(); break;
        case 2: renderVocabCategories(); break;
        case 3: renderVocabByCategory(); break;
        case 4: renderVocabBattle(); break;
        case 5: renderFillInTheBlanks(); break; // ← ДОБАВИТЬ ЭТУ СТРОКУ
        case 6: renderGenreQuiz(); break;
        case 7: renderVideoListening(); break;
        case 8: renderStory(); break;
        case 9: renderDiscussion(); break;
        case 10: renderChallenge(); break;
        case 11: renderDebate(); break;
        case 12: renderRolePlay(); break;
        case 13: renderReflection(); break;
    }
}

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <div class="text-center">
            <span class="emoji">🎬</span>
            <h1>Sip & Speak</h1>
            <h2>${lessonData.theme}</h2>
            <h3>${lessonData.title}</h3>
            <p class="mt-20" style="font-style: italic; color: var(--text-secondary);">${lessonData.subtitle}</p>
            <div class="question-box mt-20" style="border-left: none; background: rgba(212, 168, 67, 0.15);">
                <strong>Goal:</strong> ${lessonData.goal}
            </div>
            <p class="mt-20"><strong>Time:</strong> ~60-75 minutes</p>
            <p class="mt-20" style="font-size: 0.95rem;">Grab your popcorn and let's talk cinema! </p>
        </div>
    `;
}

function renderWarmUp() {
    const randomQ = lessonData.warmup[Math.floor(Math.random() * lessonData.warmup.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🔥</span>
        <h2>Warm-up</h2>
        <p>Discuss this icebreaker question with your partner:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderWarmUp()" style="width: 100%;">🎲 Shuffle Question</button>
    `;
}

function renderVocabCategories() {
    const categories = Object.keys(lessonData.vocabCategories);
    let html = `
        <span class="emoji">📚</span>
        <h2>Vocabulary Overview</h2>
        <p>We'll explore movie vocabulary across <strong>${categories.length} categories</strong>:</p>
        <div class="mt-20">
    `;
    
    categories.forEach((cat, idx) => {
        const count = lessonData.vocabCategories[cat].length;
        html += `
            <div class="question-box" style="padding: 15px 20px; margin-bottom: 12px;">
                <strong style="color: var(--primary);">${idx + 1}. ${cat}</strong>
                <span style="float: right; color: var(--text-secondary);">${count} expressions</span>
            </div>
        `;
    });
    
    html += `
        </div>
        <p class="mt-20" style="text-align: center; font-style: italic;">Click Next to dive into each category!</p>
    `;
    
    document.getElementById('mainContent').innerHTML = html;
}

function renderVocab() {
    let cardsHtml = lessonData.vocab.map(item => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
<button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.word}')" title="Listen" style="right: 15px;">🔊</button>                    <p style="margin-top:10px; font-size:0.8rem; color: var(--text-secondary);">Tap to reveal</p>
                </div>
                <div class="flip-card-back">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.def}')" title="Listen">🔊</button>
                    <p class="back-def">${item.def}</p>
                    <p class="back-example">"${item.ex}"</p>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">💬</span>
        <h2>Lexical Chunks</h2>
        <p>Tap each card to flip it. Read the definition and example aloud.</p>
        <div class="mt-20">${cardsHtml}</div>
    `;
}
// ================= VOCABULARY BY CATEGORY =================
function renderVocabByCategory() {
    const categories = Object.keys(lessonData.vocabCategories);
    const currentCat = categories[currentCategory % categories.length];
    const vocab = lessonData.vocabCategories[currentCat];
    
    let cardsHtml = vocab.map(item => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${escapeStr(item.word)}')" title="Listen" style="position: absolute; right: 15px; top: 15px;">🔊</button>
                    <button class="audio-btn" onclick="event.stopPropagation(); addToDictionary('${escapeStr(item.word)}', '${escapeStr(item.def)}', '${escapeStr(item.ex)}')" title="Add to Dictionary" style="position: absolute; right: 60px; top: 15px;">⭐</button>
                    <span class="front-word">${item.word}</span>
                    <p style="margin-top:10px; font-size:0.8rem; color: var(--text-secondary);">Tap to reveal</p>
                </div>
                <div class="flip-card-back">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${escapeStr(item.def)}')" title="Listen" style="position: absolute; right: 15px; top: 15px;">🔊</button>
                    <button class="audio-btn" onclick="event.stopPropagation(); addToDictionary('${escapeStr(item.word)}', '${escapeStr(item.def)}', '${escapeStr(item.ex)}')" title="Add to Dictionary" style="position: absolute; right: 60px; top: 15px;">⭐</button>
                    <p class="back-def">${item.def}</p>
                    <p class="back-example">"${item.ex}"</p>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎸</span>
        <h2 style="color: #B20B13;">${currentCat}</h2>
        <p>Tap each card to flip. Read aloud and try to create your own sentence!</p>
        <div class="mt-20">${cardsHtml}</div>
        <div class="text-center mt-20">
            <p style="font-size: 0.9rem; color: var(--text-secondary);">Category ${currentCategory + 1} of ${categories.length}</p>
            <button class="btn btn-secondary mt-20" onclick="nextCategory()" style="width: 100%;">Next Category →</button>
        </div>
    `;
}

function nextCategory() {
    currentCategory++;
    if (currentCategory < Object.keys(lessonData.vocabCategories).length) {
        renderVocabByCategory();
    } else {
        currentStep++;
        renderScreen();
    }
}

function renderVocabBattle() {
    // Перемешиваем слова при первом запуске (берем все слова из всех категорий)
    if (vocabBattleWords.length === 0) {
        vocabBattleWords = [...allVocab].sort(() => Math.random() - 0.5);
        vocabBattleIndex = 0;
        vocabBattleScore = 0;
        vocabBattleShowAnswer = false;
    }
    
    // Если все слова пройдены
    if (vocabBattleIndex >= vocabBattleWords.length) {
        const percentage = Math.round((vocabBattleScore / vocabBattleWords.length) * 100);
        let emoji = percentage >= 80 ? '🏆' : percentage >= 50 ? '👍' : '💪';
        
        document.getElementById('mainContent').innerHTML = `
            <span class="emoji">${emoji}</span>
            <h2 style="color: var(--primary);">Vocabulary Battle Complete!</h2>
            <div style="text-align: center; margin: 30px 0;">
                <div style="font-size: 4rem; font-weight: bold; color: var(--primary);">${vocabBattleScore}/${vocabBattleWords.length}</div>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-top: 10px;">words explained</p>
                <div style="margin-top: 20px; font-size: 1.5rem;">${'⭐'.repeat(Math.ceil(percentage / 20))}</div>
            </div>
            <button class="btn btn-primary mt-20" onclick="resetVocabBattle()" style="width: 100%;">🔄 Play Again</button>
        `;
        return;
    }
    
    const currentWord = vocabBattleWords[vocabBattleIndex];
    const progress = ((vocabBattleIndex) / vocabBattleWords.length) * 100;
    
    if (vocabBattleShowAnswer) {
        // Показываем ответ
        document.getElementById('mainContent').innerHTML = `
            <span class="emoji">💡</span>
            <h2 style="color: var(--primary);">Vocabulary Battle</h2>
            <div style="background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); color: white; padding: 30px; border-radius: 20px; margin: 20px 0;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 20px;">${escapeStr(currentWord.word)}</div>
                <div style="font-size: 1.1rem; margin-bottom: 15px;">${escapeStr(currentWord.def)}</div>
                <div style="font-style: italic; opacity: 0.9;">"${escapeStr(currentWord.ex)}"</div>
            </div>
            <button class="btn btn-primary mt-20" onclick="nextVocabBattleWord()" style="width: 100%;">Next Word →</button>
        `;
    } else {
        // Показываем слово с кнопками
        document.getElementById('mainContent').innerHTML = `
            <span class="emoji">🎯</span>
            <h2 style="color: var(--primary);">Vocabulary Battle</h2>
            <p style="color: var(--text-secondary); margin-bottom: 10px;">Word ${vocabBattleIndex + 1} of ${vocabBattleWords.length}</p>
            <div style="background: #e0e0e0; height: 8px; border-radius: 4px; margin-bottom: 30px; overflow: hidden;">
                <div style="background: var(--primary); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
            </div>
            
            <div style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 30px;">
                <div style="font-size: 2.5rem; font-weight: bold; color: var(--primary); text-align: center; margin-bottom: 10px;">${escapeStr(currentWord.word)}</div>
                <p style="text-align: center; color: var(--text-secondary); font-size: 0.9rem;">Explain this word to your partner</p>
            </div>
            
            <div style="display: flex; gap: 15px;">
                <button class="btn" onclick="vocabBattleCorrect()" style="flex: 1; background: #4CAF50; color: white; border: none; padding: 20px; font-size: 1.1rem; font-weight: 600; border-radius: 12px; cursor: pointer;">✅ Explained</button>
                <button class="btn" onclick="vocabBattleShowAnswerFn()" style="flex: 1; background: #FF9800; color: white; border: none; padding: 20px; font-size: 1.1rem; font-weight: 600; border-radius: 12px; cursor: pointer;">❓ Don't know</button>
            </div>
        `;
    }
}

// === ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ VOCABULARY BATTLE ===
function vocabBattleCorrect() {
    vocabBattleScore++;
    vocabBattleIndex++;
    vocabBattleShowAnswer = false;
    renderVocabBattle();
}

function vocabBattleShowAnswerFn() {
    vocabBattleShowAnswer = true;
    renderVocabBattle();
}

function nextVocabBattleWord() {
    vocabBattleIndex++;
    vocabBattleShowAnswer = false;
    renderVocabBattle();
}

function resetVocabBattle() {
    vocabBattleWords = [];
    vocabBattleIndex = 0;
    vocabBattleScore = 0;
    vocabBattleShowAnswer = false;
    renderVocabBattle();
}

function renderGenreQuiz() {
    const quiz = lessonData.genreQuiz[currentQuizIndex];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎬</span>
        <h2>Genre Quiz</h2>
        <p>Guess the genre/film term based on the description:</p>
        <div class="question-box mt-20" style="background: rgba(212, 168, 67, 0.15); border-left: none; text-align: center; padding: 30px;">
            <p style="font-size: 1.2rem; font-weight: 500;">${quiz.question}</p>
        </div>
        <div class="mt-20 text-center">
            <button class="btn btn-secondary" onclick="revealAnswer()">Reveal Answer</button>
            <div id="answerBox" style="display: none; margin-top: 15px; padding: 15px; background: rgba(185, 28, 28, 0.1); border-radius: 12px;">
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--primary); margin: 0;">${quiz.answer}</p>
            </div>
        </div>
        <button class="btn btn-primary mt-20" onclick="nextQuizQuestion()" style="width: 100%;">${currentQuizIndex < lessonData.genreQuiz.length - 1 ? 'Next Question' : 'Complete Quiz'}</button>
    `;
}

function revealAnswer() {
    document.getElementById('answerBox').style.display = 'block';
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < lessonData.genreQuiz.length) {
        renderGenreQuiz();
    } else {
        currentStep++;
        renderScreen();
    }
}

// ================= NEW VIDEO LISTENING SECTION =================
function renderVideoListening() {
    const video = lessonData.videos[selectedVideo];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎥</span>
        <h2>Video Listening</h2>
        
        <div class="question-box mt-20" style="background: rgba(0,0,0,0.05); border-left: none;">
            <h3 style="color: var(--primary); margin-bottom: 10px;">${video.title}</h3>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">⏱️ Duration: ${video.duration}</p>
            <p style="font-size: 0.9rem; margin-bottom: 15px;">📚 Level: ${video.level}</p>
            <p style="font-style: italic; color: var(--text-secondary);">${video.description}</p>
            
            <!-- HTML5 Video Player -->
            <video controls width="100%" style="margin-top: 20px; border-radius: 12px; background: #000;">
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        
        <div class="mt-20">
            <h3 style="color: var(--primary);"> Before Watching:</h3>
            <ul style="padding-left: 20px; line-height: 2;">
                <li>Think about: <em>Why do you love movies?</em></li>
                <li>Note down 3 things you expect to hear</li>
                <li>Review vocabulary from today's lesson</li>
            </ul>
        </div>
        
        <div class="mt-20">
            <h3 style="color: var(--primary);"> While Watching:</h3>
            <ul style="padding-left: 20px; line-height: 2;">
                <li>Listen for main ideas (don't worry about every word)</li>
                <li>Note down 3-5 new expressions you hear</li>
                <li>Pay attention to the speaker's opinion</li>
            </ul>
        </div>
        
        <div class="question-box mt-20" style="background: rgba(212, 168, 67, 0.15); border-left: none;">
            <h3 style="color: var(--primary); margin-bottom: 15px;">✍️ After Watching - Discussion:</h3>
            <ol style="padding-left: 20px; line-height: 2;">
                <li>What was the main message of the video?</li>
                <li>Do you agree with the speaker's opinion? Why/why not?</li>
                <li>What new vocabulary did you catch?</li>
                <li>How does this relate to your own experience with movies?</li>
                <li>Would you recommend this video to others? Why?</li>
            </ol>
        </div>
        
        <div class="text-center mt-20">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;">Video ${selectedVideo + 1} of ${lessonData.videos.length}</p>
            <button class="btn btn-secondary" onclick="previousVideo()" style="margin-right: 10px;">← Previous Video</button>
            <button class="btn btn-primary" onclick="nextVideoOrContinue()">${selectedVideo < lessonData.videos.length - 1 ? 'Next Video →' : 'Continue Lesson'}</button>
        </div>
    `;
}

function nextVideoOrContinue() {
    if (selectedVideo < lessonData.videos.length - 1) {
        selectedVideo++;
        renderVideoListening();
    } else {
        currentStep++;
        renderScreen();
    }
}

function previousVideo() {
    if (selectedVideo > 0) {
        selectedVideo--;
        renderVideoListening();
    }
}
// ================= END VIDEO SECTION =================

function renderStory() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">📖</span>
        <h2>Story Time</h2>
        <div class="question-box" style="border-left: none; background: rgba(255, 255, 255, 0.9); line-height: 1.9;">
            <p>${lessonData.story}</p>
        </div>
        <h3 class="mt-20">Key expressions used:</h3>
        <ul style="padding-left: 20px; line-height: 2.2;">
            <li><strong>plot twist</strong> - unexpected story change</li>
            <li><strong>character development</strong> - how characters evolve</li>
            <li><strong>on the edge of my seat</strong> - extremely engaged</li>
            <li><strong>masterclass in storytelling</strong> - excellent example</li>
            <li><strong>rewatch value</strong> - worth watching again</li>
            <li><strong>hits different</strong> - affects you uniquely</li>
            <li><strong>underrated gem</strong> - excellent but underappreciated</li>
        </ul>
        <p class="mt-20"><strong>Task:</strong> Read aloud with emotion. Notice how the vocabulary is used naturally.</p>
    `;
}

function renderDiscussion() {
    const randomQ = lessonData.discussion[Math.floor(Math.random() * lessonData.discussion.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🗣️</span>
        <h2>Deep Discussion</h2>
        <p>Discuss this question. Use at least 3 vocabulary expressions from today:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderDiscussion()" style="width: 100%;">🎲 Next Question</button>
    `;
}

function renderChallenge() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">⚡</span>
        <h2>Speed Speaking Challenge</h2>
        <p><strong>Your task:</strong> Speak for 90 seconds about your favorite movie.</p>
        <div class="question-box mt-20" style="border-left: none;">
            <strong>You must include:</strong>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>Genre and basic plot (no spoilers!)</li>
                <li>At least 5 vocabulary expressions from today</li>
                <li>Why it resonates with you personally</li>
                <li>Who you'd recommend it to and why</li>
            </ul>
        </div>
        <div class="timer-display" id="timerDisplay">01:30</div>
        <div class="timer-btns">
            <button class="btn btn-primary" onclick="startTimer(90)">Start</button>
            <button class="btn btn-secondary" onclick="resetTimer(90)">Reset</button>
        </div>
    `;
}
function renderFillInTheBlanks() {
    if (blankIndex >= fillInBlanksData.length) {
        const percentage = Math.round((blankScore / fillInBlanksData.length) * 100);
        let emoji = percentage === 100 ? '🏆' : percentage >= 75 ? '🌟' : '💪';
        
        document.getElementById('mainContent').innerHTML = `
            <span class="emoji">${emoji}</span>
            <h2 style="color: var(--primary);">Fill in the Blanks: Complete!</h2>
            <div style="text-align: center; margin: 30px 0;">
                <div style="font-size: 4rem; font-weight: bold; color: var(--primary);">${blankScore}/${fillInBlanksData.length}</div>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-top: 10px;">correct answers</p>
            </div>
            <button class="btn btn-primary mt-20" onclick="resetFillInTheBlanks()" style="width: 100%;">🔄 Try Again</button>
        `;
        return;
    }

    const current = fillInBlanksData[blankIndex];
    const progress = ((blankIndex) / fillInBlanksData.length) * 100;

    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">✍️</span>
        <h2 style="color: var(--primary);">Fill in the Blanks</h2>
        <p style="color: var(--text-secondary); margin-bottom: 10px;">Question ${blankIndex + 1} of ${fillInBlanksData.length}</p>
        
        <div style="background: #e0e0e0; height: 8px; border-radius: 4px; margin-bottom: 30px; overflow: hidden;">
            <div style="background: var(--primary); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
        </div>

        <div style="background: white; padding: 30px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 30px; text-align: center; font-size: 1.3rem; line-height: 1.6; color: var(--text-main);">
            "${current.sentence.replace('___', `<span id="blankSpace" style="border-bottom: 3px solid var(--primary); color: var(--primary); font-weight: bold; padding: 0 10px;">___</span>`)}"
        </div>

        <div id="optionsContainer" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
            ${current.options.map(opt => `
                <button onclick="checkBlankAnswer('${opt}', '${current.correct}')" 
                    style="padding: 12px 24px; border: 2px solid var(--primary); background: white; color: var(--primary); border-radius: 25px; cursor: pointer; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 1rem; transition: all 0.2s ease;">
                    ${opt}
                </button>
            `).join('')}
        </div>

        <div id="feedbackMessage" style="text-align: center; margin-top: 20px; font-weight: 600; font-size: 1.1rem; min-height: 30px;"></div>

        <button id="nextBlankBtn" class="btn btn-primary mt-20" onclick="nextBlank()" style="width: 100%; display: none;">Next Question →</button>
    `;
    
    blankSelected = false;
}

function checkBlankAnswer(selected, correct) {
    if (blankSelected) return;
    blankSelected = true;

    const blankSpace = document.getElementById('blankSpace');
    const feedback = document.getElementById('feedbackMessage');
    const nextBtn = document.getElementById('nextBlankBtn');
    const optionsContainer = document.getElementById('optionsContainer');

    blankSpace.textContent = selected;

    if (selected === correct) {
        blankScore++;
        blankSpace.style.borderColor = '#4CAF50';
        blankSpace.style.color = '#4CAF50';
        feedback.textContent = '✅ Correct! Great job.';
        feedback.style.color = '#4CAF50';
    } else {
        blankSpace.style.borderColor = '#F44336';
        blankSpace.style.color = '#F44336';
        feedback.textContent = `❌ Oops! The correct word is "${correct}".`;
        feedback.style.color = '#F44336';
    }

    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.style.pointerEvents = 'none';
        if (btn.textContent.trim() === correct) {
            btn.style.background = '#4CAF50';
            btn.style.color = 'white';
            btn.style.borderColor = '#4CAF50';
        } else if (btn.textContent.trim() === selected && selected !== correct) {
            btn.style.background = '#F44336';
            btn.style.color = 'white';
            btn.style.borderColor = '#F44336';
        }
    });

    nextBtn.style.display = 'block';
}

function nextBlank() {
    blankIndex++;
    renderFillInTheBlanks();
}

function resetFillInTheBlanks() {
    blankIndex = 0;
    blankScore = 0;
    renderFillInTheBlanks();
}

function renderDebate() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🔥</span>
        <h2 style="color: var(--primary);">Hot Takes / Debate</h2>
        <p style="text-align: center; margin-bottom: 20px;">Decide who is Person A and who is Person B. You MUST defend your assigned side, even if you personally disagree!</p>
        
        <div class="question-box mt-20" style="text-align: center; border-left: none; padding: 25px;">
            <p style="font-size: 1.2rem; font-weight: 600; color: var(--primary); margin-bottom: 20px; line-height: 1.4;">
                "${lessonData.debate}"
            </p>
            
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
                <div style="flex: 1; min-width: 200px; background: #4CAF50; color: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);">
                    <div style="font-size: 2rem; margin-bottom: 10px;">👤 Person A</div>
                    <div style="font-weight: bold; font-size: 1.3rem; letter-spacing: 1px;">AGREE</div>
                    <div style="font-size: 0.9rem; margin-top: 5px; opacity: 0.9;">Defend this statement</div>
                </div>
                
                <div style="flex: 1; min-width: 200px; background: #F44336; color: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(244, 67, 54, 0.3);">
                    <div style="font-size: 2rem; margin-bottom: 10px;">👤 Person B</div>
                    <div style="font-weight: bold; font-size: 1.3rem; letter-spacing: 1px;">DISAGREE</div>
                    <div style="font-size: 0.9rem; margin-top: 5px; opacity: 0.9;">Argue against it</div>
                </div>
            </div>
        </div>
        
        <div class="mt-20" style="background: rgba(0,0,0,0.03); padding: 15px; border-radius: 12px;">
            <p style="margin: 0; font-size: 0.95rem;"><strong>⏱️ Timing:</strong> 2 minutes to prepare arguments → 2-3 minutes to speak → Switch roles and discuss!</p>
            <p style="margin: 10px 0 0 0; font-size: 0.95rem;"><strong>🎯 Goal:</strong> Use at least 4 vocabulary expressions from today's lesson.</p>
        </div>

        <button class="btn btn-secondary mt-20" onclick="renderDebate()" style="width: 100%;">🎲 Shuffle Debate Topic</button>
    `;
}

function renderRolePlay() {
    const randomScenario = lessonData.roleplay[Math.floor(Math.random() * lessonData.roleplay.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎭</span>
        <h2>Role Play</h2>
        <div class="question-box">
            <strong style="color: var(--primary);">Situation:</strong><br><br>
            ${randomScenario}
        </div>
        <p class="mt-20"><strong>Tips:</strong></p>
        <ul style="padding-left: 20px; line-height: 2;">
            <li>Be enthusiastic and persuasive</li>
            <li>Use descriptive vocabulary from today</li>
            <li>Ask questions to engage your partner</li>
            <li>Naturally incorporate 3-4 expressions</li>
        </ul>
        <button class="btn btn-secondary mt-20" onclick="renderRolePlay()" style="width: 100%;">🎲 Different Scenario</button>
    `;
}

function renderReflection() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🧠</span>
        <h2>Wrap-up & Reflection</h2>
        <p>Reflect with your partner:</p>
        <div class="question-box mt-20" style="border-left: none;">
    <ul style="padding-left: 20px; line-height: 2.2;">
        <li>What's the last movie that made you feel something strong?</li>
        <li>Which vocabulary word from today describes your favorite film?</li>
        <li>If you could recommend one movie to your partner, what would it be?</li>
        <li>How has your taste in movies changed over the years?</li>
        <li>What movie genre do you think says the most about a person's personality?</li>
    </ul>
</div>
        
        <!-- ВОТ СЮДА ВСТАВЬ КНОПКУ: -->
        <button class="btn btn-primary mt-20" onclick="generateCheatSheet()" style="width: 100%;">
    📥 Download PDF Cheat Sheet
</button>

<button class="btn btn-secondary mt-20" onclick="generateHomeworkPDF()" style="width: 100%; border: 2px solid var(--primary); color: var(--primary); background: white;">
    📝 Download Homework PDF
</button>
        
        <div class="text-center mt-20">
    <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Lights, camera, action! 🎬✨</h3>
    <p style="margin-top: 10px;">Enjoy the show and keep exploring cinema!</p>
</div>
    `;  // ← Закрывающая кавычка и точка с запятой ОБЯЗАТЕЛЬНЫ!
}

// ================= TIMER LOGIC =================
function startTimer(seconds = 60) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    updateTimerDisplay(seconds);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(seconds);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').innerText = "TIME'S UP! 🎉";
            playTimerEndSound(); // ← ДОБАВИТЬ ЭТУ СТРОКУ
        }
    }, 1000);
}

function resetTimer(seconds = 60) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    updateTimerDisplay(seconds);
}

function updateTimerDisplay(totalSeconds) {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timerDisplay').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ================= NAVIGATION =================
function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        renderScreen();
        window.scrollTo({ top: 0, behavior: 'smooth' });  // ← ДОБАВИТЬ ЭТУ СТРОКУ
    } else {
        // Last step - go back to home
        window.location.href = 'index.html';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderScreen();
        window.scrollTo({ top: 0, behavior: 'smooth' });  // ← ДОБАВИТЬ ЭТУ СТРОКУ
    }
}
// ================= TEXT TO SPEECH (Optimized Browser) =================
function speakText(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get voices (with retry if not loaded yet)
    let voices = window.speechSynthesis.getVoices();
    
    // If voices not loaded yet, wait and retry
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            setBestVoice(utterance, voices, text);
        };
    } else {
        setBestVoice(utterance, voices, text);
    }
}

function setBestVoice(utterance, voices, text) {
    // Priority order for best voices
    const voicePriority = [
        'Google UK English Female',
        'Microsoft Zira Desktop',
        'Microsoft Zira',
        'Samantha',
        'Karen',
        'Moira',
        'Tessa'
    ];
    
    // Find best voice
    let bestVoice = null;
    for (const voiceName of voicePriority) {
        bestVoice = voices.find(v => v.name.includes(voiceName));
        if (bestVoice) break;
    }
    
    // If no preferred voice, find any English voice
    if (!bestVoice) {
        bestVoice = voices.find(v => v.lang === 'en-GB' && v.name.includes('Female')) ||
                   voices.find(v => v.lang === 'en-US' && v.name.includes('Female')) ||
                   voices.find(v => v.lang.startsWith('en'));
    }
    
    // Apply voice
    if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
    } else {
        utterance.lang = 'en-GB';
    }
    
    // Settings for natural sound
    utterance.rate = 0.9;   // Slightly slower
    utterance.pitch = 1.05; // Slightly higher
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
}

// Pre-load voices on page load
window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};
// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    renderScreen();
});

// ================= PDF CHEAT SHEET =================
function generateCheatSheet() {
    let allWords = [];
    if (lessonData.vocab) {
        allWords = lessonData.vocab;
    } else if (lessonData.vocabCategories) {
        allWords = Object.values(lessonData.vocabCategories).flat();
    }

    const cheatSheetHTML = `
        <div style="font-family: 'Quicksand', sans-serif; padding: 50px 40px; background: #FFF0F3; min-height: 100vh;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">🎬</div>
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 3rem; color: #E07A5F; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.3rem; color: #F2A6B9; margin: 10px 0 0 0; font-weight: 600;">${lessonData.title}</h2>
                <div style="width: 60px; height: 3px; background: #E07A5F; margin: 15px auto 0 auto;"></div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #F2A6B9;">
                        <th style="padding: 12px 8px; text-align: center; width: 8%; font-size: 0.85rem; color: #E07A5F; font-weight: 700;">know</th>
                        <th style="padding: 12px 8px; text-align: left; width: 32%; font-size: 0.85rem; color: #E07A5F; font-weight: 700;">word/phrase</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #E07A5F; font-weight: 700;">definition</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #E07A5F; font-weight: 700;">example</th>
                    </tr>
                </thead>
                <tbody>
                    ${allWords.map((item, index) => `
                        <tr style="border-bottom: 1px solid #FCE4EC;">
                            <td style="padding: 14px 8px; text-align: center;">
                                <div style="width: 18px; height: 18px; border: 1.5px solid #F2A6B9; display: inline-block;"></div>
                            </td>
                            <td style="padding: 14px 8px; font-weight: 700; color: #E07A5F; font-size: 0.95rem;">${item.word}</td>
                            <td style="padding: 14px 8px; color: #666; font-size: 0.9rem;">${item.def}</td>
                            <td style="padding: 14px 8px; color: #888; font-style: italic; font-size: 0.85rem;">"${item.ex}"</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    const opt = {
        margin: [10, 10, 10, 10],
        filename: `Sip_Speak_${lessonData.title.replace(/\s+/g, '_')}_CheatSheet.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(cheatSheetHTML).save();
}
function generateHomeworkPDF() {
    const homeworkHTML = `
        <div style="font-family: 'Quicksand', sans-serif; padding: 30px 25px; background: white; min-height: 100vh;">
            <!-- HEADER -->
            <div style="text-align: center; margin-bottom: 20px; border-bottom: 3px solid #E07A5F; padding-bottom: 12px;">
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 2.2rem; color: #E07A5F; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.1rem; color: #F2A6B9; margin: 4px 0 0 0; font-weight: 600;">${lessonData.title} — Worksheet</h2>
                <p style="font-size: 0.8rem; color: #999; margin: 4px 0 0 0;">Name: ___________________________ Date: ____________</p>
            </div>

            <!-- WORD BANK -->
            <div style="background: #FFF0F3; border: 2px dashed #F2A6B9; border-radius: 10px; padding: 12px; margin-bottom: 18px; page-break-inside: avoid;">
                <h4 style="margin: 0 0 8px 0; color: #E07A5F; font-size: 0.9rem;"> Word Bank:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;">
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">plot twist</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">binge-worthy</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">overrated</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">underrated gem</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">gripping</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">predictable</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">thought-provoking</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #E07A5F; font-weight: 600;">guilty pleasure</span>
                </div>
            </div>

            <!-- EXERCISE 1 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #E07A5F; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #E07A5F; padding-left: 8px;">Exercise 1: Fill in the Blanks</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Complete the sentences using words from the Word Bank.</p>
                <div style="line-height: 2; font-size: 0.9rem; color: #333;">
                    <p style="margin: 5px 0;">1. The _______________ at the end of the movie completely surprised me!</p>
                    <p style="margin: 5px 0;">2. This series is so _______________ — I watched all 8 episodes in one day.</p>
                    <p style="margin: 5px 0;">3. Everyone loved that film, but I found it pretty _______________.</p>
                    <p style="margin: 5px 0;">4. This indie movie is an _______________ — more people should see it!</p>
                    <p style="margin: 5px 0;">5. The thriller was so _______________ that I couldn't look away.</p>
                    <p style="margin: 5px 0;">6. The ending was too _______________ — I guessed it from the beginning.</p>
                    <p style="margin: 5px 0;">7. It's a _______________ film about identity and culture.</p>
                    <p style="margin: 5px 0;">8. Romantic comedies are my _______________ — I know they're not "serious" cinema!</p>
                </div>
            </div>

            <!-- EXERCISE 2 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #E07A5F; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #E07A5F; padding-left: 8px;">Exercise 2: Match the Word with Its Definition</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Connect each word (1-5) with its correct definition (A-E).</p>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                    <div style="width: 48%;">
                        <p style="margin: 4px 0;"><strong>Words:</strong></p>
                        <p style="margin: 4px 0;">1. plot twist</p>
                        <p style="margin: 4px 0;">2. binge-worthy</p>
                        <p style="margin: 4px 0;">3. gripping</p>
                        <p style="margin: 4px 0;">4. predictable</p>
                        <p style="margin: 4px 0;">5. guilty pleasure</p>
                    </div>
                    <div style="width: 48%;">
                        <p style="margin: 4px 0;"><strong>Definitions:</strong></p>
                        <p style="margin: 4px 0;">A. holding your attention completely</p>
                        <p style="margin: 4px 0;">B. something you enjoy but feel embarrassed about</p>
                        <p style="margin: 4px 0;">C. an unexpected change in the story</p>
                        <p style="margin: 4px 0;">D. you can guess what will happen</p>
                        <p style="margin: 4px 0;">E. so good you want to watch many episodes</p>
                    </div>
                </div>
            </div>

            <!-- EXERCISE 3 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #E07A5F; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #E07A5F; padding-left: 8px;">Exercise 3: Write Your Own Sentences</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Choose <strong>3 words</strong> from the Word Bank and write your own sentence for each.</p>
                <div style="line-height: 2.2; font-size: 0.9rem;">
                    <p style="margin: 4px 0;"><strong>Word 1:</strong> _______________</p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 25px;"></p>
                    <p style="margin: 10px 0 4px 0;"><strong>Word 2:</strong> _______________</p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 25px;"></p>
                    <p style="margin: 10px 0 4px 0;"><strong>Word 3:</strong> _______________</p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 25px;"></p>
                </div>
            </div>

            <!-- EXERCISE 4 -->
            <div style="margin-bottom: 10px;">
                <h3 style="color: #E07A5F; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #E07A5F; padding-left: 8px;">Exercise 4: Mini Writing Task</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 8px 0;">Write a short paragraph (5-7 sentences). Use at least <strong>4 words</strong> from the Word Bank.</p>
                <div style="background: #FFF0F3; border-radius: 8px; padding: 8px; margin-bottom: 8px; border-left: 3px solid #F2A6B9;">
                    <p style="margin: 0; font-size: 0.9rem; color: #E07A5F; font-weight: 600; font-style: italic;">"Describe your favorite movie. Why do you love it? What makes it special?"</p>
                </div>
                <div style="line-height: 2;">
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 22px;"></p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 22px;"></p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 22px;"></p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 22px;"></p>
                    <p style="margin: 0; border-bottom: 1px solid #ccc; height: 22px;"></p>
                </div>
            </div>

            <!-- FOOTER -->
            <div style="text-align: center; padding-top: 10px; border-top: 2px solid #F2A6B9;">
                <p style="margin: 0; color: #E07A5F; font-size: 0.8rem; font-style: italic;">Sip & Speak — Learn Today, Speak Tomorrow, Succeed Forever! 🎬</p>
            </div>
        </div>
    `;

    const opt = {
        margin: [8, 8, 8, 8],
        filename: `Sip_Speak_${lessonData.title.replace(/\s+/g, '_')}_Worksheet.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(homeworkHTML).save();
}
// ================= PERSONAL DICTIONARY =================
function addToDictionary(word, definition, example) {
    let dictionary = JSON.parse(localStorage.getItem('sipSpeakDictionary') || '[]');
    
    const exists = dictionary.find(item => item.word === word);
    
    if (exists) {
        alert(`"${word}" is already in your dictionary!`);
        return;
    }
    
    dictionary.push({
        word: word,
        definition: definition,
        example: example,
        addedAt: new Date().toISOString()
    });
    
    localStorage.setItem('sipSpeakDictionary', JSON.stringify(dictionary));
    
    showNotification(`"${word}" added to dictionary! ⭐`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: #76845B; color: white; padding: 15px 30px;
        border-radius: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000; font-family: 'Poppins', sans-serif; font-size: 0.95rem;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}
// Функция для защиты текста от ломки кода из-за кавычек
function escapeStr(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}
// ================= ЗВУК ОКОНЧАНИЯ ТАЙМЕРА =================
function playTimerEndSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        // Настройка звука (приятный "дзынь")
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // Нота C5
        oscillator.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.1); // Переход на C6
        
        // Плавное затухание
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
        
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.6);
    } catch (e) {
        console.log("Audio play failed", e);
    }
}