const form = document.getElementById("form");
const email = document.getElementById("email");
const successMessage = document.querySelectorAll('.success-message');
const DismissButton = document.getElementById('button');
const emailTxt = document.querySelector(".e-email");
const input = document.querySelector("input[name='email']");
const inputPlaceholderElement = document.getElementById('myInput')


//   Action to remove placeholder when user begins to type
inputPlaceholderElement.addEventListener('input', function () {
    this.removeAttribute('placeholder');
  });

// // Email validation: to check if email is valid
function isValid(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email)
}

// function that shows the error
function showError(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
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
    // inputing email address into the success response message
    let gottenMail = input.value ;
    gottenMail = gottenMail.toLowerCase();
    emailTxt.innerHTML="";
    emailTxt.innerHTML=gottenMail;
// end
// console.log('frank');
    if(email.value === ''){
        showError(email);
     }

    else if (!isValid(email.value)){
      showError(email, "invalid email");
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

    