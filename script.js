function Display(from, too) {
    let fromLength = from.value.length;
    let tooLength = parseInt(from.getAttribute("maxlength")); // Convert to number
    if (fromLength === tooLength) {
        document.getElementById(too).focus();
    }
}
