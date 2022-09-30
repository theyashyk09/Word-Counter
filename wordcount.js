let input = document.getElementById("text");
let resultC = document.getElementById("count");
let resultW = document.getElementById("twords");
let reset = document.getElementById("btn");

input.addEventListener("input", () => {
  resultC.textContent = "Total Characters are : " + input.value.length;

  let words = input.value.match(/\w+/g).length;
  resultW.textContent = "Total Words are : " + words;
});

reset.addEventListener("click", () => {
  resultC.textContent = "Total Characters are : 0";
  resultW.textContent = "Total Words are : 0";
  input.value = "";
});
