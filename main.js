const rollButton = document.querySelector('#roll-button')
const rollNumber = document.querySelector('#number-of-dice')

const dieRolls = []

rollButton.addEventListener("click", function () {
    console.log("roll-button")
    let numberOfrolls = rollNumber.value
    console.log(numberOfrolls)

    let counter = 0
    while (counter < numberOfrolls) {
        var d1 = Math.floor(Math.random() * 6) + 1;
        console.log(d1)
        counter += 1
        function dieRoll() {
            var result = [];
            for (var d1 = 0; d1 < 5;               d1++)
                result.push("&#x268" + Math.floor(Math.random() * 6) + ";");
        };var result = dieRoll();
        counts[result] = counts[result] +1
        return result;

        console.log(results);
        console.log(counts)
        console.log('The loop is over.')
let showAll = document.querySelector('#show-All');
let diceRollInput = document.querySelector('#diceRollinput');
let numberOfDiceRoll = document.querySelector('number-of-dice-roll');
let letsRoll = document.querySelector('#lets-roll');

var dieRolls = []

    }
}
}
