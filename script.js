let cards = [
  {id: 0, value: 'Освобождение от разгрузки', isPassive: false},
  {id: 1, value: 'Освобождение от разгрузки', isPassive: false},
  {id: 2, value: 'Освобождение от разгрузки', isPassive: false},
  {id: 3, value: 'Освобождение от разгрузки', isPassive: false},
  {id: 4, value: 'Освобождение от разгрузки', isPassive: false},
  {id: 5, value: 'Освобождение от разгрузки', isPassive: false},
  {id: 6, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 7, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 8, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 9, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 10, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 11, value: '-200 руб. за инвентаризацию', isPassive: true},
  {id: 12, value: '-200 руб. за инвентаризацию', isPassive: true},
  {id: 13, value: '-200 руб. за инвентаризацию', isPassive: true},
  {id: 14, value: '-200 руб. за инвентаризацию', isPassive: true},
  {id: 15, value: '-200 руб. за инвентаризацию', isPassive: true},
  {id: 16, value: 'Освобождение от выставления', isPassive: false},
  {id: 17, value: 'Освобождение от выставления', isPassive: false},
  {id: 18, value: 'Освобождение от выставления', isPassive: false},
  {id: 19, value: 'Освобождение от выставления', isPassive: false},
  {id: 20, value: 'Освобождение от выставления', isPassive: false},
  {id: 21, value: 'Освобождение от переоценки', isPassive: false},
  {id: 22, value: 'Освобождение от переоценки', isPassive: false},
  {id: 23, value: 'Освобождение от переоценки', isPassive: false},
  {id: 24, value: 'Освобождение от переоценки', isPassive: false},
  {id: 25, value: 'Освобождение от переоценки', isPassive: false},
  {id: 26, value: 'Освобождение от уборки', isPassive: false},
  {id: 27, value: 'Освобождение от уборки', isPassive: false},
  {id: 28, value: 'Освобождение от уборки', isPassive: false},
  {id: 29, value: 'Освобождение от уборки', isPassive: false},
  {id: 30, value: 'Освобождение от уборки', isPassive: false},
  {id: 31, value: '-200 руб. за неверные ценники', isPassive: true},
  {id: 32, value: '-200 руб. за неверные ценники', isPassive: true},
  {id: 33, value: '-200 руб. за неверные ценники', isPassive: true},
  {id: 34, value: '-200 руб. за неверные ценники', isPassive: true},
  {id: 35, value: '-200 руб. за неверные ценники', isPassive: true},
  {id: 36, value: '-300 позиций в инвентаризацию', isPassive: true},
  {id: 37, value: '-300 позиций в инвентаризацию', isPassive: true},
  {id: 38, value: '-300 позиций в инвентаризацию', isPassive: true},
  {id: 39, value: '-300 позиций в инвентаризацию', isPassive: true},
  {id: 40, value: '-300 позиций в инвентаризацию', isPassive: true},
  {id: 41, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 42, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 43, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 44, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 45, value: 'Передать дежурство другому УСМ', isPassive: false},
  {id: 46, value: 'Передать поручение УМ', isPassive: false},
  {id: 47, value: 'Передать поручение УМ', isPassive: false},
  {id: 48, value: 'Передать поручение УМ', isPassive: false},
  {id: 49, value: 'Передать поручение УМ', isPassive: false},
];

let workersList = [
  // worker0 = {
  //   id: 0,
  //   name: 'Костиков Юрий',
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
  // {
  //   id: 1,
  //   name: 'Сапожников Евгений',
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
  // {
  //   id: 2,
  //   name: 'Шаров Алексей',
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
  // {
  //   id: 3,
  //   name: 'Конев Михаил',
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

const addWorker = function(name, array) {
  let newWorker = {
    id: (array.length),
    name: name,
    exp: 0,
    currentExpOfLevel: 0,
    neededExpToNextLevel: 2100,
    level: 1,
    cards: [],
    usedCards: [],
    passiveCards: [],
    isLeader: false,
    rolls: 0,
  }
  array.push(newWorker)
  saveData()
  // location.reload()
}

const deleteWorker = function(name) {
  let deletingWorkerIndex = workersList.findIndex(worker => worker.name === name)
  workersList.splice(deletingWorkerIndex, 1)
  saveData()
  location.reload()
}

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

  workersList[id].cards.forEach(card => {
    showBonusCard(id, card)
  });

  workersList[id].passiveCards.forEach(card => {
    showPassiveCards(id, card)
  });

  let adminPanelSelect = document.querySelector('.admin-panel-select')
  let workerOption = document.createElement('option')
  workerOption.classList.add('admin-panel-option')
  workerOption.value = id
  workerOption.textContent = workersList[id].name
  adminPanelSelect.appendChild(workerOption)
  saveData()
}

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

// Отрисовка бонусных карт ------------------------------------------------------------------------
const showBonusCard = function(workerId, bonusCard) {
  // Создаём новый блок бонусной карточкой
  let newWorkersCard = document.createElement("li")
  newWorkersCard.classList.add("bonus-card")
  // Название
  let newWorkersCardTitle = document.createElement("span")
  newWorkersCardTitle.classList.add("bonus-card-text")
  newWorkersCardTitle.setAttribute('data-cardId', bonusCard.id)
  newWorkersCardTitle.innerHTML = bonusCard.value
  newWorkersCard.setAttribute('data-workerId', workerId)
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
  workersList.forEach(worker => {
    let newBonusCardOption = document.createElement("option")
    newBonusCardOption.classList.add("bonus-card-option")
    newBonusCardOption.value = worker.id
    newBonusCardOption.textContent = worker.name
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
  let currentWorkerHtmlNode = document.querySelectorAll(".workers-list-cards")[workerId];
  let currentChild = currentWorkerHtmlNode.appendChild(newWorkersCard);
  currentChild.appendChild(newWorkersCardTitle)
  currentChild.appendChild(newBonusCardSelect)
  newBonusCardSelect.appendChild(newBonusCardOptionDisabled)
  for (i = 0; i < bonusOptions.length; i++) {
    if (i != workerId) {
      newBonusCardSelect.appendChild(bonusOptions[i])
    } 
  }
  currentChild.appendChild(newBonusCardGiveButton)
  currentChild.appendChild(newBonusCardUseButton)
  saveData()
}

// Отрисовка уровня -------------------------------------------------------------------------------
const showLevel = function(id) {
  let currentLevelField = document.querySelectorAll('.worker-get-random-card-button')[id]
  currentLevelField.textContent = workersList[id].level
  saveData()
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
  saveData()
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
  saveData()
}

// Отрисовка пассивных карточек -------------------------------------------------------------------
let showPassiveCards = function(id, passiveCard) {
  const passiveCardsList = document.querySelectorAll('.passive-cards__list')[id]

  let newPassiveCard = document.createElement('li')
  newPassiveCard.classList.add('passive-cards__card')
  passiveCardsList.appendChild(newPassiveCard)

  let newPassiveCardValue = document.createElement('span')
  newPassiveCardValue.classList.add('bonus-card__text')
  newPassiveCardValue.textContent = passiveCard.value
  newPassiveCard.appendChild(newPassiveCardValue)
  saveData()
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

// Закрытие списка пассивных карточек -------------------------------------------------------------
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
    workersList.forEach(worker => {
      if (worker.level === currentMaxLevel) {
        worker.isLeader = true
        crownsId[worker.id].classList.remove('hidden')
      } 
      else {
        worker.isLeader = false
        crownsId[worker.id].classList.add('hidden')
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
    levelFields.forEach(field => {
      field.disabled = true
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

const adminPanelPasswordContainer = document.querySelector('.admin-panel-password')
const adminPanelPasswordInput = document.querySelector('.admin-panel-password-input')
const adminPanelPasswordButton = document.querySelector('.admin-panel-password-submit')

// Открытие и закрытие панели
adminPanelButtonMove.addEventListener('click', () => {
  if ((adminPanelPasswordContainer.classList.contains('pushed-in') === true) && (adminPanel.classList.contains('pushed-in') === false)) {
    adminPanel.classList.add('pushed-in')
  } else if ((adminPanelPasswordContainer.classList.contains('pushed-in') === true) && (adminPanel.classList.contains('pushed-in') === true)) {
    adminPanel.classList.remove('pushed-in')
    adminPanelPasswordContainer.classList.remove('pushed-in')
  } else if ((adminPanelPasswordContainer.classList.contains('pushed-in') === false) && (adminPanel.classList.contains('pushed-in') === false)) {
    adminPanel.classList.add('pushed-in')
    adminPanelPasswordContainer.classList.add('pushed-in')
  }
  adminPanelButtonMove.classList.toggle('pushed-in')
  adminPanelButtonImage.classList.toggle('rotated')
  adminPanelSelect.value = ''
  adminPanelInput.value = ''
  adminPanelPasswordInput.value = ''
})

// Задать новый пароль
let changePassword = function(newPass) {
  adminPassword = newPass
  localStorage.setItem('currentPassword', adminPassword)
}

// Если пароль не задан, то по умолчанию - "123456"
if (!localStorage.getItem('currentPassword')) {
  let adminPassword = 123456
  localStorage.setItem('currentPassword', adminPassword)
}

// Ввод пароля
adminPanelPasswordButton.addEventListener('click', () => {
  let currentPassword = adminPanelPasswordInput.value
  if (currentPassword === localStorage.getItem('currentPassword')) {
    adminPanelPasswordContainer.classList.toggle('pushed-in')
  } else {
    let turnRed = function() {
      adminPanelPasswordInput.classList.toggle('input-red')
      adminPanelPasswordInput.placeholder = 'Пароль неверный'
    }
    turnRed()
    setTimeout(() => {
      turnRed()
      adminPanelPasswordInput.placeholder = 'Введите пароль'
    }, 1000);
  }
  adminPanelPasswordInput.value = ''
})

// Начисленеи опыта по нажатию кнопки и запуск функций
adminPanelButtonSubmit.addEventListener('click', () => {
  let selectedWorker = adminPanelSelect.value
  let gainedExp = Number(adminPanelInput.value)
  setWorkerLevel(selectedWorker, gainedExp)
  adminPanelSelect.value = ''
  adminPanelInput.value = ''
})

// Закрытие админки при клике мимо неё
const adminPanelContainer = document.querySelector('.admin-panel-container')

document.addEventListener('click', (event) => {
  if (event.target !== adminPanelButtonMove) {
    const modalRect = adminPanelContainer.getBoundingClientRect();
    if (
      event.clientX < modalRect.left ||
      event.clientX > modalRect.right ||
      event.clientY < modalRect.top ||
      event.clientY > modalRect.bottom
    ) {
      console.log('ssssssssssss')

      
      // adminPanelContainer.close();
    }
  }
})


// Сохранение и загрузка --------------------------------------------------------------------------
let saveData = function() {
  localStorage.setItem('workersList', JSON.stringify(workersList))
  localStorage.setItem('cardsList', JSON.stringify(cards))
}

const loadData = function() {
  if (JSON.parse(localStorage.getItem("workersList"))) {
    workersList = JSON.parse(localStorage.getItem("workersList"))
    cards = JSON.parse(localStorage.getItem("cardsList"))
  } else {
    workersModal.showModal()
    getModalContent()
  }
  workersList.forEach(worker => {
    drawWorker(worker.id)
    showLevel(worker.id)
    showExp(worker.id)
    showRolls(worker.id)
  });
  checkCardDeck()
  showCrowns()
}

document.addEventListener('DOMContentLoaded', () => {
  loadData()
  loadTg()
})

// Очистка Local Storage --------------------------------------------------------------------------
const clearLS = function() {
  localStorage.clear()
}

// Ручная загрузка --------------------------------------------------------------------------------
const load = function() {
  workersList.forEach(worker => {
    drawWorker(worker.id)
    showLevel(worker.id)
    showExp(worker.id)
    showRolls(worker.id)
    showCrowns()
    checkCardDeck()
  });
}

// Получить рандомную бонусную карту --------------------------------------------------------------
const getRandomBonusCard = function (currentWorkerId) {

  if (workersList[currentWorkerId].rolls > 0) {
    const rollsBars = document.querySelectorAll(".worker-rolls-bar")
    // Находим рандомно индекс карточки и её значение
    let randomNumber = Math.floor(Math.random() * cards.length);
    let currentBonusCard = cards.find(card => cards.indexOf(card) === randomNumber)
    // Отрисовываем карту
    showBonusCard(currentWorkerId, currentBonusCard)
    // Удаляем из списка карточек вышедшую
    let currentCardIndex = cards.indexOf(currentBonusCard)
    cards.splice(currentCardIndex, 1);
    // Добавляем вышедшую карту в объект сотрудника
    workersList[currentWorkerId].cards.push(currentBonusCard);
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
  saveData()
};

// Сдвинуть бонусную карту ------------------------------------------------------------------------
let openBonusCard = function() {
  let currentCardTextBlock = event.target
  let currentCard = currentCardTextBlock.parentNode
  let currentCardSelect = currentCard.querySelector('.bonus-card-select')

  let allCardstextBlocksMoved = document.querySelectorAll('.moved-left')
  allCardstextBlocksMoved.forEach(card => {
    if (card !== currentCardTextBlock) {
      card.classList.remove('moved-left')
      card.classList.remove('moved-left-far')
    }
  });

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
  let currentCardSpan = currentCard.querySelector('.bonus-card-text')
  let currentCardValue = currentCardSpan.textContent
  let currentCardId = +currentCardSpan.dataset['cardid']
  let currentWorkerId = +currentCard.dataset['workerid']

  // Ищем объект текущей карты по ID
  let currentBonusCard = workersList[currentWorkerId].cards.find(card => +card.id === currentCardId)

  // Ищем индекс карты в массиве cards сотрудника
  let currentBonusCardIndex = workersList[currentWorkerId].cards.indexOf(currentBonusCard)

  // Перемещаем карту в колоду использованных
  workersList[currentWorkerId].usedCards.push(currentBonusCard)

  // Удаляем из списка текущих карт и из списка на странице
  workersList[currentWorkerId].cards.splice(currentBonusCardIndex, 1)
  currentCard.remove()

  // Если пасивная
  if (currentBonusCard.isPassive) {
    workersList[currentWorkerId].passiveCards.push(currentBonusCard)   
    showPassiveCards(currentWorkerId, currentBonusCard) 
  }

  // Если П.И.Ц.Ц.А.
  // if (currentCardValue === 'П') {
  //   let letterOneContainer = document.querySelectorAll('.pizza-box__letter-box')[0]
  //   letterOneContainer.classList.remove('pizza-box__letter-box--closed')
  //   letterOneContainer.classList.add('pizza-box__letter-box--opened')
  // }
  // if (currentCardValue === 'И') {
  //   let letterTwoContainer = document.querySelectorAll('.pizza-box__letter-box')[1]
  //   letterTwoContainer.classList.remove('pizza-box__letter-box--closed')
  //   letterTwoContainer.classList.add('pizza-box__letter-box--opened')
  // }
  // if (currentCardValue === 'Ц') {
  //   let letterThreeContainer = document.querySelectorAll('.pizza-box__letter-box')[2]
  //   let letterFourContainer = document.querySelectorAll('.pizza-box__letter-box')[3]
  //   if (letterThreeContainer.classList.contains('pizza-box__letter-box--closed')) {
  //     letterThreeContainer.classList.remove('pizza-box__letter-box--closed')
  //     letterThreeContainer.classList.add('pizza-box__letter-box--opened')
  //   } else {
  //     letterFourContainer.classList.remove('pizza-box__letter-box--closed')
  //     letterFourContainer.classList.add('pizza-box__letter-box--opened')
  //   }
  // }
  // if (currentCardValue === 'А') {
  //   let letterFiveContainer = document.querySelectorAll('.pizza-box__letter-box')[4]
  //   letterFiveContainer.classList.remove('pizza-box__letter-box--closed')
  //   letterFiveContainer.classList.add('pizza-box__letter-box--opened')
  // }
  saveData()
  sendUseCardMessage(currentWorkerId, currentBonusCard)
}

// Передать бонусную карту ------------------------------------------------------------------------
let giveBonusCard = function() {
  let currentSelect = event.target // select
  let currentCard = currentSelect.parentNode // li
  let currentCardTextField = currentCard.querySelector('.bonus-card-text') // span
  let currentBonusCardId = currentCardTextField.dataset['cardid'] 

  // Находим ID сотрудника, у которого карта находится сейчас
  let currentWorkerId = currentCard.dataset['workerid'] 
  // Находим бонусную карту (объект)
  let currentBonusCard = workersList[currentWorkerId].cards.find(card => +card.id === +currentCardTextField.dataset['cardid'])
  // Находим ID нового сотрудника
  let newWorkerId = currentSelect.value
  // let indexOfWorkerCard = workersList[currentWorkerId].cards.indexOf(currentCardValue)
  let newCardField = document.querySelectorAll('.workers-list-cards')[newWorkerId]
  
  // Меняем ID сотрудника в карте
  currentCard.dataset['workerid'] = newWorkerId

  // Удаляем сдвиг блока текста карты
  currentCardTextField.classList.remove('moved-left-far')
  currentCardTextField.classList.remove('moved-left')
  currentSelect.value = ''

  // Удаляем карту
  currentCard.remove()

  // Перемещаем карту в другой объект-сотрудник
  let currentBonusCardIndex = workersList[currentWorkerId].cards.findIndex(card => +card.id === +currentBonusCardId)
  workersList[currentWorkerId].cards.splice(currentBonusCardIndex, 1)
  workersList[newWorkerId].cards.push(currentBonusCard)
  
  // Отрисовываем карту у нового сотрудника и корректируем select (убираем его же)
  let newCard = newCardField.appendChild(currentCard)
  let newCardOptions = newCard.querySelectorAll('.bonus-card-option')
  for (i = 0; i < newCardOptions.length; i++) {
    if (newCardOptions[i].value === newWorkerId) {
      newCardOptions[i].value = currentWorkerId
      newCardOptions[i].textContent = workersList[currentWorkerId].name
    }
  }
  saveData()
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

// Рандом -----------------------------------------------------------------------------------------
const randomButton = document.querySelector('.random-button')
if (randomButton) {
  randomButton.addEventListener('click', () => {
    getRandom()
  })
}

const getRandom = function() {
  workersList.forEach(worker => {
    let id = worker.id
    let exp = Math.round((Math.random() * 10000) + 3000)
    setWorkerLevel(id, exp)
  });
}

// Telegram бот -----------------------------------------------------------------------------------
const setTelegramBotInfo = function(token, chatLink) {
  localStorage.setItem('telegramToken', token)
  localStorage.setItem('telegramChatLink', chatLink)
  location.reload()
  let TELEGRAM_BOT_TOKEN
  let TELEGRAM_CHAT_ID
  let API
}

const loadTg = () => {
  if (localStorage.getItem('telegramToken')) {
    TELEGRAM_BOT_TOKEN = localStorage.getItem('telegramToken')
    API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  }
  
  if (localStorage.getItem('telegramChatLink')) {
    TELEGRAM_CHAT_ID = localStorage.getItem('telegramChatLink');
  }
}


// let TELEGRAM_BOT_TOKEN = '7060733985:AAEtTTUvLUYHGmNSCv_Euj6cET584NuWRd0';
// let TELEGRAM_CHAT_ID = '@DNSWhaleGame'


let animalsPic = ['🐶', '🐵', '🐭', '🦊', '🐻', '🐷', '🦁', '🐯', '🐱', '🐹']


async function sendUseCardMessage(workerId, card) {
  let randomPic = animalsPic[Math.floor(Math.random() * animalsPic.length)]
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `${randomPic} ${workersList[workerId].name} использовал карту\n\n✅ ${card.value} ✅`
      })
    });
  } catch (error) {
  }
}


// Модальное окно на старте -----------------------------------------------------------------------
let workersModal = document.querySelector('.workers-modal')
let workersModalList = document.querySelector('.workers-modal__list')
let workersModalButtonAdd = document.querySelector('.workers-modal__button--add')
let workersModalButtonsRemove = document.querySelectorAll('.workers-modal__button--remove')
let workersModalSubmit = document.querySelector('.workers-modal__submit')
let workersModalCancel = document.querySelector('.workers-modal__cancel')

// Заполнить модальное окно input'ами
let getModalContent = function(name) {
  let workersModalItems = document.querySelectorAll('.workers-modal__item')
  if (workersModalItems.length < 6) {
    let newWorkersListItem = document.createElement('li')
    newWorkersListItem.classList.add('workers-modal__item')
    workersModalList.appendChild(newWorkersListItem)
    let newWorkersListInput = document.createElement('input')
    newWorkersListInput.classList.add('workers-modal__input')
    newWorkersListInput.type = "text"
    if (name) {
      newWorkersListInput.value = name
    }
    newWorkersListItem.appendChild(newWorkersListInput)
    let newWorkersListButton = document.createElement('button')
    newWorkersListButton.classList.add('workers-modal__button--remove')
    newWorkersListButton.type = "button"
    newWorkersListItem.appendChild(newWorkersListButton)
  }
  checkLastRemoveButton()
}

// При нажатии на "+" добавляется input
workersModalButtonAdd.addEventListener('click', () => {
  getModalContent()
  checkLastRemoveButton()
})

// Если input один, то у него не отображается кнопка "-"
let checkLastRemoveButton = function() {
  let workersModalItems = document.querySelectorAll('.workers-modal__item')
  if (workersModalItems.lenght > 0) {
    let currentRemoveButton = workersModalItems[0].querySelector('.workers-modal__button--remove')
    if (workersModalItems.length == 1) {
      currentRemoveButton.classList.add('hidden')
    } else {
      currentRemoveButton.classList.remove('hidden')
    }
  }
}

// При нажатии на "-" удаляется этот же input
document.addEventListener('click', (event) => {
  let workersModalItems = document.querySelectorAll('.workers-modal__item')
  if (event.target.classList.contains('workers-modal__button--remove')) {
    let currentItem = event.target.parentElement
    if (workersModalItems.length > 1) {
      currentItem.remove()
    }
  }
  checkLastRemoveButton()
})

// Нажатие отмены
workersModalCancel.addEventListener('click', (event) => {
  if (workersList.length == '') {
    showModal()
  } else {
    workersModal.close()
  }
})

// Закрытие модального окна при клике на backdrop
workersModal.addEventListener('click', (event) => {
  const modalRect = workersModal.getBoundingClientRect();
  if (
    event.clientX < modalRect.left ||
    event.clientX > modalRect.right ||
    event.clientY < modalRect.top ||
    event.clientY > modalRect.bottom
  ) {
    workersModal.close();
  }
})

// При нажатии "Готово" создается массив с именами сотрудников
workersModalSubmit.addEventListener("click", (event) => {
  let newWorkersList = []
  event.preventDefault();

  // Для каждого заполненного input'a создаём сотрудника или сохраняем текущего
  let workersModalInputs = document.querySelectorAll(".workers-modal__input");
  workersModalInputs.forEach((input) => {
    if (input.value) {
      let existingWorker = workersList.find(worker => worker.name === input.value)
      if (existingWorker) {
        newWorkersList.push(existingWorker)
      } else {
        addWorker(input.value, newWorkersList)
      }
      workersModal.close();
      location.reload()
    } 
  });
  // Обнуляем список сотрудников
  workersList.length = 0
  // Перезаполняем список сотрудников
  for (i = 0; i < newWorkersList.length; i++) {
    newWorkersList[i].id = i
    workersList.push(newWorkersList[i])
  }
  saveData()
});

// Запрещаем закрывать модальное окно через Esc
workersModal.addEventListener('cancel', (event) => {
  event.preventDefault();
})

// При вызове модального окна загружаем имена сотрудников в input'ы
let showModal = function() {
  workersModalList.innerHTML = ''
  workersList.forEach(worker => {
    getModalContent(worker.name)
  });
  workersModalCancel.classList.remove('hidden')
  checkLastRemoveButton()
  workersModal.showModal()
}