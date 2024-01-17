let a = +prompt("Mời bạn nhập vào số nguyên a: ");
let b = +prompt("Mời bạn nhập vào số nguyên b: ");

let numberList = [];

if(a>b){
    for(let i = b + 1;i<a; i++){
        numberList.push(i)
    }
}else if(b>a){
    for(let i = a + 1;i<b; i++){
        numberList.push(i)
    } 
}
console.log("Mảng chứa các số trong khoảng a và b là: ", numberList)