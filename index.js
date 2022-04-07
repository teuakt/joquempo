const $fieldPlayer1 = document.querySelector('.player1-gamefield')
const $fieldPlayer2 = document.querySelector('.player2-gamefield')

const $stoneButton1 = document.querySelector('.player1-stone-button')
const $paperButton1 = document.querySelector('.player1-paper-button')
const $scissorsButton1 = document.querySelector('.player1-scissors-button')

const $stoneButton2 = document.querySelector('.player2-stone-button')
const $paperButton2 = document.querySelector('.player2-paper-button')
const $scissorsButton2 = document.querySelector('.player2-scissors-button')


$stoneButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image"src="stone.png"/>'})

$paperButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image"src="paper.png"/>'})

$scissorsButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image"src="scissors.png"/>'})

$stoneButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image"src="stone.png"/>'})

$paperButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image"src="paper.png"/>'})

$scissorsButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image"src="scissors.png"/>'})