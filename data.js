
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
        newArr.push(`rgba(163,${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},0.2)`)

    }
   return newArr;
}







function setArrObj() {
    for(let i = 0; i < arrDataBubble.length; i++){
        arrObj.push({
            num: arrDataBubble[i],
            color: colorArrBubble[i]
        })
    }
    console.log(arrObj);
}

setArrObj();