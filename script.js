let inPut = document.querySelectorAll(".code");

for (let i = 0;  i < inPut.length -1; i++) {
	inPut[i].addEventListener("keyup", Display)
	
	function Display(eventDetails) {
		this.nextElementSibling.focus();
		
	}
	
}