let timerInterval;
let timeRemaining = 100 * 60; // 1 hour 40 minutes = 6000 seconds
let userAnswers = {};
let currentPage = 1;
const totalPages = 10;
        const questions = [
    
    {
        type: 'mcq',
        question: 'The process of learning acceptable behavior in society is called:',
        options: ['Civilization', 'Orientation', 'Discipline', 'Socialization'],
        correct: 'Socialization'
    },
    {
        type: 'mcq',
        question: 'A family consisting of one man and one wife is called:',
        options: ['Polygamy', 'Extended family', 'Monogamy', 'Nuclear family'],
        correct: 'Monogamy'
    },
    {
        type: 'mcq',
        question: 'Marriage between people of different tribes is known as:',
        options: ['Intra-marriage', 'Group marriage', 'Intermarriage', 'Inter-family marriage'],
        correct: 'Intermarriage'
    },
    {
        type: 'mcq',
        question: 'The element that has only one electron is:',
        options: ['Neon', 'Helium', 'Hydrogen', 'Argon'],
        correct: 'Hydrogen'
    },
    {
        type: 'mcq',
        question: 'The noble gases belong to which group of the periodic table?',
        options: ['Group 1', 'Group 18', 'Group 7', 'Group 4'],
        correct: 'Group 18'
    },
    {
        type: 'mcq',
        question: 'The subatomic particles involved in bonding are:',
        options: ['Neutrons', 'Protons', 'Electrons', 'Nucleons'],
        correct: 'Electrons'
    },
    {
        type: 'mcq',
        question: 'The maximum number of electrons in the N-shell is:',
        options: ['8', '14', '18', '32'],
        correct: '18'
    },
    {
        type: 'mcq',
        question: 'Nigeria is located in which continent?',
        options: ['Asia', 'Europe', 'Africa', 'South America'],
        correct: 'Africa'
    },
    {
        type: 'mcq',
        question: 'The figure of speech showing rising actions is:',
        options: ['Metaphor', 'Irony', 'Climax', 'Hyperbole'],
        correct: 'Climax'
    },
    {
        type: 'mcq',
        question: 'Nigerian Pidgin is a type of:',
        options: ['Indigenous language', 'Foreign language', 'Creole/Pidgin', 'Classical language'],
        correct: 'Creole/Pidgin'
    },
    {
        type: 'mcq',
        question: 'Communication without spoken words is called:',
        options: ['Written communication', 'Body language', 'Dictation', 'Projection'],
        correct: 'Body language'
    },
    {
        type: 'mcq',
        question: 'The law enforcement agency maintaining peace is the:',
        options: ['FRSC', 'Police', 'Customs', 'Immigration'],
        correct: 'Police'
    },
    {
        type: 'mcq',
        question: 'Rainfall, snow and hail are examples of:',
        options: ['Evaporation', 'Condensation', 'Precipitation', 'Distillation'],
        correct: 'Precipitation'
    },
    {
        type: 'mcq',
        question: 'Elements in group 1 are called:',
        options: ['Alkali metals', 'Halogens', 'Transition metals', 'Noble gases'],
        correct: 'Alkali metals'
    },
    {
        type: 'mcq',
        question: 'Community health services are mainly provided to the:',
        options: ['Community', 'Teachers', 'Soldiers', 'Politicians'],
        correct: 'Community'
    },
    {
        type: 'mcq',
        question: 'The arm of government that interprets the law is the:',
        options: ['Executive', 'Judiciary', 'Legislature', 'Tribunal'],
        correct: 'Judiciary'
    },
    {
        type: 'mcq',
        question: '“Who wrote the letter?” – the word who is a:',
        options: ['Noun', 'Verb', 'Relative pronoun', 'Interjection'],
        correct: 'Relative pronoun'
    },
    {
        type: 'mcq',
        question: 'A community health practitioner works directly with the:',
        options: ['People', 'Government', 'Hospitals', 'Lawyers'],
        correct: 'People'
    },
    {
        type: 'mcq',
        question: 'The Nigerian court system is controlled by the:',
        options: ['Executive', 'Judiciary', 'Legislature', 'Senate'],
        correct: 'Judiciary'
    },
    {
        type: 'mcq',
        question: 'A marriage where a man marries many wives is called:',
        options: ['Polyandry', 'Group marriage', 'Polygyny', 'Inter-marriage'],
        correct: 'Polygyny'
    },
    {
        type: 'mcq',
        question: 'The phrase “who is tall” is an example of:',
        options: ['Noun phrase', 'Adjective clause', 'Adverbial phrase', 'Main clause'],
        correct: 'Adjective clause'
    },
    {
        type: 'mcq',
        question: 'Human rights violations are monitored by:',
        options: ['Customs', 'Amnesty International', 'NDLEA', 'WAEC'],
        correct: 'Amnesty International'
    },
    {
        type: 'mcq',
        question: 'In electron configuration, electrons are shown as:',
        options: ['Subscript', 'Coefficients', 'Brackets', 'Superscript'],
        correct: 'Superscript'
    },
    {
        type: 'mcq',
        question: 'Reducing long passages into short forms is called:',
        options: ['Summarizing', 'Editing', 'Quoting', 'Drafting'],
        correct: 'Summarizing'
    },
    {
        type: 'mcq',
        question: 'A narrow hilltop is called a:',
        options: ['Spur', 'Ridge', 'Basin', 'Plateau'],
        correct: 'Ridge'
    },
    {
        type: 'mcq',
        question: 'The direction of one point from another is called:',
        options: ['Bearings', 'Gradient', 'Scale', 'Latitude'],
        correct: 'Bearings'
    },
    {
        type: 'mcq',
        question: '“To eat” is an example of:',
        options: ['Noun', 'Adjective', 'Infinitive', 'Participle'],
        correct: 'Infinitive'
    },
    {
        type: 'mcq',
        question: 'Glucose is found in:',
        options: ['Monosaccharides', 'Disaccharides', 'Polysaccharides', 'Lipids'],
        correct: 'Monosaccharides'
    },
    {
        type: 'mcq',
        question: 'A cross involving one pair of traits is a:',
        options: ['Dihybrid cross', 'Hybrid cross', 'Monohybrid cross', 'Polyhybrid cross'],
        correct: 'Monohybrid cross'
    },
    {
        type: 'mcq',
        question: 'A statement that is either true or false is a:',
        options: ['Sentence', 'Question', 'Proposition', 'Report'],
        correct: 'Proposition'
    },
    {
        type: 'mcq',
        question: 'Materials that allow electricity to pass are:',
        options: ['Insulators', 'Semi-conductors', 'Conductors', 'Resistors'],
        correct: 'Conductors'
    },
    {
        type: 'mcq',
        question: 'The reflection of sound is known as:',
        options: ['Pitch', 'Vibration', 'Echo', 'Tone'],
        correct: 'Echo'
    },
    {
        type: 'mcq',
        question: 'The amplitude of a sound determines its:',
        options: ['Loudness', 'Pitch', 'Speed', 'Echo'],
        correct: 'Loudness'
    },
    {
        type: 'mcq',
        question: 'The disease caused by a polio virus is:',
        options: ['Measles', 'Polio', 'TB', 'HIV'],
        correct: 'Polio'
    },
    {
        type: 'mcq',
        question: 'A major fishing tool is the:',
        options: ['Net', 'Basket', 'Hook', 'Rod'],
        correct: 'Net'
    },
    {
        type: 'mcq',
        question: 'The layer of the atmosphere containing the ozone layer is the:',
        options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
        correct: 'Stratosphere'
    },
    {
        type: 'mcq',
        question: 'The punctuation mark used to show possession is:',
        options: ['Colon', 'Comma', 'Apostrophe', 'Hyphen'],
        correct: 'Apostrophe'
    },
    {
        type: 'mcq',
        question: 'The total value of goods and services produced is:',
        options: ['GNP', 'CPI', 'GDP', 'VAT'],
        correct: 'GDP'
    },
    {
        type: 'mcq',
        question: 'The practice of buying and selling people is:',
        options: ['Colonialism', 'Emancipation', 'Slavery', 'Migration'],
        correct: 'Slavery'
    },
    {
        type: 'mcq',
        question: 'Temperature decreases with:',
        options: ['Rainfall', 'Sunshine', 'Pressure', 'Altitude'],
        correct: 'Altitude'
    },
    {
        type: 'mcq',
        question: 'A sentence that gives a command is:',
        options: ['Imperative', 'Declarative', 'Interrogative', 'Exclamatory'],
        correct: 'Imperative'
    },
    {
        type: 'mcq',
        question: 'A group of words with a subject and predicate is a:',
        options: ['Phrase', 'Statement', 'Clause', 'Verse'],
        correct: 'Clause'
    },
    {
        type: 'mcq',
        question: 'The government annual financial plan is called:',
        options: ['Budget', 'Levy', 'Revenue', 'Balance'],
        correct: 'Budget'
    },
    {
        type: 'mcq',
        question: 'A person walking along the road is a:',
        options: ['Pedestrian', 'Cyclist', 'Passenger', 'Walker'],
        correct: 'Pedestrian'
    },
    {
        type: 'mcq',
        question: 'A device used to vary resistance in a circuit is a:',
        options: ['Diode', 'Rheostat', 'Fuse', 'Generator'],
        correct: 'Rheostat'
    },
    {
        type: 'mcq',
        question: 'Heat transfer through solids is called:',
        options: ['Radiation', 'Convection', 'Conduction', 'Absorption'],
        correct: 'Conduction'
    },
    {
        type: 'mcq',
        question: 'The process by which proteins are formed in cells is:',
        options: ['Protein synthesis', 'Translation', 'Cell division', 'Mutation'],
        correct: 'Protein synthesis'
    },
    {
        type: 'mcq',
        question: 'Information represented using bars is shown on a:',
        options: ['Pie chart', 'Line graph', 'Bar chart', 'Histogram'],
        correct: 'Bar chart'
    },
    {
        type: 'mcq',
        question: 'Energy obtained from moving air is:',
        options: ['Solar energy', 'Wind energy', 'Wave energy', 'Hydro-power'],
        correct: 'Wind energy'
    },
    {
        type: 'mcq',
        question: 'The organ that filters blood in the body is the:',
        options: ['Kidneys', 'Liver', 'Pancreas', 'Lungs'],
        correct: 'Kidneys'
    },
    { type: 'fill', question: 'Difficulty blending with others is called ________.', correct: 'Social maladjustment' },
    { type: 'fill', question: 'A large family including uncles and grandparents is called ________.', correct: 'Extended family' },
    { type: 'fill', question: 'The supreme law guiding a nation is the ________.', correct: 'Constitution' },
    { type: 'fill', question: 'Agencies responsible for maintaining law and order are ________.', correct: 'Law enforcement' },
    { type: 'fill', question: 'The view of the majority in a society is called ________.', correct: 'Public opinion' },
    { type: 'fill', question: 'Government by the people is called ________.', correct: 'Democracy' },
    { type: 'fill', question: 'A book that gives word meanings is a ________.', correct: 'Dictionary' },
    { type: 'fill', question: 'A wise saying that teaches a lesson is a ________.', correct: 'Proverb' },
    { type: 'fill', question: 'The layer of air surrounding the earth is the ________.', correct: 'Atmosphere' },
    { type: 'fill', question: 'The process by which vapour forms water droplets is ________.', correct: 'Condensation' },
    { type: 'fill', question: 'The maximum amount of solute that dissolves in a solvent is ________.', correct: 'Solubility' },
    { type: 'fill', question: 'Transfer of pollen grains is called ________.', correct: 'Pollination' },
    { type: 'fill', question: 'When a seed begins to grow, the process is ________.', correct: 'Germination' },
    { type: 'fill', question: 'The process of water turning into vapour is ________.', correct: 'Evaporation' },
    { type: 'fill', question: 'The release of energy from food is ________.', correct: 'Respiration' },
    { type: 'fill', question: 'Plants make food by ________.', correct: 'Photosynthesis' },
    { type: 'fill', question: 'The ability of a nation to control itself is ________.', correct: 'Independence' },
    { type: 'fill', question: 'The body that interprets the law is the ________.', correct: 'Judiciary' },
    { type: 'fill', question: 'The body that makes laws is the ________.', correct: 'Legislature' },
    { type: 'fill', question: 'Accepted ways of behavior in a society are ________.', correct: 'Norms' },
    { type: 'fill', question: 'The way of life of a people is their ________.', correct: 'Culture' },
    { type: 'fill', question: 'The negatively charged particle is the ________.', correct: 'Electron' },
    { type: 'fill', question: 'The positively charged particle is the ________.', correct: 'Proton' },
    { type: 'fill', question: 'The element with atomic number 27 is ________.', correct: 'Cobalt' },
    { type: 'fill', question: 'Loss of electrons is ________.', correct: 'Oxidation' },
    { type: 'fill', question: 'A combination in which substances retain their properties is a ________.', correct: 'Mixture' },
    { type: 'fill', question: 'The force that attracts objects to a magnet is ________.', correct: 'Magnetism' },
    { type: 'fill', question: 'The force of blood against artery walls is ________.', correct: 'Blood pressure' },
    { type: 'fill', question: 'Two or more atoms chemically joined form a ________.', correct: 'Molecule' },
    { type: 'fill', question: 'A sentence that states something is a ________.', correct: 'Statement' },
    { type: 'fill', question: 'A short question added to confirm information is a ________.', correct: 'Question tag' },
    { type: 'fill', question: 'A group of related sentences is a ________.', correct: 'Paragraph' },
    { type: 'fill', question: 'Reporting someone’s words without quoting is ________.', correct: 'Indirect speech' },
    { type: 'fill', question: 'A word that describes a verb is an ________.', correct: 'Adverb' },
    { type: 'fill', question: 'A word that replaces a noun is a ________.', correct: 'Pronoun' },
    { type: 'fill', question: 'A group of words without a verb is a ________.', correct: 'Phrase' },
    { type: 'fill', question: 'The part of a sentence that contains the verb is the ________.', correct: 'Predicate' },
    { type: 'fill', question: 'Words that join sentences are ________.', correct: 'Conjunction' },
    { type: 'fill', question: 'Marks used in writing are ________.', correct: 'Punctuation' },
    { type: 'fill', question: 'A group of words with a subject and verb is a ________.', correct: 'Clause' },
    { type: 'fill', question: 'The time of an action is ________.', correct: 'Tense' },
    { type: 'fill', question: 'A word that shows relationship between words is a ________.', correct: 'Preposition' },
    { type: 'fill', question: 'A comparison using “as” or “like” is a ________.', correct: 'Simile' },
    { type: 'fill', question: 'A direct comparison without “as” or “like” is a ________.', correct: 'Metaphor' },
    { type: 'fill', question: 'A conversation between two people is ________.', correct: 'Dialogue' },
    { type: 'fill', question: 'The force that attracts objects to the earth is ________.', correct: 'Gravity' },
    { type: 'fill', question: 'The supreme law governing a country is the ________.', correct: 'Constitution' },
    { type: 'fill', question: 'Rules guiding behavior in school are ________.', correct: 'Rules' },
    { type: 'fill', question: 'The right to belong to a nation is ________.', correct: 'Citizenship' },
    { type: 'fill', question: 'The system that governs a country is ________.', correct: 'Government' }
];

        function startExam() {
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('examScreen').classList.add('active');
    currentPage = 1;
    renderPage();
    startTimer();
    updateProgress();
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 300) document.getElementById('timer').classList.add('warning'); // 5 min warning
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hrs = Math.floor(timeRemaining / 3600);
    const mins = Math.floor((timeRemaining % 3600) / 60);
    const secs = timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}


function getQuestionsPerPage() {
    return Math.ceil(questions.length / totalPages);
}

function renderPage() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    const perPage = getQuestionsPerPage();
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, questions.length);

    for (let i = startIndex; i < endIndex; i++) {
        const q = questions[i];
        const index = i;
        const card = document.createElement('div');
        card.className = 'question-card';

        let typeLabel = '';
        if (q.type === 'mcq') typeLabel = 'Multiple Choice';
        else if (q.type === 'fill') typeLabel = 'Fill in the Gap';
        else if (q.type === 'yesno') typeLabel = 'Yes/No';

        let optionsHTML = '';
        if (q.type === 'mcq' || q.type === 'yesno') {
            optionsHTML = '<div class="options">';
            q.options.forEach((option,optIndex)=>{
                const checked = userAnswers[index] === option ? 'checked' : '';
                optionsHTML += `
                <div class="option">
                    <input type="radio" id="q${index}_opt${optIndex}" name="question${index}" value="${option}"
                        onchange="saveAnswer(${index}, '${escapeSingleQuotes(option)}')" ${checked}>
                    <label for="q${index}_opt${optIndex}">${option}</label>
                </div>`;
            });
            optionsHTML += '</div>';
        } else if (q.type === 'fill') {
            const valueAttr = userAnswers[index] ? `value="${escapeHtml(userAnswers[index])}"` : '';
            optionsHTML = `<input type="text" ${valueAttr} placeholder="Type your answer here..." 
                oninput="saveAnswer(${index}, this.value)">`;
        }

        card.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${index + 1}</span>
                <span class="question-type">${typeLabel}</span>
            </div>
            <div class="question-text">${escapeHtml(q.question)}</div>
            ${optionsHTML}
        `;
        container.appendChild(card);
    }

    updateProgress();
    renderPaginationButtons();
}


function escapeSingleQuotes(str) { return str.replace(/'/g, "\\'"); }
function escapeHtml(str) { return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"); }

function saveAnswer(index, answer) {
    if (!answer || answer.trim() === '') delete userAnswers[index];
    else userAnswers[index] = answer.trim();
    updateProgress();
}

function updateProgress() {
    document.getElementById('progress').textContent = `Questions Answered: ${Object.keys(userAnswers).length} / ${questions.length}`;
}

function submitExam() {
    if (Object.keys(userAnswers).length < questions.length) {
        if (!confirm('You have not answered all questions. Are you sure you want to submit?')) return;
    }
    clearInterval(timerInterval);
    calculateResults();
}

function autoSubmitExam() {
    alert('Time is up! Your exam will be submitted automatically.');
    calculateResults();
}


function calculateResults() {
    let correct = 0;
    let wrong = 0;
    questions.forEach((q,index)=>{
        const userAns = userAnswers[index] || '';
        if (userAns.trim().toLowerCase() === q.correct.toString().trim().toLowerCase()) correct++;
        else wrong++;
    });
    const total = questions.length;
    const percentage = ((correct / total) * 100).toFixed(1);
    displayResults(correct, wrong, total, percentage);
}


function displayResults(correct, wrong, total, percentage) {
    document.getElementById('examScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');

    document.getElementById('scoreDisplay').textContent = `${correct} / ${total}`;
    document.getElementById('totalQuestions').textContent = total;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('wrongAnswers').textContent = wrong;
    document.getElementById('percentage').textContent = `${percentage}%`;

    displayReview();
}


function displayReview() {
    const container = document.getElementById('reviewContainer');
    container.innerHTML = '';
    questions.forEach((q,index)=>{
        const userAns = userAnswers[index] || 'Not answered';
        const isCorrect = userAns.toString().trim().toLowerCase() === q.correct.toString().trim().toLowerCase();
        const card = document.createElement('div');
        card.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
        card.innerHTML = `
            <span class="answer-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
            <div style="margin-top:8px;"><strong>Q${index+1}:</strong> ${escapeHtml(q.question)}</div>
            <div class="your-answer"><strong>Your Answer:</strong> ${escapeHtml(String(userAns))}</div>
            ${!isCorrect ? `<div class="correct-answer"><strong>Correct Answer:</strong> ${escapeHtml(String(q.correct))}</div>` : ''}
        `;
        container.appendChild(card);
    });
}


function renderPaginationButtons() {
    let container = document.getElementById('paginationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'paginationContainer';
        container.style.textAlign = 'center';
        container.style.marginTop = '20px';
        document.getElementById('questionsContainer').after(container);
    }
    container.innerHTML = '';

    
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.className = 'btn';
    prevBtn.style.margin = '5px';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { currentPage--; renderPage(); };
    container.appendChild(prevBtn);

    
    const pageRange = 2; 
    for (let p = 1; p <= totalPages; p++) {
        if (p === 1 || p === totalPages || (p >= currentPage - pageRange && p <= currentPage + pageRange)) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = p;
            pageBtn.className = 'btn';
            pageBtn.style.margin = '5px';
            if (p === currentPage) pageBtn.style.backgroundColor = '#2a5298';
            pageBtn.onclick = (() => {
                const page = p;
                return () => { currentPage = page; renderPage(); };
            })();
            container.appendChild(pageBtn);
        } else if (p === currentPage - pageRange - 1 || p === currentPage + pageRange + 1) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.style.margin = '5px';
            container.appendChild(dots);
        }
    }

    
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className = 'btn';
    nextBtn.style.margin = '5px';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { currentPage++; renderPage(); };
    container.appendChild(nextBtn);
}
