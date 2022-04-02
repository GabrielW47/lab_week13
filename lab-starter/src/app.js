let clone = 0
function cOne(){
    let div = document.createElement('div'); //makes the div
    div.id = 'copyed';                       //makes the div id
    div.innerHTML = '<p>one</p>';            //makes whats inside the div
    document.body.appendChild(div);          //NEED TO CHANGE LATER
    clone ++
}
function cTwo(){
    let div = document.createElement('div'); //makes the div
    div.id = 'copyed';                       //makes the div id
    div.innerHTML = '<p>two</p>';            //makes whats inside the div
    document.body.appendChild(div);          //NEED TO CHANGE LATER
    clone ++
}

function DELETE(){
    while (clone !== 0){
        var element = document.getElementById("copyed");
        element.parentNode.removeChild(element); 
        clone = clone - 1
    }
}
