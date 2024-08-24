// Variable Declarations 
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
// Event Listener 
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        // Event Handling
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        // Clear Input
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // Delete last Char
        else if(e.target.innerHTML == 'X'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // Add (appends) digit
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})