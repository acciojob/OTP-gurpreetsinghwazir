let inPut = document.getElementsByClassName("code")

// let firstFoc = document.getElementsByClassName("code")[0];
// firstFoc.focus();   
   
for (let i = 0; i < inPut.length; i++) {  
    inPut[i].addEventListener("keyup", Display)
 
    function Display(eventDetails) {

        if (eventDetails.keyCode == 8) { // Check if backspace key is pressed
            if (this.value === "" && i > 0) { // Check if current input is empty and not the first one
                this.previousElementSibling.focus(); // Focus on the previous input
            }
        } else {
            this.nextElementSibling.focus(); // Focus on the next input for other key presses
        }
    }
}
