let list = [
    "Bún",
    "Miến",
    "Phở",
    "Ngô",
    "Khoai",
];
function arrList(list){
    if(list.length === 0){
        return "Mảng rỗng";
    }
    let max = list[0];
    for(let i=1;i<list.length;i++){
        if(list[i].length>max.length){
            max=list[i]
        }
    }
    return max;
}
let max=arrList(list);
console.log("Phần tử có độ dài lớn nhất là: ", max)