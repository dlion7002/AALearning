const towerHano = discs => (discs * 2 + 1) * 2 + 1;

function towerHanoi(discs) {
    result = 1;
    for (let i = 1; i < discs; i++) {
        result = result * 2 + 1;
    }
    return result;
}

console.log(towerHanoi(4))