let firstNameInput = "";
let LastNameInput = "";

const firstName=document.querySelector("#FirstNameInput");
const x=document.querySelector("#LastNameInput")
const submit = document.querySelector("button");
const firstnameeror = document.querySelector(".firstnameeror");
const xError = document.querySelector(".LastNameError");

firstName.addEventListener("keyup" , (e)=>{
    firstNameInput= e.target.value;
})
x.addEventListener("keyup" , (e)=>{
    LastNameInput= e.target.value;
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(firstNameInput.length == 0){
        firstnameeror.style.display = "block";
    }
    if(LastNameInput.length == 0){
        xError.style.display = "block"
        console.log("hey");
    }
})