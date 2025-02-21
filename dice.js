const proficiencyDie = 0; //d12
const boostDie = 0; //d6
const abilityDie = 0; //d8

function rollProficiencyDie() {
    return Math.floor(Math.random() * 12) + 1;
}

function rollBoostDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollAbilityDie() {
    return Math.floor(Math.random() * 8) + 1;
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


