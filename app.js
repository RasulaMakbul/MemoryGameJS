document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenID = []
    var cardWon = []

    //createing board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'image/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenID[0]
        const optionTwoId = cardsChosenID[1]
        if (cardsChosenID[0] === cardsChosenID[1]) {
            alart('youfound a match')
            cards[optionOneId].setAttribute('src', 'image/white.png')
            cards[optionTwoId].setAttribute('src', 'image/white.png')
            cardWon.push(cardsChosen)
            //grid.appendChild(card)
        } else {
            cards[optionOneId].setAttribute('src', 'Image/blank.png')
            cards[optionTwoId].setAttribute('src', 'Image/blank.png')
            alart('sorry try again')
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardWon.length
        if (cardWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulation! You found All!!!'
        }
    }


    //flip cards

    function flipCard() {
        var cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()



})