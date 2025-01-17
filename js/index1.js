const comment = document.getElementById("comment");
const image = document.getElementById("image");

image.onclick = function(){
    comment.textContent = 'Cool trick';
    setTimeout("comment.textContent = ' '", 1000);
};