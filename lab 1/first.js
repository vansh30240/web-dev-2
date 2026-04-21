let form = document.querySelector('form')
let eventtitle = document.querySelector('#event-title')
let eventdate = document.querySelector('#event-date')
let eventcategory = document.querySelector('#event-category')
let eventdescription = document.querySelector('#event-description')
let clearbtn = document.querySelector('#clear-button')
let addsample = document.querySelector('#add-sample')
let container = document.querySelector("#event-handling-container")

function removeEmptyText(){
    let empty = document.querySelector(".empty-text")
    if(empty) empty.remove()
}
function createEventCard(title,date,category,desc){
    removeEmptyText()

    let card = document.createElement("div")
    card.className="event-card"
    card.innerHTML=`
        <button class="close-btn" onclick="this.parentElement.remove()"></button>
        <h4>${title}</h4>
        <div class="event-date"> ${date}</div>
        <div class="badge">${category}</div>
        <p>${desc}</p>
    `
    container.append(card)
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    createEventCard(
        eventtitle.value,
        eventdate.value,
        eventcategory.value,
        eventdescription.value
    )
    form.reset()
})
clearbtn.addEventListener("click",()=>{
    container.innerHTML=`<div class="empty-text">No events yet. Add your first event!</div>`
})

addsample.addEventListener("click",()=>{
    createEventCard("Web Development Conference","2026-02-15","Conference","Annual conference on modern web technologies.")
    createEventCard("JavaScript Workshop","2026-02-20","Workshop","Hands-on JavaScript learning session.")
})
let keyOutput=document.querySelector("#key-output")
document.addEventListener("keydown",(e)=>{
    keyOutput.value="You pressed: " + e.key
})