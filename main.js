const url = "https://rickandmortyapi.com/api/character";
// debugger
fetch(url)
    .then((response) => { return response.json() })
    .then((data) => {
        readResult(data.results)
    })
    .catch(function (response) { console.error(response) });


//Add event to button send
document.querySelector('#sendToApi').addEventListener('click',function(e){
    var form = document.querySelector('form');
    console.log(serializeObject(form))
});

//Add event to button checkAll
document.querySelector('#checkAll').addEventListener('click',function(e){
    document.querySelectorAll('.chekcbox').forEach(function(elm){
        elm.checked = true;
    });
});

function readResult(results) {
    let myDiv = document.querySelector('#wrap-character');
    let ul = document.createElement('ul');
    results.forEach((element,index) => {
        let frag = document.createRange().createContextualFragment(readOneObject(element,index));
        ul.appendChild(frag);
    });
    myDiv.appendChild(ul)
}


function readOneObject(character,i) {
    return `
            <li class='w3-bar'>
                <input class='chekcbox' type='checkbox' value='${character.id}' name='check${i}' />
                <img src="${character.image}" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item">
                    <span class="w3-large">${character.name}</span><br>
                </div>
            </li>
    `;
}

function serializeObject (form) {
    // Create a new FormData object
    const formData = new FormData(form);
  
    // Create an object to hold the name/value pairs
    const pairs = {};
  
    // Add each name/value pair to the object
    for (const [name, value] of formData) {
      pairs[name] = value;
    }
  
    // Return the object
    return pairs;
  }

