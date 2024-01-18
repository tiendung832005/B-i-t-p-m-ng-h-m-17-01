let string = prompt("Mời bạn nhập vào 1 chuỗi");
let text = prompt("Mời bạn nhập vào 1 ký tự");

function count(str, str1){
    let count1 = 0;
    for (let i=0; i<str.length;i++){
        if(str[i] === str1){
            count1++;
        }
    }
    return count1;
}
let occurrencesCount = 