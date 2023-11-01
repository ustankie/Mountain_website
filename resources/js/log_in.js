let user_name=document.getElementById("user_name");
let pwd=document.getElementById("Password");
let valid_user_name='student';
let valid_password='student';



function validateInput(){
    let canProcede=new Boolean(true);
    if(user_name.value.trim()!=valid_user_name|| pwd.value.trim()!=valid_password){
       onError(user_name,"Username or password incorrect!");
        canProcede=false;
    }else{
        onSuccess(user_name);
    }
    return canProcede;

     

}

document.getElementById("submit").addEventListener("click",(event)=>{
    let canProcede=validateInput();
    if(!canProcede){
        event.preventDefault();
    }

   });

function onSuccess(input){
    let parent=input.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="hidden";

}
function onError(input,mess){
    let parent=input.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="visible";
    message.innerText=mess;

}
