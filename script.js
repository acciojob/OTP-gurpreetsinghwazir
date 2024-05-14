const inputs = document.querySelectorAll("#code");
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  input.addEventListener("input", function () {
    // handling normal input
    if (input.value.length == 1 && i+1 < inputs.length) {
     inputs[i+1].focus();
    }
    /* ... other codes (a) ... */
  });
  /* ... other codes (b) ... */
}