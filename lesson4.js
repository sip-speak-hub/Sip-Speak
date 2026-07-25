// ================= DATA: LESSON 4 - MIND & BODY =================
const lessonData = {
    title: "Mind & Body",
    subtitle: "Wellness, Health & Self-Care in Modern Life",
    theme: "Holistic Wellness 🧘",
    goal: "To discuss mental and physical health, stress management, and holistic wellbeing strategies",
    
    // VIDEO RESOURCES - 3 videos
videos: [
    {
        title: "How stress affects your body",
        src: "videos/video3.mp4",
        duration: "4:30",
        description: "TED-Ed explores the physiological impact of stress on your body and brain",
        level: "B2-C1"
    },
    {
        title: "Do you really need to take 10,000 steps a day?",
        src: "videos/video4.mp4",
        duration: "5:15",
        description: "Shannon Odell examines the science behind the famous step count recommendation",
        level: "B2"
    },
    {
        title: "How to make your stress work for you",
        src: "videos/video5.mp4",
        duration: "4:45",
        description: "Shannon Odell reveals how to reframe stress as a positive force",
        level: "B2-C1"
    }
],
    
    // CATEGORIZED VOCABULARY
    vocabCategories: {
        "🧠 Mental Health & Stress": [
            { word: "burnout", def: "physical/emotional exhaustion from prolonged stress", ex: "She took a leave of absence due to burnout." },
            { word: "anxiety", def: "persistent worry or fear about everyday situations", ex: "Social anxiety makes networking events challenging." },
            { word: "mental resilience", def: "ability to bounce back from difficulties", ex: "Meditation builds mental resilience." },
            { word: "overwhelmed", def: "feeling unable to cope with demands", ex: "I'm completely overwhelmed with work lately." },
            { word: "mindfulness", def: "being present and aware in the moment", ex: "Mindfulness practice reduces stress significantly." },
            { word: "cortisol", def: "stress hormone released by the body", ex: "High cortisol levels can disrupt sleep." }
        ],
        
        "💪 Physical Health & Fitness": [
            { word: "sedentary lifestyle", def: "inactive way of life with little exercise", ex: "A sedentary lifestyle increases health risks." },
            { word: "cardiovascular health", def: "health of heart and blood vessels", ex: "Running improves cardiovascular health." },
            { word: "metabolism", def: "chemical processes that convert food to energy", ex: "Exercise boosts your metabolism." },
            { word: "immune system", def: "body's defense against illness", ex: "Sleep strengthens your immune system." },
            { word: "endorphins", def: "chemicals that create feelings of happiness", ex: "Exercise releases endorphins naturally." },
            { word: "physical activity", def: "any bodily movement that uses energy", ex: "Even light physical activity helps." }
        ],
        
        "😴 Sleep & Recovery": [
            { word: "sleep deprivation", def: "not getting enough sleep", ex: "Sleep deprivation affects cognitive function." },
            { word: "circadian rhythm", def: "body's internal 24-hour clock", ex: "Jet lag disrupts your circadian rhythm." },
            { word: "quality sleep", def: "restorative, deep sleep", ex: "Quality sleep is more important than quantity." },
            { word: "power nap", def: "short nap (10-20 min) for energy", ex: "A power nap can boost productivity." },
            { word: "sleep hygiene", def: "habits that promote good sleep", ex: "Good sleep hygiene includes no screens before bed." },
            { word: "insomnia", def: "chronic difficulty falling/staying asleep", ex: "Stress can trigger insomnia." }
        ],
        
        "🧘 Self-Care & Wellness": [
            { word: "self-care routine", def: "regular practices for wellbeing", ex: "My self-care routine includes yoga and journaling." },
            { word: "work-life balance", def: "equilibrium between job and personal life", ex: "Achieving work-life balance is crucial." },
            { word: "digital detox", def: "period without electronic devices", ex: "I do a digital detox every weekend." },
            { word: "me-time", def: "time alone for relaxation", ex: "I need some me-time to recharge." },
            { word: "holistic health", def: "whole-person approach to wellness", ex: "Holistic health addresses mind, body, and spirit." },
            { word: "preventive care", def: "actions to prevent illness", ex: "Preventive care is better than treatment." }
        ],
        
        " Habits & Lifestyle": [
            { word: "healthy habits", def: "positive routines for wellbeing", ex: "Small healthy habits compound over time." },
            { word: "lifestyle changes", def: "modifications to daily routines", ex: "Lifestyle changes can reverse some conditions." },
            { word: "consistency", def: "regular, steady practice", ex: "Consistency is key to seeing results." },
            { word: "motivation", def: "drive to take action", ex: "Motivation fluctuates, but discipline sustains." },
            { word: "willpower", def: "control over impulses and actions", ex: "Willpower is like a muscle - it can be strengthened." },
            { word: "sustainable", def: "maintainable long-term", ex: "Extreme diets aren't sustainable." }
        ],
        
        "💭 Mind-Body Connection": [
            { word: "psychosomatic", def: "physical symptoms caused by mental factors", ex: "Stress can cause psychosomatic headaches." },
            { word: "gut-brain connection", def: "link between digestive and nervous systems", ex: "The gut-brain connection affects mood." },
            { word: "placebo effect", def: "improvement from belief in treatment", ex: "The placebo effect demonstrates mind-body power." },
            { word: "stress response", def: "body's reaction to threat (fight-or-flight)", ex: "The stress response evolved for survival." },
            { word: "relaxation response", def: "body's opposite reaction to stress", ex: "Meditation triggers the relaxation response." },
            { word: "biofeedback", def: "using body signals to control functions", ex: "Biofeedback helps manage chronic pain." }
        ]
    },
    
    warmup: [
        "How would you rate your current work-life balance on a scale of 1-10?",
        "What's your go-to self-care activity when you're stressed?",
        "Do you think you get enough quality sleep? Why or why not?",
        "What's one healthy habit you want to develop but struggle with?",
        "How do you feel about exercise - energizing or exhausting?"
    ],
    
    story: "Six months ago, I hit a wall. I was working 60-hour weeks, surviving on coffee and willpower, and sleeping maybe 5 hours a night. I thought I was being productive, but really, I was just burning out.\n\nThe signs were there - constant fatigue, irritability, getting sick every other week. My cortisol levels were through the roof. But I ignored them until I couldn't anymore. I had a complete meltdown during a presentation. Right there in front of 30 colleagues, I froze, started shaking, and couldn't continue.\n\nThat was my wake-up call. I realized my sedentary lifestyle, sleep deprivation, and chronic stress were destroying my health. So I made lifestyle changes. Small ones at first - a 10-minute walk during lunch, turning off screens an hour before bed, taking actual breaks instead of eating at my desk.\n\nI started practicing mindfulness - just 5 minutes of meditation each morning. I learned about the mind-body connection, how stress triggers the fight-or-flight response, how quality sleep strengthens the immune system. I discovered that 10,000 steps a day isn't magic - consistency matters more than perfection.\n\nNow, six months later, I still have stress, but I manage it differently. I prioritize work-life balance, I have a self-care routine, and I actually enjoy my me-time. My mental resilience has improved dramatically. The irony? I'm more productive now working 40 hours than I ever was working 60.",
    
    discussion: [
        "Do you think modern society glorifies being busy and stressed? Why?",
        "What's more important for health: diet, exercise, or sleep?",
        "Is the 10,000 steps recommendation helpful or misleading?",
        "How do you balance ambition and self-care?",
        "Do you think mental health is taken as seriously as physical health?",
        "What's your opinion on wellness trends and 'biohacking'?",
        "Can you be healthy without exercising? Can you be healthy without good sleep?",
        "How has technology affected our sleep and stress levels?",
        "Is it possible to have perfect work-life balance, or is that a myth?",
        "What role does social media play in our mental health?"
    ],
    
    debate: "Companies should be legally required to limit employee working hours to protect mental and physical health.",
    
    roleplay: [
        "Your friend is experiencing burnout but refuses to slow down. Convince them to prioritize self-care.",
        "You're at a wellness retreat. Someone asks about your self-care routine. Describe it naturally.",
        "You disagree with a colleague who says 'stress is all in your head.' Discuss respectfully."
    ],
    
    wellnessQuiz: [
        { question: "The stress hormone released by your body", answer: "cortisol" },
        { word: "Chemicals that create feelings of happiness during exercise", answer: "endorphins" },
        { question: "Body's internal 24-hour clock", answer: "circadian rhythm" },
        { question: "Physical/emotional exhaustion from prolonged stress", answer: "burnout" }
    ]
};

// ================= APP STATE =================
let currentStep = 0;
const totalSteps = 14;
let timerInterval = null;
let timeLeft = 60;
let currentCategory = 0;
let currentQuizIndex = 0;
let selectedVideo = 0;

const allVocab = Object.values(lessonData.vocabCategories).flat();
// === НОВЫЕ ПЕРЕМЕННЫЕ ДЛЯ VOCABULARY BATTLE ===
let vocabBattleIndex = 0;
let vocabBattleScore = 0;
let vocabBattleShowAnswer = false;
let vocabBattleWords = [];

// === ПЕРЕМЕННЫЕ ДЛЯ Fill in the Blanks (Lesson 4 - Wellness Theme) ===
let blankIndex = 0;
let blankScore = 0;
let blankSelected = false;

const fillInBlanksData = [
    {
        context: "🧠 Mental Check-in",
        sentence: "I've been working 60-hour weeks, and I'm starting to feel total ___.",
        options: ["motivation", "burnout", "willpower", "consistency"],
        correct: "burnout"
    },
    {
        context: "😴 Sleep Habits",
        sentence: "To improve my ___, I try to turn off all screens an hour before bed.",
        options: ["circadian rhythm", "power nap", "sleep hygiene", "insomnia"],
        correct: "sleep hygiene"
    },
    {
        context: "💪 Physical Boost",
        sentence: "Even a 10-minute walk can boost your ___ and make you feel happier.",
        options: ["cortisol", "metabolism", "endorphins", "immune system"],
        correct: "endorphins"
    },
    {
        context: "🧘 Long-term Goals",
        sentence: "Achieving a good ___ is crucial for long-term mental and physical health.",
        options: ["work-life balance", "digital detox", "holistic health", "me-time"],
        correct: "work-life balance"
    }
];
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
        case 5: renderFillInTheBlanks(); break; // ← ДОБАВИТЬ
        case 6: renderWellnessQuiz(); break;
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
            <span class="emoji">🧘</span>
            <h1>Sip & Speak</h1>
            <h2>${lessonData.theme}</h2>
            <h3>${lessonData.title}</h3>
            <p class="mt-20" style="font-style: italic; color: var(--text-secondary);">${lessonData.subtitle}</p>
            <div class="question-box mt-20" style="border-left: none; background: rgba(118, 132, 91, 0.15);">
                <strong>Goal:</strong> ${lessonData.goal}
            </div>
            <p class="mt-20"><strong>Time:</strong> ~60-75 minutes</p>
            <p class="mt-20" style="font-size: 0.95rem;">Take a deep breath and let's begin! 🌿</p>
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
        <p>We'll explore wellness vocabulary across <strong>${categories.length} categories</strong>:</p>
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
function renderWellnessQuiz() {
    const quiz = lessonData.wellnessQuiz[currentQuizIndex];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🧠</span>
        <h2>Wellness Quiz</h2>
        <p>Guess the wellness term based on the description:</p>
        <div class="question-box mt-20" style="background: rgba(118, 132, 91, 0.15); border-left: none; text-align: center; padding: 30px;">
            <p style="font-size: 1.2rem; font-weight: 500;">${quiz.question || quiz.word}</p>
        </div>
        <div class="mt-20 text-center">
            <button class="btn btn-secondary" onclick="revealAnswer()">Reveal Answer</button>
            <div id="answerBox" style="display: none; margin-top: 15px; padding: 15px; background: rgba(118, 132, 91, 0.2); border-radius: 12px;">
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--primary); margin: 0;">${quiz.answer}</p>
            </div>
        </div>
        <button class="btn btn-primary mt-20" onclick="nextQuizQuestion()" style="width: 100%;">${currentQuizIndex < lessonData.wellnessQuiz.length - 1 ? 'Next Question' : 'Complete Quiz'}</button>
    `;
}

function revealAnswer() {
    document.getElementById('answerBox').style.display = 'block';
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < lessonData.wellnessQuiz.length) {
        renderWellnessQuiz();
    } else {
        currentStep++;
        renderScreen();
    }
}

function renderVideoListening() {
    const video = lessonData.videos[selectedVideo];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎥</span>
        <h2>Video Listening</h2>
        
        <div class="question-box mt-20" style="background: rgba(0,0,0,0.05); border-left: none;">
            <h3 style="color: var(--primary); margin-bottom: 10px;">${video.title}</h3>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">️ Duration: ${video.duration}</p>
            <p style="font-size: 0.9rem; margin-bottom: 15px;"> Level: ${video.level}</p>
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
                <li>Think about: <em>How does stress affect YOUR body?</em></li>
                <li>Note down what you expect to learn</li>
                <li>Review vocabulary from today's lesson</li>
            </ul>
        </div>
        
        <div class="mt-20">
            <h3 style="color: var(--primary);"> While Watching:</h3>
            <ul style="padding-left: 20px; line-height: 2;">
                <li>Listen for main ideas</li>
                <li>Note down 3-5 new expressions</li>
                <li>Pay attention to scientific terms</li>
            </ul>
        </div>
        
        <div class="question-box mt-20" style="background: rgba(118, 132, 91, 0.15); border-left: none;">
            <h3 style="color: var(--primary); margin-bottom: 15px;">✍️ After Watching - Discussion:</h3>
            <ol style="padding-left: 20px; line-height: 2;">
                <li>What was the main message of the video?</li>
                <li>Did anything surprise you?</li>
                <li>What new vocabulary did you catch?</li>
                <li>How does this relate to your own experience?</li>
                <li>Will you change anything based on this information?</li>
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

function renderStory() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">📖</span>
        <h2>Story Time</h2>
        <div class="question-box" style="border-left: none; background: rgba(255, 255, 255, 0.9); line-height: 1.9;">
            <p>${lessonData.story}</p>
        </div>
        <h3 class="mt-20">Key expressions used:</h3>
        <ul style="padding-left: 20px; line-height: 2.2;">
            <li><strong>burnout</strong> - physical/emotional exhaustion</li>
            <li><strong>sedentary lifestyle</strong> - inactive way of life</li>
            <li><strong>sleep deprivation</strong> - not getting enough sleep</li>
            <li><strong>cortisol levels</strong> - stress hormone levels</li>
            <li><strong>lifestyle changes</strong> - modifications to routines</li>
            <li><strong>mindfulness</strong> - being present and aware</li>
            <li><strong>mind-body connection</strong> - link between mental and physical</li>
            <li><strong>work-life balance</strong> - equilibrium between work and life</li>
            <li><strong>self-care routine</strong> - regular wellness practices</li>
            <li><strong>mental resilience</strong> - ability to bounce back</li>
        </ul>
        <p class="mt-20"><strong>Task:</strong> Read aloud. Notice how wellness vocabulary flows naturally in storytelling.</p>
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
        <h2>Wellness Challenge</h2>
        <p><strong>Your task:</strong> Speak for 90 seconds about your ideal wellness routine.</p>
        <div class="question-box mt-20" style="border-left: none;">
            <strong>You must include:</strong>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>Your current self-care practices (if any)</li>
                <li>At least 5 vocabulary expressions from today</li>
                <li>What you'd like to improve</li>
                <li>Realistic goals for the next month</li>
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
            <h2 style="color: var(--primary);">Travel Diary Complete!</h2>
            <div style="text-align: center; margin: 30px 0;">
                <div style="font-size: 4rem; font-weight: bold; color: var(--primary);">${blankScore}/${fillInBlanksData.length}</div>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-top: 10px;">entries filled correctly</p>
            </div>
            <button class="btn btn-primary mt-20" onclick="resetFillInTheBlanks()" style="width: 100%;">🔄 Write Again</button>
        `;
        return;
    }

    const current = fillInBlanksData[blankIndex];
    const progress = ((blankIndex) / fillInBlanksData.length) * 100;

    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">📝</span>
        <h2 style="color: var(--primary);">Fill in the Travel Diary</h2>
        <p style="color: var(--text-secondary); margin-bottom: 10px;">Entry ${blankIndex + 1} of ${fillInBlanksData.length}</p>
        
        <div style="background: #e0e0e0; height: 8px; border-radius: 4px; margin-bottom: 30px; overflow: hidden;">
            <div style="background: var(--primary); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
        </div>

        <!-- СТИЛЬ ДНЕВНИКА ПУТЕШЕСТВЕННИКА -->
        <div style="background: #FFF9F0; border-left: 5px solid #984A39; padding: 25px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 30px;">
            <div style="font-family: 'Caveat', cursive; font-size: 1.6rem; color: #984A39; margin-bottom: 15px;">${current.context}</div>
            <div style="font-size: 1.2rem; line-height: 1.6; color: #333;">
                "${current.sentence.replace('___', `<span id="blankSpace" style="border-bottom: 2px dashed #984A39; color: #984A39; font-weight: bold; padding: 0 8px; background: rgba(152, 74, 57, 0.1); border-radius: 4px;">___</span>`)}"
            </div>
        </div>

        <div id="optionsContainer" style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
            ${current.options.map(opt => `
                <button onclick="checkBlankAnswer('${opt}', '${current.correct}')" 
                    style="padding: 12px 24px; border: 2px solid #984A39; background: white; color: #984A39; border-radius: 25px; cursor: pointer; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 1rem; transition: all 0.2s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    ${opt}
                </button>
            `).join('')}
        </div>

        <div id="feedbackMessage" style="text-align: center; margin-top: 25px; font-weight: 600; font-size: 1.1rem; min-height: 30px;"></div>

        <button id="nextBlankBtn" class="btn btn-primary mt-20" onclick="nextBlank()" style="width: 100%; display: none; background: #984A39; border: none;">Next Entry →</button>
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
        blankSpace.style.background = 'rgba(76, 175, 80, 0.1)';
        feedback.textContent = '✅ Perfect! Fits the story.';
        feedback.style.color = '#4CAF50';
    } else {
        blankSpace.style.borderColor = '#F44336';
        blankSpace.style.color = '#F44336';
        blankSpace.style.background = 'rgba(244, 67, 54, 0.1)';
        feedback.textContent = `❌ Not quite. The correct phrase is "${correct}".`;
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
            <li>Be empathetic and supportive</li>
            <li>Use wellness vocabulary naturally</li>
            <li>Ask clarifying questions</li>
            <li>Incorporate 3-4 expressions</li>
        </ul>
        <button class="btn btn-secondary mt-20" onclick="renderRolePlay()" style="width: 100%;"> Different Scenario</button>
    `;
}

function renderReflection() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🧠</span>
        <h2>Wrap-up & Reflection</h2>
        <p>Reflect with your partner:</p>
        <div class="question-box mt-20" style="border-left: none;">
    <ul style="padding-left: 20px; line-height: 2.2;">
        <li>What's one wellness practice you want to try this week?</li>
        <li>Which vocabulary word from today describes your current state?</li>
        <li>How do you usually deal with stress?</li>
        <li>What does "balance" mean to you personally?</li>
        <li>Share one small change you'll make for your wellbeing.</li>
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
            <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Namaste! 🧘✨</h3>
            <p style="margin-top: 10px;">Take care of your mind and body!</p>
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
        <div style="font-family: 'Quicksand', sans-serif; padding: 50px 40px; background: #F5F9F0; min-height: 100vh;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">🧘</div>
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 3rem; color: #76845B; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.3rem; color: #B5C4A8; margin: 10px 0 0 0; font-weight: 600;">${lessonData.title}</h2>
                <div style="width: 60px; height: 3px; background: #76845B; margin: 15px auto 0 auto;"></div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #B5C4A8;">
                        <th style="padding: 12px 8px; text-align: center; width: 8%; font-size: 0.85rem; color: #76845B; font-weight: 700;">know</th>
                        <th style="padding: 12px 8px; text-align: left; width: 32%; font-size: 0.85rem; color: #76845B; font-weight: 700;">word/phrase</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #76845B; font-weight: 700;">definition</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #76845B; font-weight: 700;">example</th>
                    </tr>
                </thead>
                <tbody>
                    ${allWords.map((item, index) => `
                        <tr style="border-bottom: 1px solid #E8F0E0;">
                            <td style="padding: 14px 8px; text-align: center;">
                                <div style="width: 18px; height: 18px; border: 1.5px solid #B5C4A8; display: inline-block;"></div>
                            </td>
                            <td style="padding: 14px 8px; font-weight: 700; color: #76845B; font-size: 0.95rem;">${item.word}</td>
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
            <div style="text-align: center; margin-bottom: 20px; border-bottom: 3px solid #76845B; padding-bottom: 12px;">
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 2.2rem; color: #76845B; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.1rem; color: #B5C4A8; margin: 4px 0 0 0; font-weight: 600;">${lessonData.title} — Worksheet</h2>
                <p style="font-size: 0.8rem; color: #999; margin: 4px 0 0 0;">Name: ___________________________ Date: ____________</p>
            </div>

            <!-- WORD BANK -->
            <div style="background: #F5F9F0; border: 2px dashed #B5C4A8; border-radius: 10px; padding: 12px; margin-bottom: 18px; page-break-inside: avoid;">
                <h4 style="margin: 0 0 8px 0; color: #76845B; font-size: 0.9rem;">🧘 Word Bank:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;">
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">burnout</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">mindfulness</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">work-life balance</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">sleep hygiene</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">endorphins</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">digital detox</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">mental resilience</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #B5C4A8; font-size: 0.85rem; color: #76845B; font-weight: 600;">self-care routine</span>
                </div>
            </div>

            <!-- EXERCISE 1 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #76845B; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #76845B; padding-left: 8px;">Exercise 1: Fill in the Blanks</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Complete the sentences using words from the Word Bank.</p>
                <div style="line-height: 2; font-size: 0.9rem; color: #333;">
                    <p style="margin: 5px 0;">1. After months of overwork, she experienced complete _______________.</p>
                    <p style="margin: 5px 0;">2. Practicing _______________ helps me stay present and reduce stress.</p>
                    <p style="margin: 5px 0;">3. Achieving a good _______________ is essential for long-term health.</p>
                    <p style="margin: 5px 0;">4. Good _______________ includes no screens before bed.</p>
                    <p style="margin: 5px 0;">5. Exercise releases _______________ that make you feel happier.</p>
                    <p style="margin: 5px 0;">6. I do a _______________ every weekend — no phone, no laptop.</p>
                    <p style="margin: 5px 0;">7. Meditation builds _______________ and helps you bounce back from difficulties.</p>
                    <p style="margin: 5px 0;">8. My _______________ includes yoga, journaling, and a warm bath.</p>
                </div>
            </div>

            <!-- EXERCISE 2 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #76845B; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #76845B; padding-left: 8px;">Exercise 2: Match the Word with Its Definition</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Connect each word (1-5) with its correct definition (A-E).</p>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                    <div style="width: 48%;">
                        <p style="margin: 4px 0;"><strong>Words:</strong></p>
                        <p style="margin: 4px 0;">1. burnout</p>
                        <p style="margin: 4px 0;">2. endorphins</p>
                        <p style="margin: 4px 0;">3. digital detox</p>
                        <p style="margin: 4px 0;">4. mindfulness</p>
                        <p style="margin: 4px 0;">5. self-care routine</p>
                    </div>
                    <div style="width: 48%;">
                        <p style="margin: 4px 0;"><strong>Definitions:</strong></p>
                        <p style="margin: 4px 0;">A. chemicals that create feelings of happiness</p>
                        <p style="margin: 4px 0;">B. regular practices for wellbeing</p>
                        <p style="margin: 4px 0;">C. physical/emotional exhaustion from stress</p>
                        <p style="margin: 4px 0;">D. being present and aware in the moment</p>
                        <p style="margin: 4px 0;">E. period without electronic devices</p>
                    </div>
                </div>
            </div>

            <!-- EXERCISE 3 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #76845B; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #76845B; padding-left: 8px;">Exercise 3: Write Your Own Sentences</h3>
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
                <h3 style="color: #76845B; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #76845B; padding-left: 8px;">Exercise 4: Mini Writing Task</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 8px 0;">Write a short paragraph (5-7 sentences). Use at least <strong>4 words</strong> from the Word Bank.</p>
                <div style="background: #F5F9F0; border-radius: 8px; padding: 8px; margin-bottom: 8px; border-left: 3px solid #B5C4A8;">
                    <p style="margin: 0; font-size: 0.9rem; color: #76845B; font-weight: 600; font-style: italic;">"Describe your ideal self-care routine. What do you do to manage stress and stay healthy?"</p>
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
            <div style="text-align: center; padding-top: 10px; border-top: 2px solid #B5C4A8;">
                <p style="margin: 0; color: #76845B; font-size: 0.8rem; font-style: italic;">Sip & Speak — Learn Today, Speak Tomorrow, Succeed Forever! 🧘</p>
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