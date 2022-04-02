function cOne(){
    let div = document.createElement('div'); //makes the div
    div.id = 'copyed';                       //makes the div id
    div.innerHTML = '<p>one</p>';            //makes whats inside the div
    document.body.appendChild(div);          //NEED TO CHANGE LATER
}
function cTwo(){
    let div = document.createElement('div'); //makes the div
    div.id = 'copyed';                       //makes the div id
    div.innerHTML = '<p>two</p>';            //makes whats inside the div
    document.body.appendChild(div);          //NEED TO CHANGE LATER
}

function DELETE(){
    var element = document.getElementById("copyed");
    element.parentNode.removeChild(element);
}
