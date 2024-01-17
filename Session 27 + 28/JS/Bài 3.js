let numberList = [
    "1",
    "2",
    "3",
    "8",
    "11",
    "98",
    "75",
    "100"
];
for(let i=0;i<numberList.length;i++){
    if(numberList[i]%2==1){
    numberList.splice(i,1);
    i--;
    }
}
console.log("Mảng sau khi xóa phần từ lẻ là: ", numberList)