// 難易度別ステージデータ
const difficultyData = {
    '300-400': [
        {
            words: [
                { english: 'APPLE', japanese: 'りんご' },
                { english: 'BANANA', japanese: 'バナナ' },
                { english: 'ORANGE', japanese: 'オレンジ' },
                { english: 'GRAPE', japanese: 'ぶどう' },
                { english: 'LEMON', japanese: 'レモン' }
            ]
        },
        {
            words: [
                { english: 'DOG', japanese: '犬' },
                { english: 'CAT', japanese: '猫' },
                { english: 'BIRD', japanese: '鳥' },
                { english: 'FISH', japanese: '魚' },
                { english: 'LION', japanese: 'ライオン' }
            ]
        },
        {
            words: [
                { english: 'SUN', japanese: '太陽' },
                { english: 'MOON', japanese: '月' },
                { english: 'STAR', japanese: '星' },
                { english: 'CLOUD', japanese: '雲' },
                { english: 'RAIN', japanese: '雨' }
            ]
        }
    ],
    '400-500': [
        {
            words: [
                { english: 'TABLE', japanese: 'テーブル' },
                { english: 'CHAIR', japanese: '椅子' },
                { english: 'WINDOW', japanese: '窓' },
                { english: 'DOOR', japanese: 'ドア' },
                { english: 'HOUSE', japanese: '家' }
            ]
        },
        {
            words: [
                { english: 'SCHOOL', japanese: '学校' },
                { english: 'TEACHER', japanese: '教師' },
                { english: 'STUDENT', japanese: '学生' },
                { english: 'BOOK', japanese: '本' },
                { english: 'PEN', japanese: 'ペン' }
            ]
        },
        {
            words: [
                { english: 'MORNING', japanese: '朝' },
                { english: 'AFTERNOON', japanese: '午後' },
                { english: 'EVENING', japanese: '夕方' },
                { english: 'NIGHT', japanese: '夜' },
                { english: 'DAY', japanese: '日' }
            ]
        }
    ],
    '500-600': [
        {
            words: [
                { english: 'COMPUTER', japanese: 'コンピューター' },
                { english: 'KEYBOARD', japanese: 'キーボード' },
                { english: 'MONITOR', japanese: 'モニター' },
                { english: 'MOUSE', japanese: 'マウス' },
                { english: 'PRINTER', japanese: 'プリンター' }
            ]
        },
        {
            words: [
                { english: 'MEETING', japanese: '会議' },
                { english: 'PROJECT', japanese: 'プロジェクト' },
                { english: 'REPORT', japanese: '報告書' },
                { english: 'EMAIL', japanese: 'メール' },
                { english: 'OFFICE', japanese: 'オフィス' }
            ]
        },
        {
            words: [
                { english: 'TRAVEL', japanese: '旅行' },
                { english: 'HOTEL', japanese: 'ホテル' },
                { english: 'AIRPORT', japanese: '空港' },
                { english: 'TICKET', japanese: 'チケット' },
                { english: 'PASSPORT', japanese: 'パスポート' }
            ]
        }
    ],
    '600-700': [
        {
            words: [
                { english: 'MANAGEMENT', japanese: '管理' },
                { english: 'STRATEGY', japanese: '戦略' },
                { english: 'BUDGET', japanese: '予算' },
                { english: 'DEADLINE', japanese: '締切' },
                { english: 'PRESENTATION', japanese: 'プレゼンテーション' }
            ]
        },
        {
            words: [
                { english: 'NEGOTIATION', japanese: '交渉' },
                { english: 'AGREEMENT', japanese: '合意' },
                { english: 'CONTRACT', japanese: '契約' },
                { english: 'CLIENT', japanese: '顧客' },
                { english: 'SERVICE', japanese: 'サービス' }
            ]
        },
        {
            words: [
                { english: 'INVESTMENT', japanese: '投資' },
                { english: 'FINANCE', japanese: '金融' },
                { english: 'MARKET', japanese: '市場' },
                { english: 'PROFIT', japanese: '利益' },
                { english: 'LOSS', japanese: '損失' }
            ]
        }
    ],
    '700-800': [
        {
            words: [
                { english: 'IMPLEMENTATION', japanese: '実装' },
                { english: 'OPTIMIZATION', japanese: '最適化' },
                { english: 'EFFICIENCY', japanese: '効率性' },
                { english: 'PRODUCTIVITY', japanese: '生産性' },
                { english: 'INNOVATION', japanese: '革新' }
            ]
        },
        {
            words: [
                { english: 'ANALYSIS', japanese: '分析' },
                { english: 'EVALUATION', japanese: '評価' },
                { english: 'ASSESSMENT', japanese: '査定' },
                { english: 'RESEARCH', japanese: '研究' },
                { english: 'DEVELOPMENT', japanese: '開発' }
            ]
        },
        {
            words: [
                { english: 'COMMUNICATION', japanese: 'コミュニケーション' },
                { english: 'COLLABORATION', japanese: '協力' },
                { english: 'COORDINATION', japanese: '調整' },
                { english: 'ORGANIZATION', japanese: '組織' },
                { english: 'STRUCTURE', japanese: '構造' }
            ]
        }
    ],
    '800-900': [
        {
            words: [
                { english: 'SOPHISTICATED', japanese: '洗練された' },
                { english: 'COMPREHENSIVE', japanese: '包括的な' },
                { english: 'SIGNIFICANT', japanese: '重要な' },
                { english: 'SUBSTANTIAL', japanese: '実質的な' },
                { english: 'CONSIDERABLE', japanese: 'かなりの' }
            ]
        },
        {
            words: [
                { english: 'ACCOMPLISHMENT', japanese: '達成' },
                { english: 'ACHIEVEMENT', japanese: '成果' },
                { english: 'EXCELLENCE', japanese: '卓越' },
                { english: 'PROFICIENCY', japanese: '熟練' },
                { english: 'EXPERTISE', japanese: '専門知識' }
            ]
        },
        {
            words: [
                { english: 'ENTREPRENEURSHIP', japanese: '起業家精神' },
                { english: 'LEADERSHIP', japanese: 'リーダーシップ' },
                { english: 'MENTORSHIP', japanese: 'メンター制度' },
                { english: 'PARTNERSHIP', japanese: 'パートナーシップ' },
                { english: 'OWNERSHIP', japanese: '所有権' }
            ]
        }
    ],
    '900-990': [
        {
            words: [
                { english: 'EXTRAORDINARY', japanese: '並外れた' },
                { english: 'PHENOMENAL', japanese: '驚異的な' },
                { english: 'EXCEPTIONAL', japanese: '例外的な' },
                { english: 'REMARKABLE', japanese: '注目すべき' },
                { english: 'OUTSTANDING', japanese: '優秀な' }
            ]
        },
        {
            words: [
                { english: 'METICULOUS', japanese: '細心の' },
                { english: 'SCRUPULOUS', japanese: '慎重な' },
                { english: 'MAGNIFICENT', japanese: '壮大な' },
                { english: 'TREMENDOUS', japanese: '途方もない' },
                { english: 'PROFOUND', japanese: '深遠な' }
            ]
        },
        {
            words: [
                { english: 'SIGNIFICANCE', japanese: '重要性' },
                { english: 'CONSEQUENCE', japanese: '結果' },
                { english: 'IMPLICATION', japanese: '含意' },
                { english: 'PERSPECTIVE', japanese: '視点' },
                { english: 'PHILOSOPHY', japanese: '哲学' }
            ]
        }
    ]
};

// 現在の難易度
let currentDifficulty = null;
let stages = [];

// チュートリアルデータ
const tutorialData = {
    words: [
        { english: 'CAT', japanese: '猫' },
        { english: 'DOG', japanese: '犬' },
        { english: 'SUN', japanese: '太陽' }
    ]
};

// チュートリアル状態
let tutorialStep = 0;
let tutorialFoundWords = new Set();
let tutorialGridData = []; // グリッドデータ（配列）
let tutorialGridSize = 6;
let tutorialPlacedWords = [];
let isTutorialMode = false;

// ゲーム状態
let currentStage = 0;
let grid = [];
let gridSize = 9; // デフォルト値、実際は動的に計算される
let selectedCells = [];
let foundWords = new Set();
let isSelecting = false;
let isAnswerVisible = false;

// DOM要素
const tutorialScreen = document.getElementById('tutorialScreen');
const tutorialGameScreen = document.getElementById('tutorialGameScreen');
const startTutorialButton = document.getElementById('startTutorialButton');
const tutorialGuide = document.getElementById('tutorialGuide');
const guideText = document.getElementById('guideText');
const nextGuideButton = document.getElementById('nextGuideButton');
const skipTutorialButton = document.getElementById('skipTutorialButton');
const tutorialGrid = document.getElementById('tutorialGrid');
const tutorialTranslationsList = document.getElementById('tutorialTranslationsList');
const tutorialFoundWordsList = document.getElementById('tutorialFoundWordsList');
const difficultyScreen = document.getElementById('difficultyScreen');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');
const backToDifficultyButton = document.getElementById('backToDifficultyButton');
const wordsDisplay = document.getElementById('wordsDisplay');
const translationsList = document.getElementById('translationsList');
const foundWordsList = document.getElementById('foundWordsList');
const gridElement = document.getElementById('grid');
const clearMessage = document.getElementById('clearMessage');
const nextStageButton = document.getElementById('nextStageButton');
const currentStageSpan = document.getElementById('currentStage');
const gameStageSpan = document.getElementById('gameStage');
const selectedDifficultySpan = document.getElementById('selectedDifficulty');
const gameDifficultySpan = document.getElementById('gameDifficulty');
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const showAnswerButton = document.getElementById('showAnswerButton');

// チュートリアルのガイドテキスト
const tutorialGuides = [
    'マス目の中に隠された単語を見つけましょう！',
    'マウス（または指）でドラッグして単語を選択します。',
    '単語は縦、横、斜めのいずれかの方向に並んでいます。',
    '「CAT（猫）」を見つけてみましょう！',
    '見つけた単語は緑色で表示されます。',
    'すべての単語を見つけるとクリアです！',
    'チュートリアル完了！難易度を選択して本番に挑戦しましょう！'
];

// 初期化
function init() {
    // チュートリアルボタン
    startTutorialButton.addEventListener('click', startTutorial);
    nextGuideButton.addEventListener('click', nextTutorialStep);
    skipTutorialButton.addEventListener('click', skipTutorial);
    
    // 難易度選択ボタンにイベントリスナーを追加
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const level = button.dataset.level;
            selectDifficulty(level);
        });
    });
    
    startButton.addEventListener('click', startGame);
    backButton.addEventListener('click', showStartScreen);
    backToDifficultyButton.addEventListener('click', showDifficultyScreen);
    nextStageButton.addEventListener('click', nextStage);
    showAnswerButton.addEventListener('click', toggleAnswer);
    
    // グリッド外でのマウスアップを検知
    document.addEventListener('mouseup', endSelection);
}

// チュートリアル開始
function startTutorial() {
    tutorialScreen.classList.add('hidden');
    tutorialGameScreen.classList.remove('hidden');
    isTutorialMode = true;
    tutorialStep = 0;
    tutorialFoundWords.clear();
    
    generateTutorialGrid();
    displayTutorialTranslations();
    updateTutorialFoundWords();
    showTutorialGuide(0);
}

// チュートリアルグリッド生成
function generateTutorialGrid() {
    tutorialGridSize = 6;
    tutorialGridData = Array(tutorialGridSize).fill(null).map(() => Array(tutorialGridSize).fill(''));
    tutorialPlacedWords = [];
    const words = tutorialData.words.map(w => w.english.toUpperCase());
    
    const directions = [
        { dx: 1, dy: 0 },   // 横
        { dx: 0, dy: 1 },   // 縦
        { dx: 1, dy: 1 }    // 斜め
    ];
    
    // CATを横に配置
    placeTutorialWord('CAT', 0, 0, 1, 0);
    tutorialPlacedWords.push({
        word: 'CAT',
        cells: getWordCells('CAT', 0, 0, 1, 0)
    });
    
    // DOGを縦に配置
    placeTutorialWord('DOG', 2, 0, 0, 1);
    tutorialPlacedWords.push({
        word: 'DOG',
        cells: getWordCells('DOG', 2, 0, 0, 1)
    });
    
    // SUNを斜めに配置
    placeTutorialWord('SUN', 0, 3, 1, 1);
    tutorialPlacedWords.push({
        word: 'SUN',
        cells: getWordCells('SUN', 0, 3, 1, 1)
    });
    
    // 空きマスを埋める
    fillTutorialEmptyCells();
    renderTutorialGrid();
}

function placeTutorialWord(word, x, y, dx, dy) {
    for (let i = 0; i < word.length; i++) {
        const newX = x + i * dx;
        const newY = y + i * dy;
        tutorialGridData[newY][newX] = word[i];
    }
}

function fillTutorialEmptyCells() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let y = 0; y < tutorialGridSize; y++) {
        for (let x = 0; x < tutorialGridSize; x++) {
            if (tutorialGridData[y][x] === '') {
                tutorialGridData[y][x] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function renderTutorialGrid() {
    tutorialGrid.innerHTML = '';
    tutorialGrid.style.gridTemplateColumns = `repeat(${tutorialGridSize}, 1fr)`;
    
    for (let y = 0; y < tutorialGridSize; y++) {
        for (let x = 0; x < tutorialGridSize; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = tutorialGridData[y][x];
            cell.dataset.x = x;
            cell.dataset.y = y;
            
            // マウスイベント
            cell.addEventListener('mousedown', (e) => startTutorialSelection(e, x, y));
            cell.addEventListener('mouseenter', (e) => continueTutorialSelection(e, x, y));
            
            // タッチイベント
            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startTutorialSelection(e, x, y);
            }, { passive: false });
            
            tutorialGrid.appendChild(cell);
        }
    }
    
    // グリッド全体にタッチイベント
    tutorialGrid.addEventListener('touchmove', (e) => {
        e.preventDefault();
        handleTutorialTouchMove(e);
    }, { passive: false });
    
    tutorialGrid.addEventListener('touchend', (e) => {
        e.preventDefault();
        endTutorialSelection();
    }, { passive: false });
}

function startTutorialSelection(e, x, y) {
    if (e.type === 'mousedown') {
        e.preventDefault();
    }
    isSelecting = true;
    selectedCells = [{ x, y }];
    updateTutorialSelection();
}

function continueTutorialSelection(e, x, y) {
    if (!isSelecting) return;
    if (e.type === 'mouseenter' || e.type === 'touchmove') {
        e.preventDefault();
    }
    
    const lastCell = selectedCells[selectedCells.length - 1];
    const dx = x - lastCell.x;
    const dy = y - lastCell.y;
    
    if (selectedCells.length === 1) {
        if (!selectedCells.some(c => c.x === x && c.y === y)) {
            selectedCells.push({ x, y });
            updateTutorialSelection();
        }
    } else {
        const firstDx = selectedCells[1].x - selectedCells[0].x;
        const firstDy = selectedCells[1].y - selectedCells[0].y;
        
        if (dx === firstDx && dy === firstDy && 
            (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) &&
            !selectedCells.some(c => c.x === x && c.y === y)) {
            selectedCells.push({ x, y });
            updateTutorialSelection();
        }
    }
}

function handleTutorialTouchMove(e) {
    if (!isSelecting) return;
    e.preventDefault();
    
    const touch = e.touches ? e.touches[0] : null;
    if (!touch) return;
    
    const rect = tutorialGrid.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    const cellWidth = rect.width / tutorialGridSize;
    const cellHeight = rect.height / tutorialGridSize;
    
    const cellX = Math.floor(x / cellWidth);
    const cellY = Math.floor(y / cellHeight);
    
    if (cellX >= 0 && cellX < tutorialGridSize && cellY >= 0 && cellY < tutorialGridSize) {
        continueTutorialSelection(e, cellX, cellY);
    }
}

function endTutorialSelection() {
    if (!isSelecting) return;
    isSelecting = false;
    
    if (selectedCells.length > 0) {
        checkTutorialWord();
    }
    
    selectedCells = [];
    updateTutorialSelection();
}

function updateTutorialSelection() {
    const cells = tutorialGrid.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('selected');
    });
    
    selectedCells.forEach(({ x, y }) => {
        const cell = tutorialGrid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        if (cell && !cell.classList.contains('found')) {
            cell.classList.add('selected');
        }
    });
}

function checkTutorialWord() {
    if (selectedCells.length < 2) return;
    
    const selectedWord = selectedCells
        .map(({ x, y }) => tutorialGridData[y][x])
        .join('');
    
    const reversedWord = selectedWord.split('').reverse().join('');
    
    tutorialData.words.forEach(word => {
        const upperWord = word.english.toUpperCase();
        if ((selectedWord === upperWord || reversedWord === upperWord) && 
            !tutorialFoundWords.has(upperWord)) {
            tutorialFoundWords.add(upperWord);
            markTutorialWordAsFound();
            updateTutorialFoundWords();
            
            // ガイドを更新
            if (tutorialFoundWords.size === 1 && tutorialStep < 4) {
                setTimeout(() => showTutorialGuide(4), 500);
            } else if (tutorialFoundWords.size === tutorialData.words.length && tutorialStep < 6) {
                setTimeout(() => showTutorialGuide(6), 500);
            }
        }
    });
}

function markTutorialWordAsFound() {
    tutorialData.words.forEach(word => {
        const upperWord = word.english.toUpperCase();
        if (tutorialFoundWords.has(upperWord)) {
            const placedWord = tutorialPlacedWords.find(pw => pw.word === upperWord);
            if (placedWord) {
                placedWord.cells.forEach(({ x, y }) => {
                    const cell = tutorialGrid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
                    if (cell) {
                        cell.classList.add('found');
                        cell.classList.remove('selected');
                    }
                });
            }
        }
    });
}

function displayTutorialTranslations() {
    tutorialTranslationsList.innerHTML = '';
    tutorialData.words.forEach(word => {
        const translationItem = document.createElement('div');
        translationItem.className = 'translation-item';
        translationItem.textContent = word.japanese;
        tutorialTranslationsList.appendChild(translationItem);
    });
}

function updateTutorialFoundWords() {
    tutorialFoundWordsList.innerHTML = '';
    tutorialTranslationsList.innerHTML = '';
    
    tutorialData.words.forEach(word => {
        const upperWord = word.english.toUpperCase();
        if (tutorialFoundWords.has(upperWord)) {
            const foundItem = document.createElement('div');
            foundItem.className = 'found-word-item';
            foundItem.textContent = word.english;
            tutorialFoundWordsList.appendChild(foundItem);
        }
        
        const translationItem = document.createElement('div');
        translationItem.className = 'translation-item';
        if (tutorialFoundWords.has(upperWord)) {
            translationItem.classList.add('found');
        }
        translationItem.textContent = word.japanese;
        tutorialTranslationsList.appendChild(translationItem);
    });
}

function showTutorialGuide(step) {
    tutorialStep = step;
    if (step < tutorialGuides.length) {
        guideText.textContent = tutorialGuides[step];
        tutorialGuide.classList.remove('hidden');
        
        if (step === 6) {
            nextGuideButton.textContent = '難易度選択へ';
        } else {
            nextGuideButton.textContent = '次へ';
        }
    }
}

function nextTutorialStep() {
    if (tutorialStep < tutorialGuides.length - 1) {
        tutorialStep++;
        showTutorialGuide(tutorialStep);
    } else {
        // チュートリアル完了
        completeTutorial();
    }
}

function skipTutorial() {
    completeTutorial();
}

function completeTutorial() {
    tutorialGameScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    isTutorialMode = false;
}

// 難易度選択
function selectDifficulty(level) {
    currentDifficulty = level;
    stages = difficultyData[level];
    currentStage = 0;
    
    // 難易度表示を更新
    const difficultyLabels = {
        '300-400': '300-400点（初級）',
        '400-500': '400-500点（初級〜中級）',
        '500-600': '500-600点（中級）',
        '600-700': '600-700点（中級〜上級）',
        '700-800': '700-800点（上級）',
        '800-900': '800-900点（上級〜最上級）',
        '900-990': '900-990点（最上級）'
    };
    
    selectedDifficultySpan.textContent = difficultyLabels[level];
    gameDifficultySpan.textContent = difficultyLabels[level];
    
    // 開始画面に移動
    difficultyScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    displayWords();
}

// 難易度選択画面に戻る
function showDifficultyScreen() {
    gameScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    currentDifficulty = null;
    stages = [];
}

// 単語表示
function displayWords() {
    wordsDisplay.innerHTML = '';
    const stage = stages[currentStage];
    currentStageSpan.textContent = currentStage + 1;
    
    stage.words.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.innerHTML = `
            <span class="english">${word.english}</span>
            <span class="japanese">${word.japanese}</span>
        `;
        wordsDisplay.appendChild(wordItem);
    });
}

// ゲーム開始
function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameStageSpan.textContent = currentStage + 1;
    
    foundWords.clear();
    selectedCells = [];
    isAnswerVisible = false;
    showAnswerButton.textContent = '答えを見る';
    
    generateGrid();
    displayTranslations();
    updateFoundWords();
    clearMessage.classList.add('hidden');
    hideAllAnswers();
}

// 開始画面に戻る
function showStartScreen() {
    gameScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// グリッドサイズを計算（最長の単語に基づく）
function calculateGridSize(words) {
    const maxLength = Math.max(...words.map(w => w.english.length));
    // 最長の単語の長さ + 余裕（最低3マス、最大15マス）
    const calculatedSize = Math.max(maxLength + 3, 9);
    return Math.min(calculatedSize, 15); // 最大15×15に制限
}

// グリッド生成
function generateGrid() {
    const stage = stages[currentStage];
    const words = stage.words.map(w => w.english.toUpperCase());
    
    // グリッドサイズを計算
    gridSize = calculateGridSize(stage.words);
    
    // すべての単語が配置されるまで繰り返す
    let placedWords = [];
    let maxRetries = 1000;
    let retryCount = 0;
    
    while (placedWords.length < words.length && retryCount < maxRetries) {
        grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
        placedWords = [];
        
        const directions = [
            { dx: 1, dy: 0 },   // 横
            { dx: 0, dy: 1 },   // 縦
            { dx: 1, dy: 1 },   // 斜め右下
            { dx: 1, dy: -1 }   // 斜め右上
        ];
        
        // 単語を長さ順にソート（長い単語から配置）
        const sortedWords = [...words].sort((a, b) => b.length - a.length);
        
        let allPlaced = true;
        
        for (const word of sortedWords) {
            // 単語が長すぎる場合はスキップ（通常は発生しない）
            if (word.length > gridSize) {
                console.warn(`単語 "${word}" が長すぎます（${word.length}文字）`);
                allPlaced = false;
                break;
            }
            
            let placed = false;
            
            // すべての可能な位置と方向を試す
            const positions = [];
            for (let y = 0; y < gridSize; y++) {
                for (let x = 0; x < gridSize; x++) {
                    directions.forEach(dir => {
                        // グリッド内に収まるか事前チェック
                        const endX = x + (word.length - 1) * dir.dx;
                        const endY = y + (word.length - 1) * dir.dy;
                        if (endX >= 0 && endX < gridSize && endY >= 0 && endY < gridSize) {
                            positions.push({ x, y, dx: dir.dx, dy: dir.dy });
                        }
                    });
                }
            }
            
            // 位置をランダムにシャッフル
            for (let i = positions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [positions[i], positions[j]] = [positions[j], positions[i]];
            }
            
            // 配置を試みる
            for (const pos of positions) {
                if (canPlaceWord(word, pos.x, pos.y, pos.dx, pos.dy)) {
                    placeWord(word, pos.x, pos.y, pos.dx, pos.dy);
                    placedWords.push({
                        word: word,
                        cells: getWordCells(word, pos.x, pos.y, pos.dx, pos.dy)
                    });
                    placed = true;
                    break;
                }
            }
            
            if (!placed) {
                allPlaced = false;
                break;
            }
        }
        
        if (allPlaced && placedWords.length === words.length) {
            break; // すべて配置成功
        }
        
        retryCount++;
    }
    
    if (placedWords.length < words.length) {
        console.error('単語の配置に失敗しました。グリッドを再生成します。');
        // 最後の試みとして、より緩い条件で再試行
        return generateGridWithFallback(stage.words);
    }
    
    // 空きマスをランダムなアルファベットで埋める
    fillEmptyCells();
    
    // グリッドを描画
    renderGrid(placedWords);
}

// フォールバック: より確実な配置方法
function generateGridWithFallback(words) {
    // グリッドサイズを計算
    gridSize = calculateGridSize(words);
    grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
    const placedWords = [];
    const wordList = words.map(w => w.english.toUpperCase());
    
    // 各単語を確実に配置する
    wordList.forEach((word, index) => {
        // 単語が長すぎる場合は短縮（通常は発生しない）
        const safeWord = word.length > gridSize ? word.substring(0, gridSize) : word;
        
        // 確実に配置できる位置を見つける
        const directions = [
            { dx: 1, dy: 0 },   // 横
            { dx: 0, dy: 1 },   // 縦
            { dx: 1, dy: 1 },   // 斜め右下
            { dx: 1, dy: -1 }   // 斜め右上
        ];
        
        let placed = false;
        
        // 各方向を試す
        for (const dir of directions) {
            // グリッド内に確実に収まる開始位置を計算
            const maxX = dir.dx > 0 ? gridSize - safeWord.length : gridSize - 1;
            const maxY = dir.dy > 0 ? gridSize - safeWord.length : gridSize - 1;
            const minX = dir.dx < 0 ? safeWord.length - 1 : 0;
            const minY = dir.dy < 0 ? safeWord.length - 1 : 0;
            
            // 可能な位置をランダムに試す
            const positions = [];
            for (let y = Math.max(0, minY); y <= Math.min(gridSize - 1, maxY); y++) {
                for (let x = Math.max(0, minX); x <= Math.min(gridSize - 1, maxX); x++) {
                    positions.push({ x, y });
                }
            }
            
            // シャッフル
            for (let i = positions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [positions[i], positions[j]] = [positions[j], positions[i]];
            }
            
            // 配置を試みる
            for (const pos of positions) {
                if (canPlaceWord(safeWord, pos.x, pos.y, dir.dx, dir.dy)) {
                    placeWord(safeWord, pos.x, pos.y, dir.dx, dir.dy);
                    placedWords.push({
                        word: safeWord,
                        cells: getWordCells(safeWord, pos.x, pos.y, dir.dx, dir.dy)
                    });
                    placed = true;
                    break;
                }
            }
            
            if (placed) break;
        }
        
        if (!placed) {
            // 最後の手段: 強制的に配置（既存の文字を上書き）
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const x = Math.floor(Math.random() * (gridSize - safeWord.length + 1));
            const y = Math.floor(Math.random() * (gridSize - safeWord.length + 1));
            placeWord(safeWord, x, y, dir.dx, dir.dy);
            placedWords.push({
                word: safeWord,
                cells: getWordCells(safeWord, x, y, dir.dx, dir.dy)
            });
        }
    });
    
    // 空きマスをランダムなアルファベットで埋める
    fillEmptyCells();
    
    // グリッドを描画
    renderGrid(placedWords);
}

// 単語を配置できるかチェック
function canPlaceWord(word, x, y, dx, dy) {
    for (let i = 0; i < word.length; i++) {
        const newX = x + i * dx;
        const newY = y + i * dy;
        
        if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
            return false;
        }
        
        if (grid[newY][newX] !== '' && grid[newY][newX] !== word[i]) {
            return false;
        }
    }
    return true;
}

// 単語を配置
function placeWord(word, x, y, dx, dy) {
    for (let i = 0; i < word.length; i++) {
        const newX = x + i * dx;
        const newY = y + i * dy;
        grid[newY][newX] = word[i];
    }
}

// 単語のセル位置を取得
// 単語のセル位置を取得（共通関数）
function getWordCells(word, x, y, dx, dy) {
    const cells = [];
    for (let i = 0; i < word.length; i++) {
        cells.push({ x: x + i * dx, y: y + i * dy });
    }
    return cells;
}

// 空きマスを埋める
function fillEmptyCells() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (grid[y][x] === '') {
                grid[y][x] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

// グリッドを描画
function renderGrid(placedWords) {
    gridElement.innerHTML = '';
    gridElement.placedWords = placedWords; // 後で参照できるように保存
    
    // CSSグリッドの列数を動的に設定
    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = grid[y][x];
            cell.dataset.x = x;
            cell.dataset.y = y;
            
            // マウスイベント
            cell.addEventListener('mousedown', (e) => startSelection(e, x, y));
            cell.addEventListener('mouseenter', (e) => continueSelection(e, x, y));
            
            // タッチイベント（スマホ対応）
            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(e, x, y);
            }, { passive: false });
            
            gridElement.appendChild(cell);
        }
    }
    
    // グリッド全体にタッチ移動と終了イベントを追加
    gridElement.addEventListener('touchmove', (e) => {
        e.preventDefault();
        handleTouchMove(e);
    }, { passive: false });
    
    gridElement.addEventListener('touchend', (e) => {
        e.preventDefault();
        endSelection();
    }, { passive: false });
    
    gridElement.addEventListener('touchcancel', (e) => {
        e.preventDefault();
        endSelection();
    }, { passive: false });
}

// タッチ位置からセル座標を取得
function getCellFromTouch(e) {
    const touch = e.touches ? e.touches[0] : e.changedTouches ? e.changedTouches[0] : null;
    if (!touch) return null;
    
    const rect = gridElement.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    // グリッドのセルサイズを計算
    const cellWidth = rect.width / gridSize;
    const cellHeight = rect.height / gridSize;
    
    const cellX = Math.floor(x / cellWidth);
    const cellY = Math.floor(y / cellHeight);
    
    if (cellX >= 0 && cellX < gridSize && cellY >= 0 && cellY < gridSize) {
        return { x: cellX, y: cellY };
    }
    return null;
}

// タッチ移動の処理
function handleTouchMove(e) {
    if (!isSelecting) return;
    e.preventDefault();
    
    const cellPos = getCellFromTouch(e);
    if (cellPos) {
        continueSelection(e, cellPos.x, cellPos.y);
    }
}

// 選択開始
function startSelection(e, x, y) {
    if (e.type === 'mousedown') {
        e.preventDefault();
    }
    isSelecting = true;
    selectedCells = [{ x, y }];
    updateSelection();
}

// 選択継続
function continueSelection(e, x, y) {
    if (!isSelecting) return;
    if (e.type === 'mouseenter' || e.type === 'touchmove') {
        e.preventDefault();
    }
    
    const lastCell = selectedCells[selectedCells.length - 1];
    const dx = x - lastCell.x;
    const dy = y - lastCell.y;
    
    // 直線的な選択のみ許可（縦、横、斜め）
    if (selectedCells.length === 1) {
        // 最初のセルから次のセルへの方向を決定
        if (!selectedCells.some(c => c.x === x && c.y === y)) {
            selectedCells.push({ x, y });
            updateSelection();
        }
    } else {
        // 既に方向が決まっている場合、その方向に沿っているかチェック
        const firstDx = selectedCells[1].x - selectedCells[0].x;
        const firstDy = selectedCells[1].y - selectedCells[0].y;
        
        // 方向が一致し、隣接している場合のみ追加
        if (dx === firstDx && dy === firstDy && 
            (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) &&
            !selectedCells.some(c => c.x === x && c.y === y)) {
            selectedCells.push({ x, y });
            updateSelection();
        }
    }
}

// 選択終了
function endSelection() {
    if (!isSelecting) return;
    isSelecting = false;
    
    if (selectedCells.length > 0) {
        checkWord();
    }
    
    // 選択をクリア
    selectedCells = [];
    updateSelection();
}

// 選択状態を更新
function updateSelection() {
    const cells = gridElement.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('selected');
    });
    
    selectedCells.forEach(({ x, y }) => {
        const cell = gridElement.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        if (cell && !cell.classList.contains('found')) {
            cell.classList.add('selected');
        }
    });
}

// 単語をチェック
function checkWord() {
    if (selectedCells.length < 2) return;
    
    const selectedWord = selectedCells
        .map(({ x, y }) => grid[y][x])
        .join('');
    
    const reversedWord = selectedWord.split('').reverse().join('');
    const stage = stages[currentStage];
    
    stage.words.forEach(word => {
        const upperWord = word.english.toUpperCase();
        if ((selectedWord === upperWord || reversedWord === upperWord) && 
            !foundWords.has(upperWord)) {
            foundWords.add(upperWord);
            markWordAsFound();
            updateFoundWords();
            checkClear();
        }
    });
}

// 見つけた単語をマーク
function markWordAsFound() {
    const placedWords = gridElement.placedWords;
    const stage = stages[currentStage];
    
    stage.words.forEach(word => {
        const upperWord = word.english.toUpperCase();
        if (foundWords.has(upperWord)) {
            const placedWord = placedWords.find(pw => pw.word === upperWord);
            if (placedWord) {
                placedWord.cells.forEach(({ x, y }) => {
                    const cell = gridElement.querySelector(`[data-x="${x}"][data-y="${y}"]`);
                    if (cell) {
                        cell.classList.add('found');
                        cell.classList.remove('selected');
                    }
                });
            }
        }
    });
}

// 見つけた単語を表示
function updateFoundWords() {
    foundWordsList.innerHTML = '';
    const stage = stages[currentStage];
    
    stage.words.forEach(word => {
        const upperWord = word.english.toUpperCase();
        if (foundWords.has(upperWord)) {
            const foundItem = document.createElement('div');
            foundItem.className = 'found-word-item';
            foundItem.textContent = word.english;
            foundWordsList.appendChild(foundItem);
        }
    });
    
    // 日本語訳も更新
    translationsList.innerHTML = '';
    stage.words.forEach(word => {
        const translationItem = document.createElement('div');
        translationItem.className = 'translation-item';
        if (foundWords.has(word.english.toUpperCase())) {
            translationItem.classList.add('found');
        }
        translationItem.textContent = word.japanese;
        translationsList.appendChild(translationItem);
    });
}

// 日本語訳を表示
function displayTranslations() {
    translationsList.innerHTML = '';
    const stage = stages[currentStage];
    
    stage.words.forEach(word => {
        const translationItem = document.createElement('div');
        translationItem.className = 'translation-item';
        translationItem.textContent = word.japanese;
        translationsList.appendChild(translationItem);
    });
}

// クリアチェック
function checkClear() {
    const stage = stages[currentStage];
    if (foundWords.size === stage.words.length) {
        clearMessage.classList.remove('hidden');
    }
}

// 次のステージへ
function nextStage() {
    if (currentStage < stages.length - 1) {
        currentStage++;
        displayWords();
        showStartScreen();
    } else {
        alert('全ステージクリア！おめでとうございます！');
        showDifficultyScreen();
    }
}

// 答えの表示/非表示を切り替え
function toggleAnswer() {
    isAnswerVisible = !isAnswerVisible;
    
    if (isAnswerVisible) {
        showAnswerButton.textContent = '答えを隠す';
        showAllAnswers();
    } else {
        showAnswerButton.textContent = '答えを見る';
        hideAllAnswers();
    }
}

// すべての答えを表示
function showAllAnswers() {
    const placedWords = gridElement.placedWords;
    if (!placedWords) return;
    
    placedWords.forEach(placedWord => {
        placedWord.cells.forEach(({ x, y }) => {
            const cell = gridElement.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (cell && !cell.classList.contains('found')) {
                cell.classList.add('answer');
            }
        });
    });
}

// すべての答えを非表示
function hideAllAnswers() {
    const cells = gridElement.querySelectorAll('.cell.answer');
    cells.forEach(cell => {
        cell.classList.remove('answer');
    });
}

// 初期化実行
init();

