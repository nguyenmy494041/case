let w = 100;
let size = 4;
let grid;
let playing = false;

//khoi tạo
function setup() {
    createCanvas(size * w, size * w); //mac định 100x100

    grid = new Grid(size);
    grid.addNumber();
    grid.addNumber();

    updateCanvas();
}

// One "move"
function keyPressed() {
    let flipped = false;
    let rotated = false;
    let played = true;

    switch (keyCode) {
        case DOWN_ARROW:
            grid.transposeGrid();
            rotated = true;
            break;

        case UP_ARROW:
            grid.transposeGrid();
            grid.flipGrid();
            rotated = true;
            flipped = true;
            break;

        case RIGHT_ARROW:
            //do nothing
            break;

        case LEFT_ARROW:
            grid.flipGrid();
            flipped = true;
            break;

        default:
            played = false;
    }

    if (played) {
        let past = copyGrid(grid.getGrid());

        grid.operate();

        let changed = compare(past, grid.getGrid()); // so sánh có thay đổi hay không để thêm mới

        if (flipped) { //xoay mảng về vị trí ban đầu
            grid.flipGrid();
        }

        if (rotated) {
            grid.transposeGrid();
        }

        if (changed) {
            grid.addNumber();
        }

        updateCanvas();

        if (isGameOver()) {
            alert("GAME OVER! HIGHEST SCORE: " + grid.getScore());
            setup();
        }

        if (!playing && isGameWon()) {
            playing = confirm("CONGRATULATIONS! DO YOU WANT TO CONTINUE?");
            if (!playing) {
                setup();
            }
        }
    }
}

function updateCanvas() {
    background(255);
    drawGrid();
    select('#score').html(grid.getScore());
}

function drawGrid() {
    for (let i in grid.getGrid()) {
        for (let j in grid.getGrid()) {
            let val = grid.getGrid(i, j);

            if (grid.getNewBox(i, j) === 1) { //vẽ đường viền cho ô mới xuất hiện
                stroke(200, 0, 200); //border-color
                strokeWeight(16); //border-width
                grid.resetNewBox(i, j);
            } else { //đường viền mặc định
                stroke(0);
                strokeWeight(4);
            }

            if (val != 0) { //màu nền theo giá trị
                fill(colorsSize(val).color);
            } else {
                noFill();
            }

            rect(j * w, i * w, w, w, 30); //x, y, width, height, border-radius

            if (val !== 0) { // vẽ chữ số
                textAlign(CENTER, CENTER);
                noStroke();
                fill(0);
                textSize(colorsSize(val).size);
                text(val, j * w + w / 2, i * w + w / 2); //str, x, y
            }
        }
    }
}