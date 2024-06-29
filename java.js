let firstNameInput = "";
let lastNameInput = "";
let mailInput = "";
let massageInput="";

var checkbox = document.getElementById('CheckBox');
const firstName=document.querySelector("#FirstNameInput");
const x=document.querySelector("#LastNameInput");
const mail=document.querySelector("#EmailAddress");
const msg=document.querySelector("#Massage")
const submit = document.querySelector("button");
const firstnameeror = document.querySelector(".firstnameeror");
const xError = document.querySelector(".LastNameError");
const mailErorr =document.querySelector("#mailError");
const massageError=document.querySelector("#massageError");
const sucAlert=document.querySelector("#successAlert")

firstName.addEventListener("keyup" , (e)=>{
    firstNameInput= e.target.value;
})
x.addEventListener("keyup" , (e)=>{
    lastNameInput= e.target.value;
})
mail.addEventListener("keyup" , (e)=>{
    mailInput=e.target.value;
})
msg.addEventListener("keyup" , (e)=>{
    massageInput=e.target.value;
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(firstNameInput.length == 0){
        firstnameeror.style.display = "block";
        FirstNameInput.classList.add('error');
    }
    if(firstNameInput.length != 0){
        fixCol.style.display = "block"
    }
    if(lastNameInput.length == 0){
        xError.style.display = "block"
        LastNameInput.classList.add('error');
    }
    if(mailInput.length == 0){
        mailErorr.style.display="block";
        EmailAddress.classList.add('error');
    }
    if(massageInput.length == 0){
        massageError.style.display="block";
        Massage.classList.add('error');
    }
    if(firstNameInput.length && lastNameInput.length && mailInput.length && massageInput.length !=0){
      if(radioChecked =true){
        if(checkbox.checked){
          sucAlert.style.display="block";
        }
      }
    }
})
document.getElementById('SubmitButton').addEventListener('click', checkRadio);

function checkRadio() {
  var radios = document.getElementsByName('SelectOne');
  var radioChecked = false;
  
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioChecked = true;
      break;
    }
  }
  
  if (!radioChecked) {
    queryError.style.display="block";
  }
  if (!checkbox.checked) {
    checkboxError.style.display="block"
  }
}