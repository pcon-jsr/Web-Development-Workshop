function takeValue(x) {
    document.getElementById('window').value += x;
}

function clearInput(y) {
    // y gets the value ''
    
    /* this function is used to clear
        the input field */

    document.getElementById('window').value = y;
}

function findResult() {

    console.log('value before', document.getElementById('window').value)
    
    var result = eval(document.getElementById('window').value);
    
document.getElementById('window').value = result;
    
    console.log('value after', result);

}



// https://www.producthunt.com/




https://goo.gl/forms/mbevC0qQtaxUXbeU2














