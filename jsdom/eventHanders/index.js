// step 1: Grab the div element and the button
let content = document.getElementById('content');
let button = document.getElementById('show-more');

// step 2: Adding our event listener and handler via the inline property approach
button.onclick = () => {
    if (content.className == "") {
        // expand the box
        content.className = "open";
        button.innerHTML = "Collapse";
    }else {
        // collapse the box
        content.className = "";
        button.innerHTML = "Expand";
    }
}