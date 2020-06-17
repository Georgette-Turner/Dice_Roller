const rollButton = document.querySelector('#roll-button')
const rollNumber = document.querySelector('#number-of-dice')
const totalSpanElement= document.querySelector('#resultRolled')
const showAllButton = document.querySelector('#showAll')
const rollOutput = document.querySelector('#rollOutput')
const dieRolls = []

rollButton.addEventListener("click", function () {
    console.log("roll-button")
    let numberOfrolls = rollNumber.value
    console.log(numberOfrolls)

    let counter = 0
    let total = 0
    while (counter < numberOfrolls) {
        var d1 = Math.floor(Math.random() * 6) + 1;
        console.log(d1)
        counter += 1
     d1 + total   

        
        
    }
