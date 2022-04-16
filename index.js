const word = 'helloworldtodaylabelbabel'
let array = new Array(5)

for (let i = 0; i < array.length; i++) {
    array[i] = new Array(5)
}

let k = 0
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        array[i][j] = word[k]
        k++
    }
}

console.log(array);

const readFromLeftToRight = (row, start, end) => {
    for (let j = start; j <= end; j++) {
        console.log(array[row][j])
    }

    return [row + 1, end]
}

const readFromTopToBottom = (column, start, end, maxBorder) => {
    for (let i = start; i <= end; i++) {
        console.log(array[i][column])
    }

    return [end - 1, column - maxBorder - 1]
}

const readFromRightToLeft = (row, start, end) => {
    for (let j = start; j >= end; j--) {
        console.log(array[row][j])
    }

    return [row - 1, end]
}

const readFromBottomToTop = (column, start, end, maxBorder) => {
    for (let i = start; i >= end; i--) {
        console.log(array[i][column])
    }

    return [end, column + maxBorder + 1]
}

let last = readFromLeftToRight(0, 0, 4)
let maxBorder = 3
for (let i = 0; i < 2; i++) {
    last = readFromRightToLeft(last[1], ...readFromTopToBottom(last[1], last[0], last[0] + maxBorder, maxBorder))
    maxBorder--
    last = readFromLeftToRight(last[1] + 1, ...readFromBottomToTop(last[1], last[0], last[0] - maxBorder, maxBorder))
    maxBorder--
}


