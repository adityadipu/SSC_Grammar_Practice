// ============================================
// GRAMMAR MASTER - Complete Application Logic
// ============================================

// === STATE ===
let currentExercises = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let submitted = false;
let currentTopic = 'rfv'; // 'rfv' or 'preposition'

// === INITIALIZATION ===
function init() {
    console.log("Initializing Grammar Master...");
    setupEventListeners();
    toggleRules();
    
    // Load RFV data by default
    switchTopic('rfv');
}

// === SWITCH TOPIC ===
function switchTopic(topic) {
    currentTopic = topic;
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    submitted = false;

    if (topic === 'rfv') {
        // Check if RFV data exists
        if (typeof rfvExercisesData !== 'undefined' && rfvExercisesData.length > 0) {
            currentExercises = [...rfvExercisesData];
        } else {
            console.error("RFV data not found! Check data_rfv.js");
            return;
        }
    } else if (topic === 'preposition') {
        // Check if Preposition data exists
        if (typeof prepositionExercisesData !== 'undefined' && prepositionExercisesData.length > 0) {
            currentExercises = [...prepositionExercisesData];
        } else {
            console.error("Preposition data not found! Check data_preposition.js");
            return;
        }
    }

    shuffleArray(currentExercises);
    displayExercise(0);
    updateStats();
    updateTotalExercises();
}

// === SHUFFLE ===
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// === DISPLAY EXERCISE ===
function displayExercise(index) {
    const exercise = currentExercises[index];
    if (!exercise) {
        console.error("Exercise not found at index:", index);
        return;
    }

    submitted = false;

    document.getElementById('exerciseBoard').textContent = exercise.board;
    document.getElementById('exerciseYear').textContent = exercise.year;
    document.getElementById('exerciseId').textContent = `#${exercise.id}`;

    displayWordBox(exercise.wordBox);

    let currentPassage = exercise.passage;
    
    exercise.blanks.forEach((blank, idx) => {
        const placeholder = `(${blank.letter}) ___`;
        const blankHTML = `<span class="blank-label">(${blank.letter})</span> <input type="text" class="blank-input" data-letter="${blank.letter}" data-index="${idx}" placeholder="..." autocomplete="off" />`;
        currentPassage = currentPassage.replace(placeholder, blankHTML);
    });

    document.getElementById('passageText').innerHTML = currentPassage;

    document.getElementById('questionCounter').textContent = `${index + 1} / ${currentExercises.length}`;
    document.getElementById('progressText').textContent = `${index + 1} / ${currentExercises.length}`;

    const progress = ((index + 1) / currentExercises.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    document.getElementById('resultsArea').classList.remove('show');
    document.getElementById('resultsList').innerHTML = '';

    document.getElementById('submitAllBtn').disabled = false;
    document.getElementById('submitAllBtn').textContent = '📤 Submit All Answers';

    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === currentExercises.length - 1;

    updateNavDots();

    setTimeout(() => {
        const firstInput = document.querySelector('.blank-input');
        if (firstInput) firstInput.focus();
    }, 100);
}

// === DISPLAY WORD BOX ===
function displayWordBox(words) {
    const container = document.getElementById('wordBoxContent');
    container.innerHTML = '';
    
    if (!words || words.length === 0) {
        document.getElementById('wordBox').classList.remove('active');
        document.getElementById('wordCount').textContent = 'No word bank';
        return;
    }
    
    words.forEach(word => {
        const tag = document.createElement('span');
        tag.className = 'word-tag';
        tag.textContent = word;
        tag.dataset.word = word;
        container.appendChild(tag);
    });

    document.getElementById('wordCount').textContent = `${words.length} words`;
    document.getElementById('wordBox').classList.add('active');
}

// === SUBMIT ALL ANSWERS ===
function submitAllAnswers() {
    if (submitted) return;

    const exercise = currentExercises[currentIndex];
    if (!exercise) return;

    const inputs = document.querySelectorAll('.blank-input');
    let correct = 0;
    let total = inputs.length;
    const results = [];

    if (total === 0) {
        console.error("No inputs found!");
        return;
    }

    inputs.forEach((input, index) => {
        const letter = input.dataset.letter;
        const userAnswer = input.value.trim();
        const correctAnswer = exercise.blanks[index].answer;
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

        if (isCorrect) {
            input.classList.add('correct');
            correct++;
        } else {
            input.classList.add('wrong');
        }
        input.classList.add('submitted');
        input.disabled = true;

        results.push({
            letter: letter,
            userAnswer: userAnswer || '(empty)',
            correctAnswer: correctAnswer,
            isCorrect: isCorrect,
            explanation: exercise.blanks[index].explanation
        });
    });

    correctCount += correct;
    score += correct;
    updateStats();

    displayResults(results, total);

    submitted = true;
    document.getElementById('submitAllBtn').textContent = '✅ Submitted';
    document.getElementById('submitAllBtn').disabled = true;

    inputs.forEach(input => {
        const word = input.value.trim();
        if (word) {
            markWordUsed(word);
        }
    });
}

// === DISPLAY RESULTS ===
function displayResults(results, total) {
    const area = document.getElementById('resultsArea');
    const list = document.getElementById('resultsList');
    const scoreDisplay = document.getElementById('resultsScore');

    area.classList.add('show');
    list.innerHTML = '';
    
    const correct = results.filter(r => r.isCorrect).length;
    scoreDisplay.textContent = `${correct} / ${total}`;

    results.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <span class="result-letter">(${result.letter})</span>
            <span class="result-status">${result.isCorrect ? '✅' : '❌'}</span>
            <span class="result-answer ${result.isCorrect ? 'correct' : 'wrong'}">${result.userAnswer}</span>
            ${!result.isCorrect ? `<span class="result-expected">→ <strong>${result.correctAnswer}</strong></span>` : ''}
            <button class="btn-explain" data-index="${index}">💡 Explain</button>
        `;
        list.appendChild(item);
    });

    document.querySelectorAll('.btn-explain').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const result = results[index];
            openExplanationModal(result);
        });
    });
}

// === MARK WORD AS USED ===
function markWordUsed(word) {
    const tags = document.querySelectorAll('.word-tag');
    tags.forEach(tag => {
        if (tag.dataset.word === word) {
            tag.classList.add('used');
        }
    });
}

// === CLEAR ALL ANSWERS ===
function clearAllAnswers() {
    if (submitted) return;
    
    const inputs = document.querySelectorAll('.blank-input');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'wrong', 'submitted');
        input.disabled = false;
    });
    
    document.getElementById('resultsArea').classList.remove('show');
    document.getElementById('resultsList').innerHTML = '';
    
    const tags = document.querySelectorAll('.word-tag');
    tags.forEach(tag => {
        tag.classList.remove('used');
    });
    
    const firstInput = document.querySelector('.blank-input');
    if (firstInput) firstInput.focus();
}

// === SHOW ALL HINTS ===
function showAllHints() {
    const exercise = currentExercises[currentIndex];
    if (!exercise) return;
    
    const inputs = document.querySelectorAll('.blank-input');
    
    inputs.forEach((input, index) => {
        if (!input.value.trim() && exercise.blanks[index]) {
            const hint = exercise.blanks[index].explanation;
            input.placeholder = `💡 ${hint.substring(0, 30)}...`;
            input.style.borderBottomColor = '#ed8936';
        }
    });
}

// === UPDATE STATS ===
function updateStats() {
    document.getElementById('totalScore').textContent = score;
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('correctCount').textContent = correctCount;
}

// === UPDATE TOTAL EXERCISES ===
function updateTotalExercises() {
    document.getElementById('totalExercises').textContent = currentExercises.length;
}

// === UPDATE NAV DOTS ===
function updateNavDots() {
    const container = document.getElementById('navDots');
    container.innerHTML = '';
    
    const total = currentExercises.length;
    const maxDots = Math.min(total, 20);
    
    for (let i = 0; i < maxDots; i++) {
        const dot = document.createElement('span');
        dot.className = 'nav-dot';
        if (i === currentIndex) dot.classList.add('active');
        if (i < currentIndex) dot.classList.add('done');
        container.appendChild(dot);
    }
}

// === SETUP EVENT LISTENERS ===
function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // NEW: Topic Selector Listener
    const topicSelector = document.getElementById('topicSelector');
    if (topicSelector) {
        topicSelector.addEventListener('change', function(e) {
            const topic = e.target.value;
            switchTopic(topic);
        });
    }
    
    const submitBtn = document.getElementById('submitAllBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            submitAllAnswers();
        });
    }
    
    const clearBtn = document.getElementById('clearAllBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function(e) {
            e.preventDefault();
            clearAllAnswers();
        });
    }
    
    const hintsBtn = document.getElementById('showAllHintsBtn');
    if (hintsBtn) {
        hintsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showAllHints();
        });
    }
    
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentIndex > 0) {
                currentIndex--;
                displayExercise(currentIndex);
            }
        });
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentIndex < currentExercises.length - 1) {
                currentIndex++;
                displayExercise(currentIndex);
            }
        });
    }
    
    const shuffleBtn = document.getElementById('shuffleBtn');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            shuffleArray(currentExercises);
            currentIndex = 0;
            score = 0;
            correctCount = 0;
            displayExercise(0);
            updateStats();
        });
    }
    
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentTopic === 'rfv') {
                currentExercises = [...rfvExercisesData];
            } else {
                currentExercises = [...prepositionExercisesData];
            }
            shuffleArray(currentExercises);
            currentIndex = 0;
            score = 0;
            correctCount = 0;
            displayExercise(0);
            updateStats();
        });
    }
    
    const filterSelect = document.getElementById('boardFilter');
    if (filterSelect) {
        filterSelect.addEventListener('change', function(e) {
            const board = e.target.value;
            let sourceData = [];
            if (currentTopic === 'rfv') {
                sourceData = rfvExercisesData;
            } else {
                sourceData = prepositionExercisesData;
            }

            if (board === 'all') {
                currentExercises = [...sourceData];
            } else {
                currentExercises = sourceData.filter(ex => 
                    ex.board.toLowerCase().includes(board)
                );
            }
            shuffleArray(currentExercises);
            currentIndex = 0;
            score = 0;
            correctCount = 0;
            displayExercise(0);
            updateStats();
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.target.classList.contains('blank-input') && e.key === 'Enter') {
            e.preventDefault();
            const inputs = document.querySelectorAll('.blank-input');
            const currentInputIndex = Array.from(inputs).indexOf(e.target);
            
            if (currentInputIndex < inputs.length - 1) {
                inputs[currentInputIndex + 1].focus();
            } else {
                if (!submitted) {
                    submitAllAnswers();
                }
            }
        }
    });
}

// === SETUP WORD BOX INTERACTIONS ===
function setupWordBoxInteractions() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('word-tag') && !e.target.classList.contains('used')) {
            const word = e.target.dataset.word;
            const emptyInputs = document.querySelectorAll('.blank-input:not(.submitted)');
            for (const input of emptyInputs) {
                if (!input.value.trim()) {
                    input.value = word;
                    input.focus();
                    break;
                }
            }
        }
    });
}

// === TOGGLE RULES ===
function toggleRules() {
    const toggleBtn = document.querySelector('.toggle-rules');
    const content = document.getElementById('rulesContent');
    
    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', function() {
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? 'grid' : 'none';
            toggleBtn.textContent = isHidden ? '−' : '+';
        });
    }
}

// === KEYBOARD SHORTCUTS ===
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        if (!submitted) {
            submitAllAnswers();
        }
    }
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        clearAllAnswers();
    }
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        showAllHints();
    }
    if (!e.target.classList.contains('blank-input')) {
        if (e.key === 'ArrowRight') {
            if (currentIndex < currentExercises.length - 1) {
                currentIndex++;
                displayExercise(currentIndex);
            }
        }
        if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                displayExercise(currentIndex);
            }
        }
    }
});

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing...");
    init();
});

// === OPEN EXPLANATION MODAL ===
function openExplanationModal(result) {
    const modal = document.getElementById('explanationModal');
    document.getElementById('modalLetter').textContent = `(${result.letter})`;
    document.getElementById('modalYourAnswer').textContent = result.userAnswer;
    document.getElementById('modalCorrectAnswer').textContent = result.correctAnswer;
    document.getElementById('modalExplanationText').textContent = result.explanation;

    modal.classList.add('show');
}

// === CLOSE EXPLANATION MODAL ===
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('explanationModal');
    const closeBtn = document.getElementById('closeModalBtn');

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
});
