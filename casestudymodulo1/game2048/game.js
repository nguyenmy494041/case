
function isGameWon() {
    for (let i in grid.getGrid()) {
        for (let j in grid.getGrid()) {
            if (grid.getGrid(i, j) == 2048) {
                return true;
            }
        }
    }
    return false;
}

function isGameOver() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (grid.getGrid(i, j) == 0) { //còn vị trí trống
                return false;
            }
            if (i !== (size - 1) && grid.getGrid(i, j) === grid.getGrid(i + 1, j)) { // còn có thể ghép được
                return false;
            }
            if (j !== (size - 1) && grid.getGrid(i, j) === grid.getGrid(i, j + 1)) {
                return false;
            }
        }
    }
    return true;
}