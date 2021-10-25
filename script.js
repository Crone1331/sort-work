"use strict"
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let arr = [];

arr.length = 30;

for (let i = 0; i < arr.length; i++) {
    arr[i] = getRandomArbitrary(1, 9);
}


let cont = document.querySelector('.container');

cont.innerText = arr;

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
                cont.innerText = arr;
                console.log(typeof(cont));
                await timer(1000);
            }
        }
    }
}



bubbleSort(arr);
console.log(arr)

