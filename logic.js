const initialpassword = document.getElementById('password');
const repeatpassword = document.getElementById('cpassword');
const form = document.getElementById('form1');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const passwordValue  = initialpassword.value.trim();
    const password2Value = repeatpassword.value.trim();

    if (password2Value !== passwordValue){
        setError(initialpassword, "*Passwords don't match");
        setError(repeatpassword, "");
    } else{setSuccess(initialpassword,"*Password Matches")
setSuccess(repeatpassword, "")}
}
function setError(element,message){
    const formContent = element.parentElement; //sets the specific formcontent of that specific input element
    const errorDisplay = formContent.querySelector(".errormsg")
    errorDisplay.innerText = message;

    formContent.classList.add('error');
    formContent.classList.remove('success');
}
function setSuccess(element,message){
    const formContent = element.parentElement; //sets the specific formcontent of that specific input element
    const errorDisplay = formContent.querySelector(".errormsg")
    errorDisplay.innerText = message;

    formContent.classList.add('success');
    formContent.classList.remove('error');
}