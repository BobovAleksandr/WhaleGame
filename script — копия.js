const cards = [
  "Освобождение от разгрузки",
  "Освобождение от дежурства",
  "-200 руб. в инвентаризацию",       // Пассивная
  "Освобождение от выставления",
  "Освобождение от переоценки",
  "Освобождение от уборки",
  "-200 руб. за неверные ценники",
  "Освобождение от разгрузки",
  "Освобождение от дежурства",
  "-200 руб. в инвентаризацию",
  "Освобождение от выставления",
  "Освобождение от переоценки",
  "Освобождение от уборки",
  "-300 позиций в инвентаризацию",
  "П",
  "И",
  "Ц",
  "Ц",
  "А",
];

let workersList = [
  worker0 = {
    id: 0,
    name: 'Костиков Юрий',
    exp: 0,
    currentExpOfLevel: 0,
    neededExpToNextLevel: 2100,
    level: 1,
    cards: [],
    usedCards: [],
    passiveCards: [],
    isLeader: false,
    rolls: 0,
  },

  worker1 = {
    id: 1,
    name: 'Сапожников Евгений',
    exp: 0,
    currentExpOfLevel: 0,
    neededExpToNextLevel: 2100,
    level: 1,
    cards: [],
    usedCards: [],
    passiveCards: [],
    isLeader: false,
    rolls: 0,
  },

  worker2 = {
    id: 2,
    name: 'Шаров Алексей',
    exp: 0,
    currentExpOfLevel: 0,
    neededExpToNextLevel: 2100,
    level: 1,
    cards: [],
    usedCards: [],
    passiveCards: [],
    isLeader: false,
    rolls: 0,
  },

  worker3 = {
    id: 3,
    name: 'Конев Михаил',
    exp: 0,
    currentExpOfLevel: 0,
    neededExpToNextLevel: 2100,
    level: 1,
    cards: [],
    usedCards: [],
    passiveCards: [],
    isLeader: false,
    rolls: 0,
  },

  worker4 = {
    id: 4,
    name: 'Кучукбаев Айдар', 
    exp: 0,
    currentExpOfLevel: 0,
    neededExpToNextLevel: 2100,
    level: 1,
    cards: [],
    usedCards: [],
    passiveCards: [],
    isLeader: false,
    rolls: 0,
  },
  // worker5 = {
  //   id: 5,
  //   name: 'Кружков Гена', 
  //   exp: 0,
  //   currentExpOfLevel: 0,
  //   neededExpToNextLevel: 2100,
  //   level: 1,
  //   cards: [],
  //   usedCards: [],
  //   passiveCards: [],
  //   isLeader: false,
  //   rolls: 0,
  // },
]

// Загрузка сотрудников из массива ----------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//   workersList.forEach(element => {
//     drawWorker(element.id)
//     checkCardDeck()
//   });
// })

// Отрисовка карточки сотрудника ------------------------------------------------------------------
let drawWorker = function(id) {
  let workersNode = document.querySelector('.workers-list')
  
  let workerCard = document.createElement('li')
  workerCard.classList.add('workers-list-worker')
  workerCard.id = id
  workersNode.appendChild(workerCard)

  let passiveCardsContainer = document.createElement('div')
  passiveCardsContainer.classList.add('passive-cards__container')
  workerCard.appendChild(passiveCardsContainer)

  let passiveCardsOpenButton = document.createElement('button')
  passiveCardsOpenButton.classList.add('passive-cards__open-button')
  passiveCardsContainer.appendChild(passiveCardsOpenButton)

  let passiveCardsCloseButton = document.createElement('button')
  passiveCardsCloseButton.classList.add('passive-cards__close-button')
  passiveCardsCloseButton.classList.add('hidden')
  passiveCardsContainer.appendChild(passiveCardsCloseButton)

  let passiveCardsHeader = document.createElement('div')
  passiveCardsHeader.classList.add('passive-cards__header')
  passiveCardsContainer.appendChild(passiveCardsHeader)

  let passiveCardsTitle = document.createElement('span')
  passiveCardsTitle.classList.add('passive-cards__title')
  passiveCardsTitle.textContent = 'Пассивные карточки'
  passiveCardsHeader.appendChild(passiveCardsTitle)

  let passiveCardsList = document.createElement('ul')
  passiveCardsList.classList.add('passive-cards__list')
  passiveCardsContainer.appendChild(passiveCardsList)

  let crownContainer = document.createElement('div')
  crownContainer.classList.add('worker-crown')
  crownContainer.classList.add('hidden')
  workerCard.appendChild(crownContainer)

  let crownImage = document.createElement('img')
  crownImage.classList.add('crown')
  crownImage.src = './images/crown.png'
  crownContainer.appendChild(crownImage)

  let cardTitle = document.createElement('div')
  cardTitle.classList.add('worker-title')
  workerCard.appendChild(cardTitle)

  let workerName = document.createElement('span')
  workerName.classList.add('worker-name')
  workerName.textContent = workersList[id].name
  cardTitle.appendChild(workerName)

  let getRandomCardButton = document.createElement('button')
  getRandomCardButton.classList.add('worker-get-random-card-button')
  getRandomCardButton.id = id
  if (workersList[id].rolls === 0) {
    getRandomCardButton.disabled = true
  }
  getRandomCardButton.textContent = workersList[id].level
  cardTitle.appendChild(getRandomCardButton)

  let rollsNumber = document.createElement('div')
  rollsNumber.classList.add('worker-rolls-bar')
  if (workersList[id].rolls > 0) {
    rollsNumber.textContent = workersList[id].rolls
  } else {
    rollsNumber.classList.add('hidden')
  }
  cardTitle.appendChild(rollsNumber)

  let progressContainer = document.createElement('div')
  progressContainer.classList.add('progress')
  workerCard.appendChild(progressContainer)

  let progressBack = document.createElement('div')
  progressBack.classList.add('progress-bg')
  progressContainer.appendChild(progressBack)

  let progressBar = document.createElement('div')
  progressBar.classList.add('progress-bar')
  progressContainer.appendChild(progressBar)

  let progressText = document.createElement('div')
  progressText.classList.add('progress-text')
  progressContainer.appendChild(progressText)

  let progressCurrentValue = document.createElement('span')
  progressCurrentValue.classList.add('progress-current-value')
  progressCurrentValue.classList.add('progress-text-inner')
  progressCurrentValue.textContent = workersList[id].currentExpOfLevel
  progressText.appendChild(progressCurrentValue)

  let progressSlash = document.createElement('span')
  progressSlash.classList.add('progress-text-inner')
  progressSlash.textContent = ' / '
  progressText.appendChild(progressSlash)

  let progressNeededValue = document.createElement('span')
  progressNeededValue.classList.add('progress-next-level-value')
  progressNeededValue.classList.add('progress-text-inner')
  progressNeededValue.textContent = workersList[id].neededExpToNextLevel
  progressText.appendChild(progressNeededValue)

  let cardsList = document.createElement('ul')
  cardsList.classList.add('workers-list-cards')
  workerCard.appendChild(cardsList)

  let adminPanelSelect = document.querySelector('.admin-panel-select')
  let workerOption = document.createElement('option')
  workerOption.classList.add('admin-panel-option')
  workerOption.value = id
  workerOption.textContent = workersList[id].name
  adminPanelSelect.appendChild(workerOption)

}

const expBrakpoints = [
0,     // 1 лвл
2100,  // 2 лвл
3300,  // 3 лвл
4600,  // 4 лвл
6000,  // 5 лвл
7500,  // 6 лвл
9200,  // 7 лвл
11100, // 8 лвл
13200, // 9 лвл
15500, // 10 лвл
18000, // 11 лвл
20800, // 12 лвл
23900, // 13 лвл
27300, // 14 лвл
31000, // 15 лвл
35100, // 16 лвл
39600, // 17 лвл
44600, // 18 лвл
50100, // 19 лвл
]

// Получить ID сотрудника и количество опыта, 
// установить уровень сотрудника, 
// значения опыта для прогресс-бара, количество 
// доступных роллов 
// ------------------------------------------------------------------------------------------------
let setWorkerLevel = function(workerId, expIncome) {
    workersList[workerId].exp += expIncome;
    let previousLevel = workersList[workerId].level
    if (workersList[workerId].exp >= expBrakpoints[0]) {workersList[workerId].level = 1; workersList[workerId].neededExpToNextLevel = expBrakpoints[1] - expBrakpoints[0]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[0]} 
    if (workersList[workerId].exp >= expBrakpoints[1]) {workersList[workerId].level = 2; workersList[workerId].neededExpToNextLevel = expBrakpoints[2] - expBrakpoints[1]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[1]}
    if (workersList[workerId].exp >= expBrakpoints[2]) {workersList[workerId].level = 3; workersList[workerId].neededExpToNextLevel = expBrakpoints[3] - expBrakpoints[2]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[2]}
    if (workersList[workerId].exp >= expBrakpoints[3]) {workersList[workerId].level = 4; workersList[workerId].neededExpToNextLevel = expBrakpoints[4] - expBrakpoints[3]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[3]}
    if (workersList[workerId].exp >= expBrakpoints[4]) {workersList[workerId].level = 5; workersList[workerId].neededExpToNextLevel = expBrakpoints[5] - expBrakpoints[4]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[4]}
    if (workersList[workerId].exp >= expBrakpoints[5]) {workersList[workerId].level = 6; workersList[workerId].neededExpToNextLevel = expBrakpoints[6] - expBrakpoints[5]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[5]}
    if (workersList[workerId].exp >= expBrakpoints[6]) {workersList[workerId].level = 7; workersList[workerId].neededExpToNextLevel = expBrakpoints[7] - expBrakpoints[6]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[6]}
    if (workersList[workerId].exp >= expBrakpoints[7]) {workersList[workerId].level = 8; workersList[workerId].neededExpToNextLevel = expBrakpoints[8] - expBrakpoints[7]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[7]}
    if (workersList[workerId].exp >= expBrakpoints[8]) {workersList[workerId].level = 9; workersList[workerId].neededExpToNextLevel = expBrakpoints[9] - expBrakpoints[8]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[8]}
    if (workersList[workerId].exp >= expBrakpoints[9]) {workersList[workerId].level = 10; workersList[workerId].neededExpToNextLevel = expBrakpoints[10] - expBrakpoints[9]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[9]}
    if (workersList[workerId].exp >= expBrakpoints[10]) {workersList[workerId].level = 12; workersList[workerId].neededExpToNextLevel = expBrakpoints[11] - expBrakpoints[10]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[10]}
    if (workersList[workerId].exp >= expBrakpoints[11]) {workersList[workerId].level = 13; workersList[workerId].neededExpToNextLevel = expBrakpoints[12] - expBrakpoints[11]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[11]}
    if (workersList[workerId].exp >= expBrakpoints[12]) {workersList[workerId].level = 14; workersList[workerId].neededExpToNextLevel = expBrakpoints[13] - expBrakpoints[12]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[12]}
    if (workersList[workerId].exp >= expBrakpoints[13]) {workersList[workerId].level = 15; workersList[workerId].neededExpToNextLevel = expBrakpoints[14] - expBrakpoints[13]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[13]}
    if (workersList[workerId].exp >= expBrakpoints[14]) {workersList[workerId].level = 16; workersList[workerId].neededExpToNextLevel = expBrakpoints[15] - expBrakpoints[14]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[14]}
    if (workersList[workerId].exp >= expBrakpoints[15]) {workersList[workerId].level = 17; workersList[workerId].neededExpToNextLevel = expBrakpoints[16] - expBrakpoints[15]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[15]}
    if (workersList[workerId].exp >= expBrakpoints[16]) {workersList[workerId].level = 18; workersList[workerId].neededExpToNextLevel = expBrakpoints[17] - expBrakpoints[16]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[16]}
    if (workersList[workerId].exp >= expBrakpoints[17]) {workersList[workerId].level = 19; workersList[workerId].neededExpToNextLevel = expBrakpoints[18] - expBrakpoints[17]; workersList[workerId].currentExpOfLevel = workersList[workerId].exp - expBrakpoints[17]}
    if (workersList[workerId].exp >= expBrakpoints[18]) {workersList[workerId].level = 20; workersList[workerId].neededExpToNextLevel = 999999}
    workersList[workerId].rolls = workersList[workerId].rolls + (workersList[workerId].level - previousLevel)
    showLevel(workerId)
    showExp(workerId)
    showRolls(workerId)
    showCrowns()
}

// Отрисовка уровня -------------------------------------------------------------------------------
const showLevel = function(id) {
  let currentLevelField = document.querySelectorAll('.worker-get-random-card-button')[id]
  currentLevelField.textContent = workersList[id].level
}

// Отрисовка прогресс-бара ------------------------------------------------------------------------
const showExp = function(id) {
  let progressBarCurrentValues = document.querySelectorAll('.progress-current-value')
  let progressBarNextLevelValues = document.querySelectorAll('.progress-next-level-value')
  let progressBars = document.querySelectorAll('.progress-bar')
  progressBarCurrentValues[id].textContent = workersList[id].currentExpOfLevel;
  progressBarNextLevelValues[id].textContent = workersList[id].neededExpToNextLevel;
  let currentBarPercent = Math.round((+workersList[id].currentExpOfLevel / +workersList[id].neededExpToNextLevel) * 100)
  progressBars[id].style.width = currentBarPercent + '%'
}

// Отрисовка доступных роллов ---------------------------------------------------------------------
const showRolls = function(id) {
  const getRandomButtons = document.querySelectorAll(".worker-get-random-card-button")
  const rollsBars = document.querySelectorAll(".worker-rolls-bar")
  if (workersList[id].rolls > 0 && cards.length > 0) {
    rollsBars[id].classList.remove('hidden')
    rollsBars[id].textContent = workersList[id].rolls
    getRandomButtons[id].disabled = false
  }
}

// Отрисовка пассивных карточек -------------------------------------------------------------------
let showPassiveCards = function(id) {

}

// Раскрытие списка пассивных карточек ------------------------------------------------------------
let openPassiveCards = function() {
  let currentCard = event.target.parentElement.parentElement
  let currentContainer = currentCard.querySelector('.passive-cards__container')
  currentContainer.classList.add('expanded')
  event.target.classList.add('hidden')
  let currentCoseButton = currentCard.querySelector('.passive-cards__close-button')
  currentCoseButton.classList.remove('hidden')
}

// Закрытие списка пассивных карточек ------------------------------------------------------------
let closePassiveCards = function() {
  let currentCard = event.target.parentElement.parentElement
  let currentContainer = currentCard.querySelector('.passive-cards__container')
  currentContainer.classList.remove('expanded')

  event.target.classList.add('hidden')
  let currentCoseButton = currentCard.querySelector('.passive-cards__open-button')
  currentCoseButton.classList.remove('hidden')
}

// Отрисовка корон --------------------------------------------------------------------------------
const showCrowns = function() {
  let crownsId = document.querySelectorAll('.worker-crown')
  let currentLevels = []
  for (i = 0; i < workersList.length; i++) {
    let levelIsNumber = Number(workersList[i].level)
    currentLevels.push(levelIsNumber)
  }
  let currentMaxLevel = Math.max.apply(null, currentLevels)
  if (currentMaxLevel > 1) {
    workersList.forEach(element => {
      if (element.level === currentMaxLevel) {
        element.isLeader = true
        crownsId[element.id].classList.remove('hidden')
      } 
      else {
        element.isLeader = false
        crownsId[element.id].classList.add('hidden')
      }
    })
  }
}

// Карточки закончились ---------------------------------------------------------------------------
const emptyDeckMessage = document.querySelector('.empty-deck-message')
const emptyDeckMessageText = emptyDeckMessage.querySelector('.empty-deck-message__text')

const checkCardDeck = function() {
  if (cards.length === 0) {
    let levelFields = document.querySelectorAll('.worker-get-random-card-button')
    levelFields.forEach(element => {
      element.disabled = true
    });
    emptyDeckMessageText.classList.remove('hidden')
  }
}


// Админ панель -----------------------------------------------------------------------------------
const adminPanel = document.querySelector('.admin-panel')
const adminPanelButtonMove = document.querySelector('.admin-panel-button-move')
const adminPanelButtonImage = document.querySelector('.admin-panel-button-image')
const adminPanelButtonSubmit = document.querySelector('.admin-panel-button-submit')
const adminPanelSelect = document.querySelector('.admin-panel-select')
const adminPanelInput = document.querySelector('.admin-panel-input')

// Открытие и закрытие панели
adminPanelButtonMove.addEventListener('click', () => {
  adminPanel.classList.toggle('pushed-in')
  adminPanelButtonImage.classList.toggle('rotated')
  adminPanelSelect.value = ''
  adminPanelInput.value = ''
})

// Начисленеи опыта по нажатию кнопки и запуск функций
adminPanelButtonSubmit.addEventListener('click', () => {
  let selectedWorker = adminPanelSelect.value
  let gainedExp = Number(adminPanelInput.value)
  setWorkerLevel(selectedWorker, gainedExp)
  adminPanelSelect.value = ''
  adminPanelInput.value = ''
})


// Сохранение и загрузка --------------------------------------------------------------------------
let saveData = function() {
  localStorage.setItem("worker0", JSON.stringify(worker0))
  // localStorage.setItem("worker1", JSON.stringify(worker1))
  // localStorage.setItem("worker2", JSON.stringify(worker2))
  // localStorage.setItem("worker3", JSON.stringify(worker3))
  // localStorage.setItem("worker4", JSON.stringify(worker4))
  console.log('data saved')
}


const loadData = function() {
  let loadedWorker0 = JSON.parse(localStorage.getItem("worker0"))
  // let loadedWorker1 = JSON.parse(localStorage.getItem("worker1"))
  // let loadedWorker2 = JSON.parse(localStorage.getItem("worker2"))
  // let loadedWorker3 = JSON.parse(localStorage.getItem("worker3"))
  // let loadedWorker4 = JSON.parse(localStorage.getItem("worker4"))
  if (loadedWorker0) {worker0 = loadedWorker0}
  // worker1 = loadedWorker1
  // worker2 = loadedWorker2
  // worker3 = loadedWorker3
  // worker4 = loadedWorker4
  console.log(worker0)
  // console.log(worker1)
  // console.log(worker2)
  // console.log(worker3)
  // console.log(worker4)
}


// Получить рандомную бонусную карту --------------------------------------------------------------
const getRandomBonusCard = function (currentWorkerId) {

  if (workersList[currentWorkerId].rolls > 0) {
    const rollsBars = document.querySelectorAll(".worker-rolls-bar")
    
    // Находим рандомно индекс карточки и её значение
    let currentCardIndex = Math.floor(Math.random() * cards.length);
    let currentCardValue = cards[currentCardIndex];

    // Создаём новый блок с этой карточкой
    let newWorkersCard = document.createElement("li")
    newWorkersCard.classList.add("bonus-card")

    // Название
    let newWorkersCardTitle = document.createElement("span")
    newWorkersCardTitle.classList.add("bonus-card-text")
    newWorkersCardTitle.innerHTML = currentCardValue
    newWorkersCard.setAttribute('data-workerId', currentWorkerId)

    // Поле выбора сотрудника при передаче
    let newBonusCardSelect = document.createElement("select")
    newBonusCardSelect.classList.add("bonus-card-select")

    // Опция-плейсхолдер в поле выбора передачи
    let newBonusCardOptionDisabled = document.createElement("option")
    newBonusCardSelect.classList.add("bonus-card-option")
    newBonusCardOptionDisabled.disabled = true
    newBonusCardOptionDisabled.selected = true

    // Сотрудники в поле выбора передачи
    let bonusOptions = []

    workersList.forEach(element => {
      let newBonusCardOption = document.createElement("option")
      newBonusCardOption.classList.add("bonus-card-option")
      newBonusCardOption.value = element.id
      newBonusCardOption.textContent = element.name
      bonusOptions.push(newBonusCardOption)
    });

    // Кнопка передачи карточки
    let newBonusCardGiveButton = document.createElement("button")
    newBonusCardGiveButton.classList.add("bonus-card-give-button")
    newBonusCardGiveButton.classList.add("bonus-card-button")

    // Кнопка использования карточки
    let newBonusCardUseButton = document.createElement("button")
    newBonusCardUseButton.classList.add("bonus-card-use-button")
    newBonusCardUseButton.classList.add("bonus-card-button")
    
    // Добавляем карточку сотруднику
    let currentWorkerHtmlNode = document.querySelectorAll(".workers-list-cards")[currentWorkerId];
    let currentChild = currentWorkerHtmlNode.appendChild(newWorkersCard);
    currentChild.appendChild(newWorkersCardTitle)
    currentChild.appendChild(newBonusCardSelect)
    newBonusCardSelect.appendChild(newBonusCardOptionDisabled)
    for (i = 0; i < bonusOptions.length; i++) {
      if (i != currentWorkerId) {
        newBonusCardSelect.appendChild(bonusOptions[i])
      } 
    }
    currentChild.appendChild(newBonusCardGiveButton)
    currentChild.appendChild(newBonusCardUseButton)

    // Удаляем из списка карточек вышедшую
    cards.splice(currentCardIndex, 1);

    // Добавляем вышедшую карту в объект сотрудника
    workersList[currentWorkerId].cards.push(currentCardValue);

    // Убавляем счётчик роллов
    workersList[currentWorkerId].rolls--
    rollsBars[currentWorkerId].textContent = workersList[currentWorkerId].rolls

    // Если счётчик становится равен нулю прячем его и деактивируем кнопку
    const getRandomButtons = document.querySelectorAll(".worker-get-random-card-button")
    if (workersList[currentWorkerId].rolls === 0) {
      rollsBars[currentWorkerId].classList.add('hidden')
      getRandomButtons[currentWorkerId].disabled = true
    }
  } 
  checkCardDeck()
};


// Сдвинуть бонусную карту ------------------------------------------------------------------------
let openBonusCard = function() {
  let currentCardTextBlock = event.target
  let currentCard = currentCardTextBlock.parentNode
  let currentCardSelect = currentCard.querySelector('.bonus-card-select')
  currentCardTextBlock.classList.toggle('moved-left')

  if (currentCardTextBlock.classList.contains('moved-left-far')) {
    currentCardTextBlock.classList.remove('moved-left-far')
    if (currentCardSelect.value) {
      currentCardSelect.value = ''
    }
  }
}

// Сдвинуть дальше бонусную карту -----------------------------------------------------------------
let openWideBonusCard = function() {
  let currentCard = event.target.parentElement
  let currentCardTextBlock = currentCard.querySelector('.bonus-card-text')
  currentCardTextBlock.classList.toggle('moved-left-far')
}

// Использовать бонусную карту --------------------------------------------------------------------
let useBonusCard = function() {
  let currentCard = event.target.parentElement
  let currentCardValue = currentCard.querySelector('.bonus-card-text').textContent
  let currentWorkerId = currentCard.dataset['workerid']
  let indexOfWorkerCard = workersList[currentWorkerId].cards.indexOf(currentCardValue)
  currentCard.remove()
  workersList[currentWorkerId].usedCards.push(currentCardValue)
  workersList[currentWorkerId].cards.splice(indexOfWorkerCard, 1)

  // Если пасивная
  if (currentCardValue = '') {

  }


  // Если П.И.Ц.Ц.А.
  if (currentCardValue === 'П') {
    let letterOneContainer = document.querySelectorAll('.pizza-box__letter-box')[0]
    letterOneContainer.classList.remove('pizza-box__letter-box--closed')
    letterOneContainer.classList.add('pizza-box__letter-box--opened')
  }
  if (currentCardValue === 'И') {
    let letterTwoContainer = document.querySelectorAll('.pizza-box__letter-box')[1]
    letterTwoContainer.classList.remove('pizza-box__letter-box--closed')
    letterTwoContainer.classList.add('pizza-box__letter-box--opened')
  }
  if (currentCardValue === 'Ц') {
    let letterThreeContainer = document.querySelectorAll('.pizza-box__letter-box')[2]
    let letterFourContainer = document.querySelectorAll('.pizza-box__letter-box')[3]
    if (letterThreeContainer.classList.contains('pizza-box__letter-box--closed')) {
      letterThreeContainer.classList.remove('pizza-box__letter-box--closed')
      letterThreeContainer.classList.add('pizza-box__letter-box--opened')
    } else {
      letterFourContainer.classList.remove('pizza-box__letter-box--closed')
      letterFourContainer.classList.add('pizza-box__letter-box--opened')
    }
  }
  if (currentCardValue === 'А') {
    let letterFiveContainer = document.querySelectorAll('.pizza-box__letter-box')[4]
    letterFiveContainer.classList.remove('pizza-box__letter-box--closed')
    letterFiveContainer.classList.add('pizza-box__letter-box--opened')
  }
}

// Передать бонусную карту ------------------------------------------------------------------------

let giveBonusCard = function() {
  let currentSelect = event.target
  let currentCard = currentSelect.parentNode
  let currentCardTextField = currentCard.querySelector('.bonus-card-text')
  let currentCardValue = currentCardTextField.textContent
  let currentWorkerId = currentCard.dataset['workerid']
  let newWorkerId = currentSelect.value
  let indexOfWorkerCard = workersList[currentWorkerId].cards.indexOf(currentCardValue)
  let newCardField = document.querySelectorAll('.workers-list-cards')[newWorkerId]
  
  // Меняем ID карты
  currentCard.dataset['workerid'] = newWorkerId

  // Удаляем сдвиг блока текста карты
  currentCardTextField.classList.remove('moved-left-far')
  currentCardTextField.classList.remove('moved-left')
  currentSelect.value = ''

  // Удаляем карту
  currentCard.remove()

  // Перемещаем карту в другой объект-сотрудник
  workersList[currentWorkerId].cards.splice(indexOfWorkerCard, 1)
  workersList[newWorkerId].cards.push(currentCardValue)
  
  // Отрисовываем карту у нового сотрудника и корректируем select (убираем его же)
  let newCard = newCardField.appendChild(currentCard)
  let newCardOptions = newCard.querySelectorAll('.bonus-card-option')
  for (i = 0; i < newCardOptions.length; i++) {
    if (newCardOptions[i].value === newWorkerId) {
      newCardOptions[i].value = currentWorkerId
      newCardOptions[i].textContent = workersList[currentWorkerId].name
    }
  }
}

// Слушатели --------------------------------------------------------------------------------------

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("worker-get-random-card-button")) {
    getRandomBonusCard(event.target.id);
  }
  if (event.target.classList.contains("bonus-card-text")) {
    openBonusCard()
  }
  if (event.target.classList.contains("bonus-card-use-button")) {
    useBonusCard()
  }
  if (event.target.classList.contains("bonus-card-give-button")) {
    openWideBonusCard()
  }
  if (event.target.classList.contains("passive-cards__open-button")) {
    openPassiveCards()
  }
  if (event.target.classList.contains("passive-cards__close-button")) {
    closePassiveCards()
  }
});

document.addEventListener('change', function(event) {
  if (event.target.classList.contains("bonus-card-select")) {
    giveBonusCard();
  }
})

const randomButton = document.querySelector('.random-button')
randomButton.addEventListener('click', () => {
  console.log('random!')
  workersList.forEach(element => {
    let id = element.id
    let exp = Math.round((Math.random() * 10000) + 3000)
    setWorkerLevel(id, exp)
  });
})