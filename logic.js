const initialpassword = document.getElementById(password);
const repeatpassword = document.getElementById(cpassword);
const form = document.getElementById('form1');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const passwordValue  = password.value.trim();
    const password2Value = password2.value.trim();
}
function setError(element,message){
    const formContent = element.parentElement; //sets the specific formcontent of that specific input element
    const errorDisplay = formContent.querySelector(".error")
    errorDisplay.innerText = message;

    formContent.classList.add('error');
    formContent.classList.remove('success');
}