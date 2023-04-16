// Grab our output <p> element
let output = document.getElementById('output');

// Let us grab our input textbox
let nameText = document.querySelector('input[type="text"]');

document.querySelector('form').addEventListener('submit', (e) => {
    output.textContent = `A submit event has been fired at ${e.timeStamp}`;
    e.preventDefault();
})

// Let us play around with different event types
nameText.addEventListener('input', () => {
    output.textContent = `The value entered is ${nameText.value}`;
    
})

nameText.addEventListener('focus', (e) => {
    e.target.style.background = 'lightblue';
    e.target.style.color = 'black';
    
})

nameText.addEventListener('copy', () => {
    alert('You have copied text!');
    
})

