const ethan = document.getElementById("ethan");
const a320neo = document.getElementById("a320neo");

a320neo.onclick = function(){
    ethan.textContent = "My friend wanted me to add this airplane";
    setTimeout("ethan.textContent = ' '", 2000);
};