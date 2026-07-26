// ================= LESSON 5: MUSIC THAT SHAPES US =================
const lessonData = {
    title: "Music That Shapes Us",
    subtitle: "Sounds, rhythms, and memories",
    duration: "60-75 min",
    level: "B2-C1",
    theme: "Music & Identity",
    emoji: "",
    
    vocab: [
        { word: "soundtrack", def: "music that accompanies a particular event or period", ex: "This song was the soundtrack to my teenage years." },
        { word: "nostalgic", def: "feeling happy and slightly sad when remembering the past", ex: "That melody makes me feel nostalgic about summer holidays." },
        { word: "upbeat", def: "cheerful and optimistic", ex: "I love listening to upbeat music in the morning." },
        { word: "melancholy", def: "a feeling of gentle sadness, often in a beautiful way", ex: "There's a certain melancholy in this composition." },
        { word: "rhythm", def: "a strong, regular, repeated pattern of sound", ex: "The rhythm of this song makes you want to dance." },
        { word: "lyrics", def: "the words of a song", ex: "I can't understand the lyrics - they're too quiet." },
        { word: "genre", def: "a particular style or category of music", ex: "What's your favorite music genre?" },
        { word: "playlist", def: "a list of songs prepared for playing in sequence", ex: "I created a playlist for my workout sessions." },
        { word: "melody", def: "a sequence of single notes that is musically satisfying", ex: "The melody is so catchy, I can't stop humming it." },
        { word: "harmony", def: "the combination of simultaneously sounded musical notes", ex: "The vocal harmony in this song is beautiful." },
        { word: "tempo", def: "the speed or pace of a given piece", ex: "The tempo increases in the chorus." },
        { word: "beat", def: "the basic unit of musical time", ex: "I love dancing to the beat of this song." }
    ],
    
    vocabCategories: {
        "Music Genres": [
            { word: "pop", def: "popular music with catchy melodies", ex: "She loves listening to pop music." },
            { word: "rock", def: "music with strong rhythm and electric guitars", ex: "Classic rock never gets old." },
            { word: "jazz", def: "music with improvisation and complex harmonies", ex: "Jazz clubs have a special atmosphere." },
            { word: "classical", def: "traditional orchestral music", ex: "Classical music helps me concentrate." },
            { word: "hip-hop", def: "music featuring rapping and rhythmic beats", ex: "Hip-hop culture has influenced fashion worldwide." },
            { word: "electronic", def: "music produced using electronic instruments", ex: "Electronic dance music is popular at festivals." },
            { word: "indie", def: "music produced independently from commercial record labels", ex: "I prefer indie bands to mainstream artists." },
            { word: "R&B", def: "rhythm and blues, combining jazz and gospel", ex: "R&B has evolved significantly over the decades." }
        ],
        "Emotions & Music": [
            { word: "energetic", def: "showing great energy and enthusiasm", ex: "This track is so energetic!" },
            { word: "soothing", def: "calming and relaxing", ex: "Her voice is incredibly soothing." },
            { word: "powerful", def: "having great emotional impact", ex: "That was a powerful performance." },
            { word: "mellow", def: "soft, smooth, and relaxed", ex: "I enjoy mellow jazz on Sunday mornings." },
            { word: "intense", def: "extremely strong or extreme", ex: "The concert was incredibly intense." },
            { word: "sentimental", def: "prompted by feelings of tenderness or sadness", ex: "This song makes me feel sentimental." }
        ],
        "Music Actions": [
            { word: "to jam", def: "to play music informally", ex: "Let's jam together this weekend!" },
            { word: "to vibe", def: "to feel a connection with music", ex: "I'm really vibing with this song." },
            { word: "to binge-listen", def: "to listen to many songs continuously", ex: "I binge-listened to the entire album." },
            { word: "to resonate", def: "to evoke a feeling of shared emotion", ex: "These lyrics really resonate with me." },
            { word: "to discover", def: "to find music for the first time", ex: "I discovered this artist through a friend." },
            { word: "to perform", def: "to present music to an audience", ex: "She performs at local cafes every weekend." }
        ],
        "Music Industry": [
            { word: "album", def: "a collection of songs released together", ex: "Their new album has 12 tracks." },
            { word: "single", def: "a song released separately from an album", ex: "The single topped the charts." },
            { word: "concert", def: "a live music performance", ex: "I bought tickets for the concert." },
            { word: "venue", def: "a place where concerts happen", ex: "The venue has excellent acoustics." },
            { word: "audience", def: "the people who listen to a performance", ex: "The audience cheered loudly." }
        ]
    }
};

let currentStep = 0;
let currentCategory = 0;
let totalSteps = 9;
let selectedGroupSize = 'pair'; // 'solo', 'pair', 'group'
// === ПЕРЕМЕННЫЕ ДЛЯ Fill in the Blanks (Lesson 5 - Music Theme) ===
let blankIndex = 0;
let blankScore = 0;
let blankSelected = false;

const fillInBlanksData = [
    {
        context: "🎧 Morning Vibes",
        sentence: "I love listening to ___ music in the morning to start my day right.",
        options: ["melancholy", "upbeat", "mellow", "intense"],
        correct: "upbeat"
    },
    {
        context: "🎸 Nostalgia",
        sentence: "This song was the absolute ___ to my teenage years.",
        options: ["playlist", "genre", "soundtrack", "rhythm"],
        correct: "soundtrack"
    },
    {
        context: "🎤 Songwriting",
        sentence: "The ___ in this song is so catchy, I can't stop humming it.",
        options: ["lyrics", "beat", "harmony", "melody"],
        correct: "melody"
    },
    {
        context: "💭 Deep Connection",
        sentence: "These lyrics really ___ with me on a personal level.",
        options: ["jam", "vibe", "resonate", "perform"],
        correct: "resonate"
    }
];
// ================= PROGRESS SAVE/LOAD =================
function saveProgress() {
    const progress = {
        lesson: 'lesson5',
        step: currentStep,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('sipSpeakProgress', JSON.stringify(progress));
    showProgressSaved();
}

function loadProgress() {
    const saved = localStorage.getItem('sipSpeakProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        if (progress.lesson === 'lesson5') {
            currentStep = progress.step;
            return true;
        }
    }
    return false;
}

function showProgressSaved() {
    const indicator = document.getElementById('progressSaved');
    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 2000);
}

function clearProgress() {
    if (confirm('Clear saved progress?')) {
        localStorage.removeItem('sipSpeakProgress');
        currentStep = 0;
        renderScreen();
    }
}

// ================= NAVIGATION =================
function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        renderScreen();
        saveProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Last step - go back to home
        localStorage.removeItem('sipSpeakProgress');
        window.location.href = 'index.html';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderScreen();
        saveProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ================= RENDER FUNCTIONS =================
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
        case 4: renderListeningActivity(); break;
        case 5: renderGroupDiscussion(); break;
        case 6: renderFillInTheBlanks(); break; // ← ДОБАВИТЬ
        case 7: renderVocabBattle(); break;
        case 8: renderReflection(); break;
    }
    
    // ВСЕГДА ОБНОВЛЯЕМ КНОПКИ
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
    if (currentStep === 0) prevBtn.style.display = 'none';
    if (currentStep === totalSteps - 1) nextBtn.style.display = 'none';
}

function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎵</span>
        <h2 style="color: #B20B13;">Welcome to Lesson 5!</h2>
        <h1 style="font-family: 'Caveat', cursive; font-size: 3rem; color: #6E4644; margin: 20px 0;">Music That Shapes Us</h1>
        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 30px;">
            Explore how music influences our identity, memories, and emotions
        </p>
        
        <div class="question-box mt-20" style="background: linear-gradient(135deg, #FDECDC 0%, #FFE5D0 100%); border-left: 4px solid #B20B13;">
            <h3 style="color: #6E4644; margin-top: 0;"> Lesson Details</h3>
            <p><strong>Duration:</strong> 60-75 minutes</p>
            <p><strong>Level:</strong> B2-C1</p>
            <p><strong>Theme:</strong> Music & Identity</p>
            <p><strong>Format:</strong> Flexible (solo, pairs, or groups)</p>
        </div>
        
        <div class="mt-20" style="background: rgba(42,69,98,0.1); padding: 20px; border-radius: 15px;">
            <p style="margin: 0; color: #2A4562;"><strong> Tip:</strong> Your progress is automatically saved as you go!</p>
        </div>
    `;
}

function renderWarmUp() {
    const questions = [
        "What song instantly makes you happy?",
        "What music did you love 5 years ago vs now?",
        "Can you describe your perfect playlist?",
        "What song reminds you of a specific person?",
        "If your life had a soundtrack, what genre would it be?"
    ];
    
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji"></span>
        <h2 style="color: #B20B13;">Warm-up: Music & Memories</h2>
        <p>Discuss with your partner(s) or reflect individually:</p>
        
        <div class="question-box mt-20" style="background: linear-gradient(135deg, #B20B13 0%, #B41A1A 100%); color: white; border: none;">
            <p style="font-size: 1.2rem; margin: 0; font-weight: 500;">${randomQ}</p>
        </div>
        
        <div class="mt-20" style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
            <button onclick="setGroupSize('solo')" style="
                padding: 12px 25px;
                border: 2px solid #B20B13;
                background: ${selectedGroupSize === 'solo' ? '#B20B13' : 'white'};
                color: ${selectedGroupSize === 'solo' ? 'white' : '#B20B13'};
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Quicksand', sans-serif;
                font-weight: 600;
                font-size: 0.95rem;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            "> Solo</button>
            
            <button onclick="setGroupSize('pair')" style="
                padding: 12px 25px;
                border: 2px solid #B20B13;
                background: ${selectedGroupSize === 'pair' ? '#B20B13' : 'white'};
                color: ${selectedGroupSize === 'pair' ? 'white' : '#B20B13'};
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Quicksand', sans-serif;
                font-weight: 600;
                font-size: 0.95rem;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">👥 Pair</button>
            
            <button onclick="setGroupSize('group')" style="
                padding: 12px 25px;
                border: 2px solid #B20B13;
                background: ${selectedGroupSize === 'group' ? '#B20B13' : 'white'};
                color: ${selectedGroupSize === 'group' ? 'white' : '#B20B13'};
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Quicksand', sans-serif;
                font-weight: 600;
                font-size: 0.95rem;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">👥👥 Group (3+)</button>
        </div>
        
        <button class="btn btn-secondary mt-20" onclick="renderWarmUp()" style="width: 100%;">🎲 Shuffle Question</button>
    `;
}

function setGroupSize(size) {
    selectedGroupSize = size;
    renderWarmUp();
}

function renderVocabCategories() {
    const categories = Object.keys(lessonData.vocabCategories);
    let html = `
        <span class="emoji">📚</span>
        <h2 style="color: #B20B13;">Vocabulary Overview</h2>
        <p>We'll explore music vocabulary across <strong>${categories.length} categories</strong></p>
        <div class="mt-20">
    `;
    
    categories.forEach((cat, idx) => {
        const count = lessonData.vocabCategories[cat].length;
        html += `
            <div class="question-box" style="padding: 20px; margin-bottom: 15px; background: linear-gradient(135deg, #FDECDC 0%, #FFE5D0 100%); border-left: 4px solid #6E4644;">
                <strong style="color: #B20B13; font-size: 1.1rem;">${cat}</strong>
                <span style="float: right; color: #2A4562; font-weight: 600;">${count} words</span>
            </div>
        `;
    });
    
    html += `</div>`;
    
    document.getElementById('mainContent').innerHTML = html;
}

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

function renderListeningActivity() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎶</span>
        <h2 style="color: #B20B13;">Active Listening</h2>
        <p>Choose a song that's meaningful to you and analyze it:</p>
        
        <div class="group-task-card" style="background: linear-gradient(135deg, #2A4562 0%, #1a3045 100%); color: white; border: none;">
            <h3 style="font-family: 'Caveat', cursive; font-size: 2rem; margin-top: 0; text-align: center;">Your Song Analysis</h3>
            
            <div style="margin-top: 25px; line-height: 2.2;">
                <p><strong>🎵 Title:</strong> _______________________</p>
                <p><strong> Artist:</strong> _______________________</p>
                <p><strong>🎼 Genre:</strong> _______________________</p>
                <p><strong>💭 Mood/Emotion:</strong> _______________________</p>
                <p><strong> What story does it tell?</strong><br>_______________________</p>
                <p><strong>🎯 Why is it meaningful to you?</strong><br>_______________________</p>
                <p><strong> Favorite lyrics:</strong><br>_______________________</p>
            </div>
        </div>
        
        <div class="group-task-card">
            <h4 style="color: #6E4644; margin-top: 0;">📝 Task Options:</h4>
            <ul style="margin: 0; padding-left: 20px; line-height: 2;">
                <li><strong>Solo:</strong> Fill out the analysis and reflect on your musical taste</li>
                <li><strong>Pair:</strong> Exchange analyses - find similarities and differences</li>
                <li><strong>Group:</strong> Share your songs and create a collaborative playlist</li>
            </ul>
        </div>
        
        <div class="mt-20" style="background: rgba(178,11,19,0.1); padding: 20px; border-radius: 15px; border-left: 4px solid #B20B13;">
            <p style="margin: 0; color: #6E4644;"><strong>💡 Tip:</strong> Use vocabulary from today's lesson: <em>soundtrack, nostalgic, upbeat, melody, lyrics</em></p>
        </div>
    `;
}

function renderGroupDiscussion() {
    const tasks = {
        solo: [
            "Reflect: How has your music taste changed over time?",
            "Create a playlist that represents different chapters of your life",
            "Write about a song that changed your perspective"
        ],
        pair: [
            "Compare your music preferences - what's similar/different?",
            "Teach your partner about your favorite genre",
            "Create a shared playlist together"
        ],
        group: [
            "Debate: Is music today better or worse than before?",
            "Discuss: Can music bring people from different cultures together?",
            "Create a group playlist representing everyone's taste"
        ]
    };
    
    const currentTasks = tasks[selectedGroupSize];
    const randomTask = currentTasks[Math.floor(Math.random() * currentTasks.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">💬</span>
        <h2 style="color: #B20B13;">Group Discussion</h2>
        <p>Format: <strong>${selectedGroupSize === 'solo' ? 'Individual Reflection' : selectedGroupSize === 'pair' ? 'Pair Work' : 'Group Discussion'}</strong></p>
        
        <div class="question-box mt-20" style="background: linear-gradient(135deg, #2A4562 0%, #1a3045 100%); color: white; border: none;">
            <p style="font-size: 1.1rem; margin: 0;">${randomTask}</p>
        </div>
        
        <div class="mt-20">
            <h4 style="color: #6E4644;">Other options for ${selectedGroupSize === 'solo' ? 'you' : selectedGroupSize === 'pair' ? 'pairs' : 'groups'}:</h4>
            <ul style="line-height: 2.2;">
                ${currentTasks.filter(t => t !== randomTask).map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
        
        <button class="btn btn-secondary mt-20" onclick="renderGroupDiscussion()" style="width: 100%;"> Shuffle Task</button>
    `;
}

function renderVocabBattle() {
    const shuffled = [...lessonData.vocab].sort(() => Math.random() - 0.5);
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎯</span>
        <h2 style="color: #B20B13;">Vocabulary Challenge</h2>
        <p>Test your knowledge! Try to recall definitions without looking.</p>
        
        <div class="mt-20">
            ${shuffled.map((item, idx) => `
                <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 180px; position: relative;">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" style="position: relative; padding: 20px;">
                            <span style="font-family: 'Comfortaa', cursive; font-size: 1.3rem; color: #B20B13; font-weight: 600;">${item.word}</span>
                            <p style="margin-top: 15px; font-size: 0.85rem; color: var(--text-secondary);">Tap to check yourself</p>
                        </div>
                        <div class="flip-card-back" style="position: relative; padding: 20px;">
                            <p style="font-weight: 600; color: #6E4644; margin-bottom: 10px; font-size: 0.95rem;">${item.def}</p>
                            <p style="font-style: italic; color: var(--text-secondary); font-size: 0.85rem;">"${item.ex}"</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="text-center mt-20">
            <p style="color: #6E4644; font-size: 0.9rem; font-style: italic;">💡 Tip: Tap on each card to reveal the definition</p>
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
function renderReflection() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji"></span>
        <h2>Wrap-up & Reflection</h2>
        <p>Reflect with your partner:</p>
        <div class="question-box mt-20" style="border-left: none;">
            <ul style="padding-left: 20px; line-height: 2.2;">
                <li>What song would you add to today's lesson playlist?</li>
                <li>Which music vocabulary word describes your mood right now?</li>
                <li>How does music help you in daily life?</li>
                <li>Share a memory connected to a specific song.</li>
                <li>What role does music play in your identity?</li>
            </ul>
        </div>
        
        <button class="btn btn-primary mt-20" onclick="generateCheatSheet()" style="width: 100%; background: #B20B13; color: white; border: none; padding: 15px 30px; border-radius: 12px; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 1rem; cursor: pointer;">
            📥 Download PDF Cheat Sheet
        </button>
        
        <button class="btn btn-secondary mt-20" onclick="generateHomeworkPDF()" style="width: 100%; background: white; color: #B20B13; border: 2px solid #B20B13; padding: 15px 30px; border-radius: 12px; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 1rem; cursor: pointer; margin-top: 15px;">
             Download Homework PDF
        </button>

        <div class="text-center mt-20">
            <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Keep the music playing! 🎶✨</h3>
            <p style="margin-top: 10px;">Let music be the soundtrack to your English journey!</p>
        </div>
    `;
}
// ================= TEXT TO SPEECH =================
function speakText(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voices = window.speechSynthesis.getVoices();
    const bestVoice = voices.find(v => 
        v.name.includes('Google UK English Female') ||
        v.name.includes('Microsoft Zira') ||
        v.name.includes('Samantha')
    );
    
    if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
    } else {
        utterance.lang = 'en-GB';
    }
    
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
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
        background: #B20B13; color: white; padding: 15px 30px;
        border-radius: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000; font-family: 'Quicksand', sans-serif; font-size: 0.95rem;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

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
                <div style="font-size: 3rem; margin-bottom: 10px;"></div>
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 3rem; color: #B20B13; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.3rem; color: #F2A6B9; margin: 10px 0 0 0; font-weight: 600;">${lessonData.title}</h2>
                <div style="width: 60px; height: 3px; background: #B20B13; margin: 15px auto 0 auto;"></div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #F2A6B9;">
                        <th style="padding: 12px 8px; text-align: center; width: 8%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">know</th>
                        <th style="padding: 12px 8px; text-align: left; width: 32%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">word/phrase</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">definition</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">example</th>
                    </tr>
                </thead>
                <tbody>
                    ${allWords.map((item, index) => `
                        <tr style="border-bottom: 1px solid #FCE4EC;">
                            <td style="padding: 14px 8px; text-align: center;">
                                <div style="width: 18px; height: 18px; border: 1.5px solid #F2A6B9; display: inline-block;"></div>
                            </td>
                            <td style="padding: 14px 8px; font-weight: 700; color: #B20B13; font-size: 0.95rem;">${item.word}</td>
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
            <div style="text-align: center; margin-bottom: 20px; border-bottom: 3px solid #B20B13; padding-bottom: 12px;">
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 2.2rem; color: #B20B13; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.1rem; color: #F2A6B9; margin: 4px 0 0 0; font-weight: 600;">${lessonData.title} — Worksheet</h2>
                <p style="font-size: 0.8rem; color: #999; margin: 4px 0 0 0;">Name: ___________________________ Date: ____________</p>
            </div>

            <!-- WORD BANK -->
            <div style="background: #FFF0F3; border: 2px dashed #F2A6B9; border-radius: 10px; padding: 12px; margin-bottom: 18px; page-break-inside: avoid;">
                <h4 style="margin: 0 0 8px 0; color: #B20B13; font-size: 0.9rem;">🎵 Word Bank:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;">
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">soundtrack</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">nostalgic</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">upbeat</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">melancholy</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">melody</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">lyrics</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">genre</span>
                    <span style="background: white; padding: 4px 10px; border-radius: 12px; border: 1px solid #F2A6B9; font-size: 0.85rem; color: #B20B13; font-weight: 600;">playlist</span>
                </div>
            </div>

            <!-- EXERCISE 1 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #B20B13; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #B20B13; padding-left: 8px;">Exercise 1: Fill in the Blanks</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Complete the sentences using words from the Word Bank.</p>
                <div style="line-height: 2; font-size: 0.9rem; color: #333;">
                    <p style="margin: 5px 0;">1. This song was the _______________ to my teenage years.</p>
                    <p style="margin: 5px 0;">2. That melody makes me feel _______________ about summer holidays.</p>
                    <p style="margin: 5px 0;">3. I love listening to _______________ music in the morning.</p>
                    <p style="margin: 5px 0;">4. There's a certain _______________ in this beautiful composition.</p>
                    <p style="margin: 5px 0;">5. The _______________ is so catchy, I can't stop humming it.</p>
                    <p style="margin: 5px 0;">6. I can't understand the _______________ — they're too quiet.</p>
                    <p style="margin: 5px 0;">7. What's your favorite music _______________ — pop, rock, or jazz?</p>
                    <p style="margin: 5px 0;">8. I created a _______________ for my workout sessions.</p>
                </div>
            </div>

            <!-- EXERCISE 2 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #B20B13; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #B20B13; padding-left: 8px;">Exercise 2: Match the Word with Its Definition</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 10px 0;">Connect each word (1-5) with its correct definition (A-E).</p>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                    <div style="width: 48%;">
                        <p style="margin: 4px 0;"><strong>Words:</strong></p>
                        <p style="margin: 4px 0;">1. soundtrack</p>
                        <p style="margin: 4px 0;">2. nostalgic</p>
                        <p style="margin: 4px 0;">3. upbeat</p>
                        <p style="margin: 4px 0;">4. melody</p>
                        <p style="margin: 4px 0;">5. lyrics</p>
                    </div>
                    <div style="width: 48%;">
                        <p style="margin: 4px 0;"><strong>Definitions:</strong></p>
                        <p style="margin: 4px 0;">A. cheerful and optimistic</p>
                        <p style="margin: 4px 0;">B. the words of a song</p>
                        <p style="margin: 4px 0;">C. music that accompanies a particular event</p>
                        <p style="margin: 4px 0;">D. a sequence of single notes that is musically satisfying</p>
                        <p style="margin: 4px 0;">E. feeling happy and slightly sad remembering the past</p>
                    </div>
                </div>
            </div>

            <!-- EXERCISE 3 -->
            <div style="margin-bottom: 18px; page-break-inside: avoid;">
                <h3 style="color: #B20B13; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #B20B13; padding-left: 8px;">Exercise 3: Write Your Own Sentences</h3>
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
                <h3 style="color: #B20B13; font-size: 1rem; margin: 0 0 8px 0; border-left: 4px solid #B20B13; padding-left: 8px;">Exercise 4: Mini Writing Task</h3>
                <p style="font-size: 0.85rem; color: #666; margin: 0 0 8px 0;">Write a short paragraph (5-7 sentences). Use at least <strong>4 words</strong> from the Word Bank.</p>
                <div style="background: #FFF0F3; border-radius: 8px; padding: 8px; margin-bottom: 8px; border-left: 3px solid #F2A6B9;">
                    <p style="margin: 0; font-size: 0.9rem; color: #B20B13; font-weight: 600; font-style: italic;">"Describe a song that is meaningful to you. Why do you love it? What memories does it bring back?"</p>
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
                <p style="margin: 0; color: #B20B13; font-size: 0.8rem; font-style: italic;">Sip & Speak — Learn Today, Speak Tomorrow, Succeed Forever! 🎵</p>
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
// ================= INIT =================
window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

document.addEventListener('DOMContentLoaded', () => {
    const loaded = loadProgress();
    if (loaded && confirm('Continue from where you left off?')) {
        renderScreen();
    } else {
        currentStep = 0;
        renderScreen();
    }
});
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
