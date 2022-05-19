const Select = document.querySelector(".select1");
const Money = document.querySelector(".money");
const Button = document.querySelector(".btn");
const Result = document.querySelector(".result");
let values
// Select.addEventListener("change",function(){
//     values=Select.value.toUpperCase()
// })
axios({
    method:"get",
    url:'https://api.exchangerate.host/latest?base=AZN'
})
.then(function (response){
    Button.addEventListener("click",function(){
        let money=+Money.value;
        // console.log(money);
        Result.innerText=response.data.rates[Select.value.toUpperCase()]*money
    })
})
// fetch('https://api.exchangerate.host/latest?base=AZN')
//   .then(response => response.json())
//   .then(data => console.log(data));
