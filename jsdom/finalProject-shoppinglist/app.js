// ********* Search For Items  *******

const SEARCH = document.forms['search-item'].querySelector('input');

// add event listener
SEARCH.addEventListener('keyup', (e) => {
    // let us grab the users text
    let text = e.target.value.toLowerCase();
    // let us grab each li tag
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries = groceryList.getElementsByTagName('li');
    // let us convert the groceries to an array, so we can access the forEach method
    let groceryArray = Array.from(groceries);
    // loop through each grocery item
    groceryArray.forEach((grocery) => {
        let groceryName = grocery.firstElementChild.textContent;
        // convert all our test into lower case
        let lower = groceryName.toLowerCase();
        /* now we can use indexOf to see if our text can be found
        within our grocery name. If nothing is found, a value of -1 is 
        returned and we can hide the item.
         */
        if (lower.indexOf(text) == -1) {
            grocery.style.display = 'none';

        } else {
            grocery.style.display = 'block';   
        }
    });

    
});




// ***** Hide Items *******
let checkbox = document.querySelector('#hide');
checkbox.addEventListener('change', (e) => {
    let groceryList = document.getElementById('grocery-list');
    if (checkbox.checked) {
        groceryList.style.display = 'none';
    } else {
        groceryList.style.display = 'block';
    }
});





// ********* Add Items *******
let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e) => {
    let ul = document.getElementsByTagName('ul')[0];
    // prevent the page from refreshing
    e.preventDefault();
    // let us grab the user's text
    let text = formAdd.querySelector('input').value;
    // let us clear the input box
    formAdd.querySelector('input').value = null;

    // create the list items dynamically
    let li = document.createElement('li');
    let groceryName = document.createElement('span');
    let deleteButton = document.createElement('span');

    // the spans are nested within the li element
    li.appendChild(groceryName);
    li.appendChild(deleteButton);

    // attach our newly created element to the DOM
    ul.appendChild(li);

    // add text
    groceryName.textContent = text;
    deleteButton.textContent = 'delete';

    // add classes
    groceryName.classList.add('name');
    deleteButton.classList.add('delete');
});

// ***********  Delete items  ********
/*
Inefficient method

// Delete items
let btns = document.querySelectorAll('#grocery-list li .delete');


// loop through each button and add event listener to it
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const LI = e.target.parentElement;
        // we want to use the old school removeChild() method
        LI.parentElement.removeChild(LI);
    })
})

*/

/*

Better code
*/

let groceryListUl = document.querySelector('#grocery-list ul');
// add event listener
groceryListUl.addEventListener('click', remove);

// define the handler funciton
function remove(e) {
    let target = e.target;
    if (target.className == 'delete') {
        target.parentElement.remove();
    }
}

// ***********  Tabs  ********
// let us grab our headings = parent ul tag
let heading = document.querySelector('.heading');

// let us grab our panels
let panels = document.querySelectorAll('.panel');

// define a selectedItem variable to toggle between classes
let selectedPanel = null;

/* 
Let us take advantage of event bubbling. 
Let us attach event listener on the UL parent element
*/
heading.addEventListener('click', (e) => {
    // Let us find out which <li> tag triggered the event
    let target = e.target;
    /* 
    Let us use our dataset to get our data value.
    ... we've called ours 'clicked' but
    you can call it whatever you like
    */

    let dataAttribute = e.target.dataset.clicked;
    if (target.tagName == "LI") {
        // remove the currently selected element
        if (selectedPanel != null) {
            selectedPanel.classList.toggle('selected');
        }
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        // Now it is time to find the panel we want to show
        let targetPanel = document.querySelector(dataAttribute);
        /* Now we need to determine whether the panel currently 
        selected is the one displayed. We can use the forEach function because
        querySelectorAll returns a NodeList
        */

        panels.forEach((panel) => {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
});

// Let us deal with our button to display the answer
let btn = document.getElementById('showAnswer');
btn.addEventListener('click', answer);
function answer() {
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent = "An Impasta";
    btn.style.display = 'none';
    
}

