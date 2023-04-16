// First step: Grabbing the elements we want to change
let title = document.getElementById('title');
let para1 = document.getElementById('first-paragraph');
let para2 = document.getElementById('second-paragraph');

//second step: Defin our blue() and red() function

function blue() {
    // complete the code within here
    let color = 'blue';
    title.setAttribute('style', 'color: ' + color);
    para1.setAttribute('style', 'color: ' + color);
    para2.setAttribute('style', 'color: ' + color);
    

}

function red() {
    // complete the code within here
    let color = 'red';
    title.setAttribute('style', 'color: ' + color);
    para1.setAttribute('style', `color: ${color}`);
    para2.setAttribute('style', `color: ${color}`);
    

}