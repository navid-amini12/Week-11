function buildingTower(numberOfFloors) {
    var array = [];
    for (var i = 0; i < numberOfFloors; i++) {
        array.push(" ".repeat(numberOfFloors - i - 1)
                   + "*".repeat((i * 2)+ 1)
                   + " ".repeat(numberOfFloors - i - 1))
        }
        return array;
    }
    