let proficiencyDie = 0; //d12
let challengeDie = 0; //d12

let abilityDie = 0; //d8
let difficultyDie = 0; //d8

let boostDie = 0; //d6
let setbackDie = 0; //d6

let successCount = 0;
let failureCount = 0;
let swordCount = 0;
let bonesCount = 0;


function rollPositiveDice() {
    const positiveDice = [];    
    swordCount = 0;
    successCount = 0;
    for (let i = 0; i < proficiencyDie; i++) {
        let roll = rollProficiencyDie();
        positiveDice.push(roll);
        switch (roll) {
            case 1:
                break;
            case 2, 3:
                swordCount++;
                swordCount++;
                break;
            case 4, 5, 6:
                successCount++;
                swordCount++;
                break;
            case 7, 8:
                successCount++;
                break;
            case 9, 10, 11:
                successCount++;
                successCount++;
                break;
            case 12:
                successCount++;
                successCount++;
                successCount++;
                swordCount++;
                swordCount++;
                swordCount++;
                break;
        }
    }
    return positiveDice;
}

//d12's
function rollProficiencyDie() {
    return Math.floor(Math.random() * 12) + 1;
}

function rollChallengeDie() {
    return Math.floor(Math.random() * 12) + 1;
}

//d8's
function rollAbilityDie() {
    return Math.floor(Math.random() * 8) + 1;
}

function rollDifficultyDie() {
    return Math.floor(Math.random() * 8) + 1;
}

//d6's
function rollBoostDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollSetbackDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//setters
function setProficiencyDie(value) {
    proficiencyDie = value;
}

function setChallengeDie(value) {
    challengeDie = value;
}

function setAbilityDie(value) {
    abilityDie = value;
}

function setDifficultyDie(value) {
    difficultyDie = value;
}

function setBoostDie(value) {
    boostDie = value;
}

function setSetbackDie(value) {
    setbackDie = value;
}

//getters
function getProficiencyDie() {
    return proficiencyDie;
}

function getChallengeDie() {
    return challengeDie;
}

function getAbilityDie() {
    return abilityDie;
}

function getDifficultyDie() {
    return difficultyDie;
}

function getBoostDie() {
    return boostDie;
}  

function getSetbackDie() {
    return setbackDie;
}

function getSuccessCount() {
    return successCount;
}

function getFailureCount() {
    return failureCount;
}

function getSwordCount() {
    return swordCount;
}

function getBonesCount() {
    return bonesCount;
}
