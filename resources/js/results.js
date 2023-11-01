const resultList=document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value,name2)=>{
    if(name2=='Password'){
        if(value=="" || value==null){
            resultList.append(`${name2}: None`)
        }else{ resultList.append(`${name2}: ********`);}
       
    }
    else{
        resultList.append(`${name2}: ${value}`);
    }
    
    resultList.append(document.createElement('br'));
})

