const rollButton = document.querySelector('#roll-button')
const  rollNumber = document.querySelector('#number-of-dice')

const dieRolls = []

rollButton.addEventListener("click", function(){
    console.log("roll-button")
    let numberOfrolls = rollNumber.value
    console.log (numberOfrolls)
})
function rollDice(){
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var rollTotal =d1
    var d1 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
        status.innerHTML = "Total rolled "+numberRolled.value
}
