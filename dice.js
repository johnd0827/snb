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
    let positiveDice = [];    
    swordCount = 0;
    successCount = 0;
    for (let i = 0; i < abilityDie; i++) {
        let roll = rollAbilityDie();
        positiveDice.push(["A", roll]);
        switch (roll) {
            case 1:
                break;
            case 2:
                swordCount++;
                break;
            case 3:
                swordCount++;
                swordCount++;
                break;
            case 4:
            case 5:
                successCount++;
                break;
            case 6:
                successCount++;
                swordCount++;
                break;
            case 7:
            case 8:
                successCount++;
                successCount++;
                break;
        }
    }
    for (let i = 0; i < proficiencyDie; i++) {
        let roll = rollProficiencyDie();
        positiveDice.push(["P", roll]);
        switch (roll) {
            case 1:
                break;
            case 2:
            case 3:
                swordCount++;
                swordCount++;
                break;
            case 4:
            case 5:
            case 6:
                successCount++;
                swordCount++;
                break;
            case 7:
            case 8:
                successCount++;
                break;
            case 9:
            case 10:
            case 11:
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
    for (let i = 0; i < boostDie; i++) {
        let roll = rollBoostDie();
        positiveDice.push(["B", roll]);
        switch (roll) {
            case 1:
            case 2:
                break;
            case 3:
                swordCount++;
                break;
            case 4:
                successCount++;
                successCount++;
                break;
            case 5:
                swordCount++;
                successCount++;
                break;
            case 6:
                successCount++;
                break;
        }
    }
    return positiveDice.toString();
}

function rollNegativeDice() {
    let negativeDice = [];
    failureCount = 0;
    bonesCount = 0;
    for (let i = 0; i < difficultyDie; i++) {
        let roll = rollDifficultyDie();
        negativeDice.push(["D", roll]);
        switch (roll) {
            case 1:
                break;
            case 2:
                failureCount++;
                failureCount++;
                break;
            case 3:
                failureCount++;
                break;
            case 4:
                failureCount++;
                bonesCount++;
                break;
            case 5:
            case 6:
            case 7:
                bonesCount++;
                break;
            case 8:
                bonesCount++;
                bonesCount++;
                break;
        }                
    }
    for (let i = 0; i < challengeDie; i++) {
        let roll = rollChallengeDie();
        negativeDice.push(["C", roll]);
        switch (roll) {
            case 1:
                break;
            case 2:
                failureCount++;
                failureCount++;
                failureCount++;
                bonesCount++;
                bonesCount++;
                bonesCount++;
                break;
            case 3:
            case 4:
                failureCount++;
                break;
            case 5:
            case 6:
                failureCount++;
                failureCount++;
                break;
            case 7:
            case 8:
                bonesCount++;
                break;
            case 9:
            case 10:
                failureCount++;
                bonesCount++;
                break;
            case 11:
            case 12:
                bonesCount++;
                bonesCount++;
                break;
        }
    }
    for (let i = 0; i < setbackDie; i++) {
        let roll = rollSetbackDie();
        negativeDice.push(["S", roll]);
        switch (roll) {
            case 1:
            case 2:
                break;
            case 3:
                failureCount++;
                break;
            case 4:
                bonesCount++;
                break;
            case 5:
                failureCount++;
                break;
            case 6:
                bonesCount++;
                break;
        }
    }   
    return negativeDice.toString();
}   

function roll100() {
    return Math.floor(Math.random() * 100) + 1;
}

function roll20() {
    return Math.floor(Math.random() * 20) + 1;
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
