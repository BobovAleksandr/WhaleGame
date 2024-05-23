const getRandomButtons = document.querySelectorAll(".worker-get-random-card-button")


let crownsId = document.querySelectorAll('.worker-crown')

const cards = [
  "Освобождение от разгрузки",
  "Освобождение от дежурства",
  "-200 руб. в инвентаризацию",
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
];

let worker0 = {
  id: 0,
  name,
  exp: 0,
  currentExpOfLevel: 0,
  neededExpToNextLevel: 2100,
  level: 1,
  cards: [],
  usedCards: [],
  isLeader: false,
  rolls: 0,
};
let worker1 = {
  id: 1,
  name,
  exp: 0,
  currentExpOfLevel: 0,
  neededExpToNextLevel: 2100,
  level: 1,
  cards: [],
  usedCards: [],
  isLeader: false,
  rolls: 0,
};
let worker2 = {
  id: 2,
  name,
  exp: 0,
  currentExpOfLevel: 0,
  neededExpToNextLevel: 2100,
  level: 1,
  cards: [],
  usedCards: [],
  isLeader: false,
  rolls: 0,
};
let worker3 = {
  id: 3,
  name,
  exp: 0,
  currentExpOfLevel: 0,
  neededExpToNextLevel: 2100,
  level: 1,
  cards: [],
  usedCards: [],
  isLeader: false,
  rolls: 0,
};
let worker4 = {
  id: 4,
  name, 
  exp: 0,
  currentExpOfLevel: 0,
  neededExpToNextLevel: 2100,
  level: 1,
  cards: [],
  usedCards: [],
  isLeader: false,
  rolls: 0,
};

let workersList = []

if (document.querySelectorAll('.worker-name')[0]) {worker0.name = document.querySelectorAll('.worker-name')[0].textContent; workersList.push(worker0)}
if (document.querySelectorAll('.worker-name')[1]) {worker1.name = document.querySelectorAll('.worker-name')[1].textContent; workersList.push(worker1)}
if (document.querySelectorAll('.worker-name')[2]) {worker2.name = document.querySelectorAll('.worker-name')[2].textContent; workersList.push(worker2)}
if (document.querySelectorAll('.worker-name')[3]) {worker3.name = document.querySelectorAll('.worker-name')[3].textContent; workersList.push(worker3)}
if (document.querySelectorAll('.worker-name')[4]) {worker4.name = document.querySelectorAll('.worker-name')[4].textContent; workersList.push(worker4)}


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

// -------------------- Получить ID сотрудника и количество опыта, установить уровень сотрудника, значения опыта для прогресс-бара, количество доступных роллов --------------------
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
}


// -------------------- Загрузить значения опыта в прогресс-бар --------------------

let progressBarCurrentValues = document.querySelectorAll('.progress-current-value')
let progressBarNextLevelValues = document.querySelectorAll('.progress-next-level-value')
let progressBars = document.querySelectorAll('.progress-bar')

const getExpValues = function() {
  workersList.forEach(element => {
    progressBarCurrentValues[element.id].textContent = element.currentExpOfLevel;
    progressBarNextLevelValues[element.id].textContent = element.neededExpToNextLevel;
    let currentBarPercent = Math.round((+element.currentExpOfLevel / +element.neededExpToNextLevel) * 100)
    progressBars[element.id].style.width = currentBarPercent + '%'
  });
}

// -------------------- Загрузить роллы сотрудникам --------------------

const rollsBars = document.querySelectorAll(".worker-rolls-bar")

const getRolls = function() {
  workersList.forEach(element => {
    if (element.rolls > 0) {
      rollsBars[element.id].classList.remove('hidden')
      rollsBars[element.id].textContent = element.rolls
      getRandomButtons[element.id].disabled = false
    } 
  });
}


// -------------------- Загрузить короны для сотрудников с максимальным уровнем --------------------
const getCrown = function() {
  let currentLevels = []
  for (i = 0; i < workersList.length; i++) {
    let levelIsNumber = Number(workersList[i].level)
    currentLevels.push(levelIsNumber)
  }
  let currentMaxLevel = Math.max.apply(null, currentLevels)
  if (currentMaxLevel > 1) {
    workersList.forEach(element => {
      if (element.level === currentMaxLevel) {
        crownsId[element.id].classList.remove('hidden')
        element.isLeader = true
      } else {
        crownsId[element.id].classList.add('hidden')
        element.isLeader = false
      }
    })
  }
}

// -------------------- Админ панель --------------------
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
  console.log('1')
})

// начисленеи опыта по нажатию кнопки и запуск функций
adminPanelButtonSubmit.addEventListener('click', () => {
  let selectedWorker = adminPanelSelect.value
  let gainedExp = Number(adminPanelInput.value)
  setWorkerLevel(selectedWorker, gainedExp)
  adminPanelSelect.value = ''
  adminPanelInput.value = ''
  getExpValues()
  getRolls()
  getCrown()
  loadLevels()
})



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

// -------------------- Загрузить уровни сотрудников на страницу --------------------
const loadLevels = function() {
  workersList.forEach(element => {
    let currentId = element.id
    getRandomButtons[currentId].textContent = workersList[currentId].level
  });
}


// -------------------- Получить рандомную бонусную карту --------------------
const getRandomBonusCard = function (currentWorkerId) {

  if (workersList[currentWorkerId].rolls > 0) {
    
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

    // Опция-плейсхолдер
    let newBonusCardOptionDisabled = document.createElement("option")
    newBonusCardSelect.classList.add("bonus-card-option")
    newBonusCardOptionDisabled.disabled = true
    newBonusCardOptionDisabled.selected = true

    // Сотрудники
    let bonusOptions = []

    if (worker0.name) {
      let newBonusCardOption0 = document.createElement("option")
      newBonusCardOption0.classList.add("bonus-card-option")
      newBonusCardOption0.value = 0
      newBonusCardOption0.textContent = workersList[0].name
      bonusOptions.push(newBonusCardOption0)
    }

    if (worker1.name) {
      let newBonusCardOption1 = document.createElement("option")
      newBonusCardOption1.classList.add("bonus-card-option")
      newBonusCardOption1.value = 1
      newBonusCardOption1.textContent = workersList[1].name
      bonusOptions.push(newBonusCardOption1)
    }

    if (worker2.name) {
      let newBonusCardOption2 = document.createElement("option")
      newBonusCardOption2.classList.add("bonus-card-option")
      newBonusCardOption2.value = 2
      newBonusCardOption2.textContent = workersList[2].name
      bonusOptions.push(newBonusCardOption2)
    }

    if (worker3.name) {
      let newBonusCardOption3 = document.createElement("option")
      newBonusCardOption3.classList.add("bonus-card-option")
      newBonusCardOption3.value = 3
      newBonusCardOption3.textContent = workersList[3].name
      bonusOptions.push(newBonusCardOption3)
    }

    if (worker4.name) {
      let newBonusCardOption4 = document.createElement("option")
      newBonusCardOption4.classList.add("bonus-card-option")
      newBonusCardOption4.value = 4
      newBonusCardOption4.textContent = workersList[4].name
      bonusOptions.push(newBonusCardOption4)
    }


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
    if (workersList[currentWorkerId].rolls === 0) {
      rollsBars[currentWorkerId].classList.add('hidden')
      getRandomButtons[currentWorkerId].disabled = true
    }
  } 
  // saveData()
};


// -------------------- Сдвинуть бонусную карту --------------------

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
    // saveData()
}

// -------------------- Сдвинуть дальше бонусную карту --------------------

let openWideBonusCard = function() {
  let currentCard = event.target.parentElement
  let currentCardTextBlock = currentCard.querySelector('.bonus-card-text')
  currentCardTextBlock.classList.toggle('moved-left-far')
}

// -------------------- Использовать бонусную карту --------------------

let useBonusCard = function() {
  let currentCard = event.target.parentElement
  let currentCardValue = currentCard.querySelector('.bonus-card-text').textContent
  let currentWorkerId = currentCard.dataset['workerid']
  let indexOfWorkerCard = workersList[currentWorkerId].cards.indexOf(currentCardValue)
  currentCard.remove()
  workersList[currentWorkerId].usedCards.push(currentCardValue)
  workersList[currentWorkerId].cards.splice(indexOfWorkerCard, 1)
}

// -------------------- Передать бонусную карту --------------------

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

// -------------------- Слушатели --------------------

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
    getExpValues()
    getRolls()
    getCrown()
    loadLevels()
  });
})