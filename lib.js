function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                chart.update();
                await timer(1000);
            }
        }
    }
    return arr;
}

async function selectionSort(arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
            chartSelect.update();
            await timer(1000);
        }
    }
    return arr;
};


let buttonBubble = document.querySelector('.btn__bubble');
let buttonSelect = document.querySelector('.btn__select');
