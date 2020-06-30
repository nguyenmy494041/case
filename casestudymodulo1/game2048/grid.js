function copyGrid(grid) {
    let extra = [];
    for (let i in grid) {
        extra[i] = [];
        for (let j in grid) {
            extra[i][j] = grid[i][j];
        }
    }
    return extra;
}

function compare(a, b) {
    for (let i in a) {
        for (let j in a) {
            if (a[i][j] !== b[i][j]) {
                return true;
            }
        }
    }
    return false;
}

class Grid {
    constructor(size) {
        this.size = size;
        this.score = 0;
        this.grid = [];
        this.new_box = [];
        for (let i = 0; i < this.size; i++) {
            this.grid[i] = [];
            this.new_box[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.grid[i][j] = 0;
                this.new_box[i][j] = 0;
            }
        }
    }

    getScore() {
        return this.score;
    }

    getGrid(i, j) {
        if (arguments.length == 0) {
            return this.grid;
        }
        if (arguments.length == 2) {
            return this.grid[i][j];
        }
    }

    getNewBox(i, j) {
        return this.new_box[i][j];
    }

    resetNewBox(i, j) {
        this.new_box[i][j] = 0;
    }

    operate() {
        for (let i in this.grid) {
            this.grid[i] = this.slide(this.grid[i]); // đẩy lần 1 để ghép
            this.grid[i] = this.combine(this.grid[i]); // ghép
            this.grid[i] = this.slide(this.grid[i]); // đẩy lần 2 sau ghép trong trường hợp xxyy => 0x0y
        }
    }

    slide(row) {
        let arr = row.filter(val => val); //mảng mới chứa các giá trị khác 0
        let missing = this.size - arr.length; //số phần tử còn thiếu
        let zeros = Array(missing).fill(0); //tạo mảng những số 0
        arr = zeros.concat(arr); //nối mảng những số 0 vào trước mảng khác 0
        return arr;
    }

    // nếu 2 ô giống nhau thì đẩy ô trước vào ô sau
    combine(row) {
        for (let i = (this.size - 1); i > 0; i--) {
            let a = row[i];
            let b = row[i - 1];
            if (a == b) {
                row[i] = a + b;
                this.score += row[i];
                row[i - 1] = 0;
            }
        }
        return row;
    }

    flipGrid() {
        for (let i in this.grid) {
            this.grid[i].reverse();
        }
    }

    transposeGrid() {
        let new_grid = copyGrid(this.grid);
        for (let i in this.grid) {
            for (let j in this.grid) {
                this.grid[i][j] = new_grid[j][i];
            }
        }
    }

    addNumber() {
        //mảng tất cả các vị trí còn trống
        let options = [];
        for (let i in this.grid) {
            for (let j in this.grid) {
                if (this.grid[i][j] === 0) {
                    options.push({
                        x: i,
                        y: j
                    });
                }
            }
        }
        //chọn ngẫu nhiên một vị trí và điền ngẫu nhiên giá trị 2 hoặc 4
        if (options.length > 0) {
            let spot = random(options);
            let r = random(1); //[0,1)
            this.grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
            this.new_box[spot.x][spot.y] = 1;
        }
    }
}