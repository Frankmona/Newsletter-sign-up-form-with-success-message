const form = document.getElementById("form");
const email = document.getElementById("email");
const successMessage = document.querySelectorAll('.success-message');
const DismissButton = document.getElementById('button');
const emailTxt = document.querySelector(".e-email");
const input = document.querySelector("input[name='email']");

// function that shows the error
function showError(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const p = formControl.querySelector('p')
}

// function that shows the success
function showSuccess(){
    successMessage[0].classList.add('success');
    successMessage[1].classList.add('success');

}

// function that removes success class
function removeSuccess(){
    successMessage[0].classList.remove('success');
    successMessage[1].classList.remove('success');
}


// Event listener listening for the submit event
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let gottenMail = input.value ;
    gottenMail = gottenMail.toLowerCase();
    emailTxt.innerHTML="";
    emailTxt.innerHTML=gottenMail;

// console.log('frank');
    if(email.value === ''){
        showError(email);
     }
    else{
        showSuccess();
     }

})

// Event listener listening for the click dismissal event
DismissButton.addEventListener('click', function(e){
    e.preventDefault()
    // console.log('frank');
    if (successMessage[1].classList.contains("success")) {
        removeSuccess();
      }
})

    