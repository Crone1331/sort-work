
let arrObj = [];

arr = [
    5, 3, 55, 8, 11, 22, 15, 21, 4, 2
]

let arrDataBubble = arr.slice(0);
let arrDataSelect = arr.slice(0);

let colorArrBubble = setColor(arrDataBubble);
let colorArrSelect = setColor(arrDataSelect)


function setColor(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length ; i++) {
        newArr.push(`rgba(163,${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},0.8)`)

    }
   return newArr;
}


function setArrObj(arr, color) {
    let arrObj = [];
    for(let i = 0; i < arr.length; i++){
        arrObj.push({
            num: arr[i],
            color: color[i]
        })
    }
    return arrObj;
}


function setColorArrObj(objArr, colorTheme) {
    for(let i = 0; i < arr.length; i++) {
        colorTheme[i] = objArr[i].color;
    }
    return colorTheme;
};

const bubleObj = setArrObj(arrDataBubble, colorArrBubble);
const selectObj = setArrObj(arrDataSelect, colorArrSelect);

// bubbleSortObj(bubleObj);

// console.log(bubleObj);
