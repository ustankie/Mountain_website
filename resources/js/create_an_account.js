let user_name=document.getElementById("user_name");
let email=document.getElementById("Email");
let pwd=document.getElementById("Password");
let conPwd=document.getElementById("confirmPassword");
let form=document.querySelector("form");

const elements=[user_name,email,pwd,conPwd];

function validateInput(){
    let canProcede=new Boolean(true);
    if(user_name.value.trim()===""){
       onError(user_name,"Username cannot be empty");
       canProcede=false;
    }else{
        onSuccess(user_name);
    }

    if(email.value.trim()==="" || email.value==null){
        onError(email,"Email cannot be empty");
        canProcede=false;
    }
    else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
            canProcede=false;
        }
        else{
            onSuccess(email);
        }
    }

    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
        canProcede=false;
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"Confirm password!");
        canProcede=False;
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Passwords are not the same!");
            canProcede=false;
         }
         else
         onSuccess(conPwd);
     }
     
    // let a=canProcede;
    return canProcede;

}

document.getElementById("submit").addEventListener("click",(event)=>{
 //  event.preventDefault();
    let canProcede=validateInput();
    if(!canProcede){
        event.preventDefault();
    }
    // if(canProcede){
    //     window.location.replace("results.html");
    // }
});

document.getElementById("reset").addEventListener("click",(event)=>{
    event.preventDefault();
    elements.forEach((element)=>{
        normal(element);
    })
});

function normal(input){
    let parent=input.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.remove("success");

}

function onSuccess(input){
    let parent=input.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,mess){
    let parent=input.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="visible";
    message.innerText=mess;
    parent.classList.remove("success");
    parent.classList.add("error");
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }