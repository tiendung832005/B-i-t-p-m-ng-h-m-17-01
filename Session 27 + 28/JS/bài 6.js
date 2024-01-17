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
    "Bún",
    " Miến",
    "Phở",
];
for(let i = numberList.length-1;i>0;i--){
    let j = Math.floor(Math.random()*(i+1));

    let temp = numberList[i];
    numberList[i] = numberList[j];
    numberList[j] = temp;

}
console.log("Mảng mới sau khi thêm ngẫu nhiên: " numberList)