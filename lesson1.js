// ================= DATA: LESSON 1 - ABOUT ME =================
const lessonData = {
    title: "About Me",
    subtitle: "The Story Behind My Name & Who I Am",
    theme: "Coffee Club ☕",
    goal: "To confidently tell your story: your name, background, where you're from, and what makes you unique",
    
    vocab: [
        { word: "to go by", def: "to use a specific name or nickname", ex: "My name is Alexander, but I go by Alex." },
        { word: "to be named after", def: "to receive the same name as someone else", ex: "I was named after my grandmother." },
        { word: "namesake", def: "a person with the same name as another", ex: "My namesake is a famous writer from the 19th century." },
        { word: "to carry a legacy", def: "to represent family history or traditions", ex: "As the eldest, I feel I carry a legacy." },
        { word: "to live up to", def: "to meet expectations", ex: "I hope I can live up to my parents' expectations." },
        { word: "roots", def: "family origins or cultural background", ex: "I'm proud of my roots and where I come from." },
        { word: "to shape who I am", def: "to influence your personality/identity", ex: "My travels really shaped who I am today." },
        { word: "background", def: "your history, experiences, upbringing", ex: "People from different backgrounds bring unique perspectives." },
        { word: "passion", def: "strong interest or enthusiasm", ex: "My passion is photography and capturing moments." },
        { word: "what drives me", def: "what motivates you", ex: "What drives me is the desire to make a difference." }
    ],
    
    warmup: [
        "If you could introduce yourself without saying your name, how would you do it?",
        "What's the story behind your name? Does it have a special meaning?",
        "Where are you from originally? How has it shaped you?",
        "What's something about you that surprises people when they first meet you?",
        "If you had to describe yourself in three words, what would they be and why?"
    ],
    
    story: "When Maya was born, her parents chose a name that meant 'illusion' in Sanskrit. For years, she hated it. She felt it made her seem untrustworthy. In her twenties, she traveled to India and realized her name connected her to a profound philosophical concept. It wasn't about being fake; it was about understanding the complex, layered nature of reality. \n\nGrowing up in a small town, Maya always felt out of place. But those feelings of being different? They shaped who she is today. What drives her now is helping others embrace their uniqueness. Her background taught her that our stories—our names, our origins, our struggles—are what make us interesting. Now, her name is her greatest conversation starter.",
    
    discussion: [
        "What's the biggest misconception people have about you based on your name, appearance, or accent?",
        "How does where you're from influence who you are today?",
        "What part of your background are you most proud of?",
        "Is it better to have a unique name that's constantly misspelled, or a common name that's forgotten?",
        "How would you introduce yourself to someone who's never met anyone from your culture/country?",
        "What experiences have shaped who you are more: your family background or your personal choices?",
        "Do you think people can truly reinvent themselves, or are we always connected to our roots?",
        "What's something from your childhood that still influences you today?"
    ],
    
    debate: "Your name is the most important part of your identity.",
    
    roleplay: [
        "You're at an international camp. Someone asks about your unusual name. Explain it naturally.",
        "You're at a networking event. Introduce yourself in a way that makes people remember you.",
        "You just moved to a new country. Tell your new neighbor about your background."
    ]
};

// ================= APP STATE =================
let currentStep = 0;
const totalSteps = 11;
let timerInterval = null;
let timeLeft = 60;
// === ПЕРЕМЕННЫЕ ДЛЯ Fill in the Blanks ===
let blankIndex = 0;
let blankScore = 0;
let blankSelected = false;

const fillInBlanksData = [
    {
        sentence: "My name is Alexander, but I ___ by Alex.",
        options: ["go", "am", "live", "shape"],
        correct: "go"
    },
    {
        sentence: "I was ___ after my grandmother.",
        options: ["shaped", "named", "driven", "rooted"],
        correct: "named"
    },
    {
        sentence: "My travels really ___ who I am today.",
        options: ["carry", "live", "shape", "background"],
        correct: "shape"
    },
    {
        sentence: "As the eldest, I feel I carry a ___.",
        options: ["passion", "roots", "legacy", "background"],
        correct: "legacy"
    }
];
// === НОВЫЕ ПЕРЕМЕННЫЕ ДЛЯ VOCABULARY BATTLE ===
let vocabBattleIndex = 0;
let vocabBattleScore = 0;
let vocabBattleShowAnswer = false;
let vocabBattleWords = [];
// ================= RENDER FUNCTIONS =================
function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function renderScreen() {
    updateProgress();
    const main = document.getElementById('mainContent');
    main.style.animation = 'none';
    main.offsetHeight; // trigger reflow
    main.style.animation = 'fadeIn 0.5s ease';

    // Update button text
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
        case 2: renderVocab(); break;
        case 3: renderVocabBattle(); break;
        case 4: renderFillInTheBlanks(); break; // ← ДОБАВИТЬ ЭТУ СТРОКУ
        case 5: renderStory(); break;
        case 6: renderDiscussion(); break;
        case 7: renderChallenge(); break;
        case 8: renderDebate(); break;
        case 9: renderRolePlay(); break;
        case 10: renderReflection(); break;
    }

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <div class="text-center">
            <span class="emoji">☕</span>
            <h1>Sip & Speak</h1>
            <h2>${lessonData.theme}</h2>
            <h3>${lessonData.title}</h3>
            <p class="mt-20" style="font-style: italic; color: var(--text-secondary);">${lessonData.subtitle}</p>
            <div class="question-box mt-20" style="border-left: none; background: rgba(166, 124, 82, 0.1);">
                <strong>Goal:</strong> ${lessonData.goal}
            </div>
            <p class="mt-20"><strong>Time:</strong> ~45-60 minutes</p>
            <p class="mt-20" style="font-size: 0.95rem;">Grab your coffee, get comfortable, and let's dive in.</p>
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

function renderVocab() {
    let cardsHtml = lessonData.vocab.map(item => `
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
        <span class="emoji">💬</span>
        <h2>Lexical Chunks</h2>
        <p>Tap each card to flip it. Read the definition and example aloud.</p>
        <div class="mt-20">${cardsHtml}</div>
    `;
}
function renderVocabBattle() {
    // Перемешиваем слова при первом запуске
    if (vocabBattleWords.length === 0) {
        vocabBattleWords = [...lessonData.vocab].sort(() => Math.random() - 0.5);
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

function renderStory() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">📖</span>
        <h2>Story Time</h2>
        <div class="question-box" style="border-left: none; background: rgba(255,255,255,0.9); line-height: 1.8;">
            <p>${lessonData.story}</p>
        </div>
        <h3 class="mt-20">Key expressions from the story:</h3>
        <ul style="padding-left: 20px; line-height: 2;">
            <li><strong>shaped who she is</strong> - influenced her identity</li>
            <li><strong>what drives her</strong> - what motivates her</li>
            <li><strong>conversation starter</strong> - something that begins a discussion</li>
        </ul>
        <p class="mt-20"><strong>Task:</strong> Read the story aloud, focusing on intonation and emotion.</p>
    `;
}

function renderDiscussion() {
    const randomQ = lessonData.discussion[Math.floor(Math.random() * lessonData.discussion.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🗣️</span>
        <h2>Deep Discussion</h2>
        <p>Discuss this question with your partner. Take turns and really explore the topic:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderDiscussion()" style="width: 100%;">🎲 Next Question</button>
    `;
}

function renderChallenge() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">⚡</span>
        <h2>Speed Speaking Challenge</h2>
        <p><strong>Your task:</strong> Speak for 60 seconds without stopping about who you are.</p>
        <div class="question-box mt-20" style="border-left: none;">
            <strong>You must include:</strong>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>At least 3 lexical chunks from today</li>
                <li>Your name and its story/meaning</li>
                <li>Where you're from</li>
                <li>What shapes who you are</li>
            </ul>
        </div>
        <div class="timer-display" id="timerDisplay">01:00</div>
        <div class="timer-btns">
            <button class="btn btn-primary" onclick="startTimer()">Start</button>
            <button class="btn btn-secondary" onclick="resetTimer()">Reset</button>
        </div>
    `;
}
function renderFillInTheBlanks() {
    // Если все предложения пройдены
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
    if (blankSelected) return; // Защита от повторного нажатия
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

    // Блокируем все кнопки вариантов
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
        <span class="emoji"></span>
        <h2>Role Play</h2>
        <div class="question-box">
            <strong style="color: var(--accent);">Situation:</strong><br><br>
            ${randomScenario}
        </div>
        <p class="mt-20"><strong>Tips:</strong></p>
        <ul style="padding-left: 20px; line-height: 2;">
            <li>Keep it natural and conversational</li>
            <li>Use filler words (Well, you know, actually, I mean)</li>
            <li>Include at least 2-3 lexical chunks from today</li>
            <li>Ask follow-up questions to keep the conversation going</li>
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
        <li>What's one new thing you learned about your partner today?</li>
        <li>Which expression from today will you use when introducing yourself?</li>
        <li>How would you describe yourself using 3 words from today's vocabulary?</li>
        <li>What's one personal goal you want to share with the group?</li>
        <li>What surprised you most about someone's story today?</li>
    </ul>
</div>
        
        <!-- ВОТ СЮДА ВСТАВЬ КНОПКУ: -->
        <button class="btn btn-primary mt-20" onclick="generateCheatSheet()" style="width: 100%;">
            📥 Download PDF Cheat Sheet
        </button>
        
        <div class="text-center mt-20">
    <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Cheers to your journey! ☕✨</h3>
    <p style="margin-top: 10px;">Keep sharing your story and connecting with others!</p>
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

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
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
        <div style="font-family: 'Quicksand', sans-serif; padding: 50px 40px; background: #FFF9F5; min-height: 100vh;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">☕</div>
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 3rem; color: #8B6F47; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.3rem; color: #D4A574; margin: 10px 0 0 0; font-weight: 600;">${lessonData.title}</h2>
                <div style="width: 60px; height: 3px; background: #8B6F47; margin: 15px auto 0 auto;"></div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #D4A574;">
                        <th style="padding: 12px 8px; text-align: center; width: 8%; font-size: 0.85rem; color: #8B6F47; font-weight: 700;">know</th>
                        <th style="padding: 12px 8px; text-align: left; width: 32%; font-size: 0.85rem; color: #8B6F47; font-weight: 700;">word/phrase</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #8B6F47; font-weight: 700;">definition</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #8B6F47; font-weight: 700;">example</th>
                    </tr>
                </thead>
                <tbody>
                    ${allWords.map((item, index) => `
                        <tr style="border-bottom: 1px solid #F0E6DC;">
                            <td style="padding: 14px 8px; text-align: center;">
                                <div style="width: 18px; height: 18px; border: 1.5px solid #D4A574; display: inline-block;"></div>
                            </td>
                            <td style="padding: 14px 8px; font-weight: 700; color: #8B6F47; font-size: 0.95rem;">${item.word}</td>
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