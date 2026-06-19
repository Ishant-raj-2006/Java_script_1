//  WAP for print the muntiple table by using function.
let num = 10;
function table(num){
    for (let i=1; i<=10; i++){
        let tab= i*num;
        console.log(`${num} X ${i} = ${tab}`);
    }
}
table(num);