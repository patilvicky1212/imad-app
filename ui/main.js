// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    // Make a request to the cunter endpoint
    
    // Capture the responce and store it in a variable
    
    // Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
};