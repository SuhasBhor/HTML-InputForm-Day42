//Name Validation
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input' , function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(nameRegex.test(text.value)){
        textError.textContent = " ";
    }else{ 
        textError.textContent = "Name Is Invalid";
    }
});

//Email Validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$')
    if(emailRegex.test(email.value)){
        emailError.textContent = " ";
    }else{
        emailError.textContent = "Email is Invalid";
    }
});

//Phone Number Validation
const number = document.querySelector('#number');
const numberError = document.querySelector('.number-error');
number.addEventListener('input',function(){
    let numberRegex = RegExp('^[0-9]{2}[\s]{1}[0-9]{10}')
    if(numberRegex.test(number.value)){
        numberError.textContent = " ";
    }else{
        numberError.textContent = "Number is Invalid";
    }
});


//Salary
const salary = document.querySelector('#salary');
const salaryOuput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input',function(){
    salaryOuput.textContent = salary.value;
});