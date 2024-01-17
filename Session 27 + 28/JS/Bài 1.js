let numberList = [
    "1",
    "2",
    "3",
    "-4",
    "-12",
    "5",
    "8",
    "-5",
    "-10",
];
let max = numberList[0];
let min = numberList[0];
for(let i = 1;i<numberList;i++){
    if(numberList[i]>max){
        max = numberList[i]
    }
}
for(let i = 1;i<numberList;i++){
    if(numberList[i]<min){
        min = numberList[i]
    }
}
console.log("Số lớn nhất là: ", max);
console.log("Số nhỏ nhất là: ", min);

