// let person = {
//     name: "tasmia",
//     age: 21,
//     country: "Bangladesh"
// }


// function logData(){
//     console.log(person.name + " is "+person.age+" years old and lives in "+person.country)

// }

// logData()

// let age = 100
// if(age < 6){
//     console.log("pass is free")
// }else if(age >=6 && age <=17){
//     console.log("child discount")
// }else if(age <= 27 && age >=66){
//     console.log("student discount")
// }else if(age > 66){
//     console.log("senior citizen discount")
// }

// let largeCountry = ["Tuvalua", "USA", "Bangladesh", "Indonesia", "Ireland"]
// for(let i=0; i<largeCountry.length; i++){
//     console.log("-"+ largeCountry[i])
// }
// console.log("now push and pull practice")
// largeCountry.shift("tuvalua")
// largeCountry.unshift("China")
// largeCountry.pop();
// largeCountry.push("India")

// for(let i=0; i<largeCountry.length; i++){
//     console.log("-"+ largeCountry[i])
// }

// let weekend = "sunday"
// let month = 1
// if ( weekend==="sunday" && month===1){
//     console.log("no way 🫨!!")
// }


//  return Math.floor(Math.random()*6)+1
// let hands = ["rock", "paper", "scisser"]

// function game(){
//  let i =Math.floor(Math.random()*3)
//  console.log(hands[i])
// }

// game()
// let fruits = ["🍎","🍎","🍎","🍊","🍊","🍊","🍎","🍎"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function place(){

//     for(let i=0; i<fruits.length; i++){
//         if(fruits[i]==="🍎"){
//             appleShelf.textContent += "🍎"
//         }else if(fruits[i]==="🍊"){
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }
// place()


// let btn = document.getElementById("input-btn")

// btn.addEventListener("click", function(){
//     console.log("button clicked from event listener")
// })

// let myLeads = []
// let inputEl = document.getElementById("input-el")

// let divContainer = document.getElementById("container")
// divContainer.innerHTML = "<button onclick='buy()'>" + "Buy!!" + "</button>"

// function buy(){
//     divContainer.innerHTML += "<p>" + "Thanks for buying " + "</p>"
// }

let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))

console.log(localStorage.getItem("first"))
// localStorage.clear()

//checking if local storage is truthy or not?
if(leadsFromLocalStorage){
    myleads= leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
   renderLeads()
   clearThis(inputEl)
   localStorage.setItem("myleads", JSON.stringify(myleads))
   // or inputEl.value = ""
})

// for(let i=0; i< myleads.length; i++){
//     // ulEl.innerHTML +=  "<li> "+  myleads[i] + "</li>"
//     const li = document.createElement("li")
//     li.textContent = myleads[i]
//     ulEl.append(li)
// }

function renderLeads(){
let listItems = ""

for(let i=0; i<myleads.length; i++){
    // listItems += "<li> <a target='_blank' href= '"+ myleads[i] +"'>" + myleads[i] + "</a></li>" 
   listItems += `<li>
    <a target="_blank" href=" ${myleads[i]}">
   ${myleads[i]}
    </a>
   </li>`
}

ulEl.innerHTML = listItems
}    

function clearThis(inputEl) {
    inputEl.value= "";
}



// function newTab(url) {
//     var win = window.open(url, '_blank');
//     win.focus();
//   }
 
// const recipient = "james"
// const email = `hey ${recipient} 
// how it is going?`
// console.log(email)



// console.log(learnCoding);

// let prac = `["www.google.com","www.twitter.com"]`
// prac = JSON.parse(prac)
// prac.push("www.linkedin.com")
// console.log(prac)

// prac = JSON.stringify(prac)
// console.log(prac)

