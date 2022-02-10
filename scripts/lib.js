function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function insertionSortObj(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1].num > current.num) {
            arr[j] = arr[j - 1];
            j--;
            updateDate(arrDataInsert, arr);
            updateColor(colorArrInsert, arr);
            await timer(1000);
            chartInsert.update();
        }

        await timer(1000);

        arr[j] = current;
        updateDate(arrDataInsert, arr);
        updateColor(colorArrInsert, arr);
        chartInsert.update();

    }
    return arr;
};

async function bubbleSortObj(arr) {
    
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].num > arr[j + 1].num) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                updateDate(arrDataBubble, arr);
                updateColor(colorArrBubble, arr);
                await timer(1000);
                chart.update();
            }
        }
    }
    return arr ;
}

async function selectionSortObj(arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin].num > arr[j].num) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            await timer(1000);
            chartSelect.update();
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
            updateDate(arrDataSelect, arr);
            updateColor(colorArrSelect, arr)
            chartSelect.update();
        }
    }
    console.log(arr);
    return arr;
};

let buttonBubble = document.querySelector('.btn__bubble');
let buttonSelect = document.querySelector('.btn__select');
let buttonInsert = document.querySelector('.btn__insert');



function updateDate(arr, objArr){
    for(i = 0; i< arr.length; i++) {
        arr[i] = objArr[i].num;
    }
}
function updateColor(arr, objArr){
    for(i = 0; i< arr.length; i++) {
        arr[i] = objArr[i].color;
    }
}

//deprecated
// async function bubbleSort(arr) {
//     for (var i = 0, endI = arr.length - 1; i < endI; i++) {
//         for (var j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 chart.update();
//                 await timer(1000);
//                 var swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//                 chart.update();
//             }
//         }
//     }
//     return arr;
// }

//deprecated
// async function selectionSort(arr) {
//     for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
//         let indexMin = i;
//         for (let j = i + 1; j < l; j++) {
//             if (arr[indexMin] > arr[j]) {
//                 indexMin = j;
//             }
//         }
//         if (indexMin !== i) {
//             chartSelect.update();
//             await timer(1000);
//             [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
//             chartSelect.update();
//         }
//     }
//     return arr;
// };

