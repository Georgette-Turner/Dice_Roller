const rollButton = document.querySelector('#roll-button')
const rollNumber = document.querySelector('#number-of-dice')
const totalSpanElement = document.querySelector('#resultRolled')
const showAllButton = document.querySelector('#showAll')

rollButton.addEventListener("click", function () {
    console.log("roll-button")
    let numberOfrolls = rollNumber.value
    console.log(numberOfrolls)

    let counter = 0
    let total = 0
    while (counter < numberOfrolls) {
        var d1 = Math.floor(Math.random() * 6) + 1;

        rollNumber.push(d1)
        total = total + (d1)
    }
    console.log(d1)
    counter += 1

})
showAllButton.addEventListener("click", function () {
    console.log("showAllButton")
    // while statement
    let counter = 0
    let total = 0
    while (counter = 0) counter < rollNumber.length; counter +=
        1;

    let showAllButton = "<li class='dice'>+rollNumber[counter +"/li>''
    totalSpanElement.innerHTML += listElement
})


//  while loop show all button
