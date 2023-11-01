
var bigImgBox =document.getElementById("bigImgBox");
var bigImg =document.getElementById("bigImg");
var imgCaption=document.getElementById("imgCaption");

function openBigImg(pic,caption){
    bigImgBox.style.display="flex";
    bigImg.src=pic;
    imgCaption.textContent=caption;
}

function closeBigImg(){
    bigImgBox.style.display="none";
}
