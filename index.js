let count = 0;
const add = document.getElementById("add");
const amount = document.getElementById("amount");
const news = document.getElementById("news");

add.onclick = function(){
    count++;
    amount.textContent = count;
};