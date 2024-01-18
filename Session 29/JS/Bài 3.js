function arrList(str){
    let number = 0;
    for(let i=0; i<str.length;i++){
        if(str[i] !== ' '){
            number++;
        }
    }
    return number;
}
let string1 = "Bún bò";
let arrList1 = arrList(string1);
console.log("Số ký tự trong chuỗi (không tính ký tự trống) là: ", arrList1)