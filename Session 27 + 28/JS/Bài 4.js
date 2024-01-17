let numberList = [
    1,
    2,
    3,
    -4,
    -12,
    5,
    8,
    -5,
    -10,
    99,
];
let arrayA = [];
let arrayB = [];

for(let i=1;i<numberList.length;i++){
    if(numberList[i]%2==0){
        arrayA.push(numberList[i]);
    }
    else{
        arrayB.push(numberList[i]);
    }
}
console.log("Mảng chẵn là: ", arrayA);
console.log("Mảng lẻ là: ", arrayB);

