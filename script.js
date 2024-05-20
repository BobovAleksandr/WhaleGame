const getRandomButtons = document.querySelectorAll(".worker-get-random-card-button")
let crownsId = document.querySelectorAll('.worker-crown')

let worker0 = {
  id: 0,
  name: document.querySelectorAll('.worker-name')[0].textContent,
  exp: 0,
  level: 1,
  cards: [],
  usedCards: [],
};
let worker1 = {
  id: 1,
  name: document.querySelectorAll('.worker-name')[1].textContent,
  exp: 0,
  level: 1,
  cards: [],
  usedCards: [],
};
let worker2 = {
  id: 2,
  name: document.querySelectorAll('.worker-name')[2].textContent,
  exp: 0,
  level: 1,
  cards: [],
  usedCards: [],
};
let worker3 = {
  id: 3,
  name: document.querySelectorAll('.worker-name')[3].textContent,
  exp: 0,
  level: 1,
  cards: [],
  usedCards: [],
};
let worker4 = {
  id: 4,
  name: document.querySelectorAll('.worker-name')[4].textContent,
  exp: 0,
  level: 1,
  cards: [],
  usedCards: [],
};


let workersList = [worker0, worker1, worker2, worker3, worker4];
let currentWorkerId;

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
  "-200 руб. за неверные ценники",
];

const getCrown = function() {
  //Массив с уровнями сотрудников
  let workersLevels = []

  // Переводим все уровни работников в массив с числами
  let levelNumber
  for (i = 0; i < getRandomButtons.length; i++) {
    levelNumber = Number(getRandomButtons[i].textContent)
    workersLevels.push(levelNumber)
  }  

  // Ищем максимальный уровень (если он не равен 1)
  let maxLevel
  if (Math.max.apply(null, workersLevels) > 1) {
    maxLevel = Math.max.apply(null, workersLevels)
  } else return

  // Собираем массив с ID сотрудников, имеющих максимальный уровень
  let workersWithMaxLevels = []
  for (i = 0; i < workersLevels.length; i++) {
    if (workersLevels[i] === maxLevel) {
      workersWithMaxLevels.push(i)
    }
  }

  // Показываем короны с ID макисмальных уровней
  workersWithMaxLevels.forEach(element => {
    crownsId[element].classList.remove('hidden')
  });
}

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

const getRandomBonusCard = function () {
  // Находим рандомно индкс карточки и её значение
  let currentCardIndex = Math.floor(Math.random() * cards.length);
  let currentCardValue = cards[currentCardIndex];

  // Создаём новый блок с этой карточкой
  let newWorkersCard = document.createElement("li")
  let newWorkersCardTitle = document.createElement("span")
  newWorkersCardTitle.classList.add("bonus-card-text")

  newWorkersCardTitle.innerHTML = currentCardValue
  newWorkersCard.classList.add("bonus-card")
  newWorkersCard.setAttribute('data-workerId', currentWorkerId)

  // Добавляем карточку сотруднику
  let currentWorkerHtmlNode = document.querySelectorAll(".workers-list-cards")[currentWorkerId];
  let currentChild = currentWorkerHtmlNode.appendChild(newWorkersCard);
  currentChild.appendChild(newWorkersCardTitle)

  // Удаляем из списка карточек вышедшую
  cards.splice(currentCardIndex, 1);

  // добавляем вышедшую карту в объект сотрудника
  workersList[currentWorkerId].cards.push(currentCardValue);

  getCrown()
  // saveData()
};


let useBonusCard = function() {
  let currentUsedCard = event.target.children[0].innerHTML
  let currentWorkerId = event.target.getAttribute('data-workerId')
  for (i = 0; i < workersList.length; i++) {
    if (+currentWorkerId === +workersList[i].id) {
      workersList[i].usedCards.push(currentUsedCard)
      event.target.remove()
    }
  }
  let indexOfWorkerCard = workersList[currentWorkerId].cards.indexOf(currentUsedCard)
  workersList[currentWorkerId].cards.splice(indexOfWorkerCard, 1)

  // saveData()
}



document.addEventListener("click", function (event) {
  if (event.target.classList.contains("worker-get-random-card-button")) {
    currentWorkerId = event.target.id;
    getRandomBonusCard();
  }
  if (event.target.classList.contains("bonus-card")) {
    useBonusCard()
  }
  if (event.target.classList.contains("lvlButton")) {
    addLevel()
  }
});

