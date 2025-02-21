let proficiencyDie = 0; //d12
let boostDie = 0; //d6
let abilityDie = 0; //d8

function rollProficiencyDie() {
    return Math.floor(Math.random() * 12) + 1;
}

function rollBoostDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollAbilityDie() {
    return Math.floor(Math.random() * 8) + 1;
}

function setProficiencyDie(value) {
    proficiencyDie = value;
}

function setBoostDie(value) {
    boostDie = value;
}

function setAbilityDie(value) {
    abilityDie = value;
}

function getProficiencyDie() {
    return proficiencyDie;
}

function getBoostDie() {
    return boostDie;
}  

function getAbilityDie() {
    return abilityDie;
}


