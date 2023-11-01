document.getElementsByClassName('question')[0].style.display="block";
function next(id){
    document.getElementsByClassName('question')[id-1].style.display="block";
    document.getElementsByClassName('question')[id].style.display="block";
}

const form=document.getElementById('form')
const answer=document.getElementById('answer')

form.addEventListener{
    let messages =[]
    if(answer.value==='' || answer.value==null){
        messages.push('Give an answer')
    }
    if(answer=='')


}