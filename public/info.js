function showTextArea(){
    document.getElementById('textarea').style.visibility="visible";
    document.getElementById('submit').style.visibility="visible";
}

function _(id){
    return document.getElementById(id)
}

function postInfo(){
    document.getElementById("textarea").style.visibility="hidden";
    let inputText= _('inputText').value 
    _('infoOutput').innerHTML +=`<div>${inputText}</div>`
}

