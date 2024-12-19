let randomNumder = Math.floor(Math.random() * 100)
let guessesArray = []

const form = document.querySelector('form')
const inputNumber = document.querySelector('.inputNumber')
const result = document.querySelector('.result')
const allguesses = document.querySelector('.all-guesses')
const rst = document.querySelector('.rst')
const submit = document.querySelector('.submit')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputNumberValue = parseInt(inputNumber.value)
    if (inputNumberValue < randomNumder) {
        result.innerText = 'Too Low'
    } else if (inputNumberValue > randomNumder) {
        result.innerText = 'Too High!'
    } else {
        result.innerText = 'Congrates!!! You got it ;)'
    }
    guessesArray.push(inputNumberValue)
    allguesses.innerText = 'Your Guesses : ' + guessesArray.join(', ')
    form.reset()

    if (inputNumberValue === randomNumder) {
        rst.disabled = false
        submit.disabled = true
    }

    if (guessesArray.length >= 10) {
        result.innerText = `You Lost The Game ! The Number is ${randomNumder} `
        rst.disabled = false
        submit.disabled = true
    }
})

rst.addEventListener('click', () => {
    result.innerText = ''
    allguesses.innerText = ''
    rst.disabled = true
    submit.disabled = false
    randomNumder = Math.floor(Math.random() * 100)
    guessesArray = []
})



