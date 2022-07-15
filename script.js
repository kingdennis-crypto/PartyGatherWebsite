let enTranslation;
let nlTranslation;

fetch("./translations.json")
  .then(response => response.json())
  .then(data => {
    enTranslation = data.en;
    nlTranslation = data.nl;
  })
  .catch (error => console.log(error));

document.querySelector("#emailListForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const firstName = document.querySelector("#firstName").value;
  const email = document.querySelector("#email").value;

  console.log(firstName, email);
  if (firstName && email) {
    alert("Succesfully subscribed")
  }
})

document.querySelector("#languageToggle").addEventListener("click", (e) => {
  console.log("Hello")
})