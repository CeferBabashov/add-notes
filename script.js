let notes = [];
function send() {
 
    let inp = document.getElementById("inp");
    let list = "";

    if(inp.value == ""){
        alert("bos olmaz");
    }else{
      notes.push(inp.value);
    }

    inp.value = "";

    for (let key of notes) {
       list+= `<li class="list-group-item d-flex justify-content-between">${key}
        <button class="btn btn-danger btn-sm " onclick="Remove(this)">Remove</button>
        </li>`;
    }

    document.getElementById('list').innerHTML = list;
}


function Remove(x){
   x.parentElement.remove();
}


