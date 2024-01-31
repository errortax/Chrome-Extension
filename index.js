// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count=0
// function increment(){
//     count=count+1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }
// let msg = "per"
// let username = "you have three notifications"
// // console.log(username  + msg)

// let msgToUser = "We have logged"
// console.log(msgToUser)

// let username="Tasmia"
// let greeting="Hi, my name is "
// let myGreeting = greeting + username
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

//  let username="Tasmia"
//  let greeting="Hi, my name is "

//  welcomeEl.innerText = greeting + username

//  let emoji = "👋"

//  welcomeEl.innerText = welcomeEl.innerText + emoji 

// let saveEl = document.getElementById("save-el")
// let count=0
// let countEl= document.getElementById("count-el")
// function increment(){
//   count+=1
//   countEl.innerText = count
// }

// countEl.innerText = "0"

// function save(){
//     var num= count + " - "
//     saveEl.textContent += num
// }

// let count=0
// let countEl = document.getElementById("count-el")

// let  saveEl = document.getElementById("save-el")
// function increment(){
//     count +=1
//     countEl.innerText = count
// }

//  function save(){
//      var num= count + " - "
//      saveEl.textContent += num
//      countEl.innerText = 0
//      count = 0
// }

// let firstName = "tasmia"
// let lastName = "binte monzoor"
// let fullName = firstName + " " +lastName
// console.log(fullName)

// let mypoint = 3
// function add3point(){
// mypoint +=3;
// }

// function remove1point(){
// mypoint--;
// }

// add3point()
// add3point()
// add3point()
// remove1point()
// remove1point()
// console.log(mypoint)

// let shoeBtn = document.getElementById("shoe-btn")
// function click(){
    
// }

// let num1=8
// let num2=2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// function add(){
//     let result = num1+ num2
// document.getElementById("sum-el").textContent="sum: " + result
// }
// function subtract(){
//     let result = num1- num2
//     document.getElementById("sum-el").textContent="sum: " + result
// }
// function multiply(){
//     let result = num1*num2
//     document.getElementById("sum-el").textContent="sum: " + result
// }

// function divide(){
//     let result = num1/num2
//     document.getElementById("sum-el").textContent="sum: " + result
// }


let firstCard = 0
let secondCard = 0
let cards=[]
let sum = 0
let hasBlackjack = false;
let isAlive = false
let msg = " "

let player = {
    name : "per",
    chips : 145,
    sayHello: function() {
        console.log("heisann!")
    }
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips + player.sayHello()

let msgEl = document.getElementById("message-el")
console.log(msgEl)

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
 let randomNum =  Math.floor(Math.random()*13+ 1)
 if(randomNum === 1){
    return 11
 }else if(randomNum === (11 || 12 || 13) ){
    return 10
 }
 else{
    return randomNum
 }
}

function startGame(){
   
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "sum is : "+ sum
    cardsEl.textContent = "cards: "
    for(let i=0; i<cards.length; i++){
       cardsEl.textContent += cards[i] + " "
    }
    // cardsEl.textContent = "card is : " + cards[0] + " " + cards[1]
    if(sum <= 20){
        msg = "do u want to draw a new card?"
    }else if(sum === 21){
        msg = "u've won the jackpot"
        //hasBlackjack = true
    }else{
        //console.log("u have lost the game")
       isAlive = false
        msg= "we're logging out"
    }

    msgEl.textContent = msg
}

function newCard(){
    if (isAlive==true && hasBlackjack==false){
    let card = getRandomCard()
   sum += card
   cards.push(card)
   renderGame()
}
}
// function rollDice(){
//  return Math.floor(Math.random()*6)+1
// }
// let randomNumber = rollDice()
// console.log(randomNumber)

// let player1time = 102
// let player2time = 107

// function totaltime(){
//     return player1time+player2time
// }

// let total = totaltime()
// console.log(total)
//cash out 


// //not alive 
// console.log(isAlive)
// let experience = [
//     "html",
//     "css",
//     "javascript",
//     "powerpoint",
//     "google workspace"
// ]

// let newEx = "machine work"
// experience.push(newEx)

// console.log(experience)
// experience.pop(2)

// console.log(experience)


// for (let i=0; i<experience.length; i++){
//     //console.log(experience[i])
// }

// let cards = [7,4,3]
// for(let i=0; i<cards.length; i++){
//     console.log(cards[i])
// }

// let sentence = ["hello ", "my ", "name ", "is ", "per"]
// let greetingEl = document.getElementById("greeting-el")
// for(let i=0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i]
// }