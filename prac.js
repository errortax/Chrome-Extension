//welcome element
const welcomeEl = document.getElementById("welcome-el")
function greeting(greet, name, emoji) {
    welcomeEl.textContent = `${greet}! ${name} ${emoji}`
}

greeting("Hey there", "User", "😀")

let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))

//deleting the unnecessery
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})

console.log(localStorage.getItem("first"))


//checking if local storage is truthy or not?
if (leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage
    render(myleads)
}

inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    render(myleads)
    clearThis(inputEl)
    localStorage.setItem("myleads", JSON.stringify(myleads))
    // or inputEl.value = ""
})

// const tabs = [
//     { url: "https://www.linkedin.com/in/tasmia-binte-monzoor" }
// ] dont need it anymore

//for excessing chrome tabs

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs[0].url)
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads)
    })


})

// for(let i=0; i< myleads.length; i++){
//     // ulEl.innerHTML +=  "<li> "+  myleads[i] + "</li>"
//     const li = document.createElement("li")
//     li.textContent = myleads[i]
//     ulEl.append(li)
// }

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li> <a target='_blank' href= '"+ myleads[i] +"'>" + myleads[i] + "</a></li>" 
        listItems += `<li>
    <a target="_blank" href=" ${leads[i]}">
   ${leads[i]}
    </a>
   </li>`
    }

    ulEl.innerHTML = listItems
}

function clearThis(inputEl) {
    inputEl.value = ""
}

