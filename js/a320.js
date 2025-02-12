const a320 = document.getElementById("a320");
const message = document.getElementById("message");

a320.onclick = function(){
    message.textContent = "https://realfishyking.itch.io/onelifelizard";
    setTimeout("message.textContent = ' '", 2000));
}