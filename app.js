document.querySelector(".generate").addEventListener("click",function(){
  let length = document.querySelector("#length").value,
  uppercase = document.querySelector("#uppercase").checked,
  number = document.querySelector("#numbers").checked,
  symbol = document.querySelector("#symbols").checked,

  lowercases = "abcdefghijklmnopqrstuvwxyz",
  uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  symbols =  "!@#$%^&*()-_=+[]{}|;:,.<>?";

  let allChars = lowercases
  if(uppercase){
    allChars +=uppercases
  }
  if(number){
    allChars+=numbers
  }
  if(symbol){
    allChars+=symbols
  }

  let password=""
  for(let i=0;i<length;i++){
    let random = Math.floor(Math.random() * allChars.length)
    password+=allChars[random]
  }

let passwordInput = document.querySelector(".password")

 passwordInput.value=password

  setTimeout(() =>{
    passwordInput.value = "";
    passwordInput.setAttribute("placeholder","Password")
  },5000)
 
})

let lengthSpan = document.querySelector(".lengthSpan"),
rangeLength = document.querySelector("#length");

rangeLength.addEventListener("input", () =>{
  lengthSpan.textContent = rangeLength.value 
})


document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", function() {
      const checkbox = this.previousElementSibling;
      checkbox.checked = !checkbox.checked;
  });
});


document.querySelector("#img").addEventListener("click", function(){
  let randomPassword = document.querySelector(".password"),
  copied = document.querySelector(".copied")
  
  randomPassword.select();
  navigator.clipboard.writeText(randomPassword.value)
  .then(() => {  
    copied.innerHTML = "Password copied";
    copied.style.display=
    setTimeout(() => {
      copied.style.display = "none"
    }, 2500)
  })
})