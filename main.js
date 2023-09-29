const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector("#result")
let cardsWon = []
let cardChoosen = []
let cardChoosenID = []

function createGrid() {
    for(i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
    resultDisplay.innerHTML = 0
}

createGrid()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const one = cardChoosen[0]
    const two = cardChoosen[1]

    if(cardChoosenID[0] === cardChoosenID[1]){
        alert('You clicked the same card!')
        return
    }
    if(one === two){
        alert('You found a match!')
        cards[cardChoosenID[0]].setAttribute('src', 'images/white.png')
        cards[cardChoosenID[1]].setAttribute('src', 'images/white.png')
        cards[cardChoosenID[0]].removeEventListener('click', flipCard)
        cards[cardChoosenID[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChoosen)
        resultDisplay.innerHTML = cardsWon.length
    }
    else{
        cards[cardChoosenID[0]].setAttribute('src', 'images/blank.png')
        cards[cardChoosenID[1]].setAttribute('src', 'images/blank.png')
        alert('Not a match!')
    }

    cardChoosen = []
    cardChoosenID = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations! You completed the Game"
    }
}

function flipCard(){
    const id = this.getAttribute('data-id')
    this.setAttribute('src', cardArray[id].img)
    cardChoosen.push(cardArray[id].name)
    cardChoosenID.push(id)
    if (cardChoosen.length == 2){
        setTimeout(checkMatch, 500)
    }
}