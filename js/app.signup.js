// Mouse Movement Transition
window.onload = function(){
    const squares = document.querySelectorAll(".square");    

    function followCursor (event){
        let x = event.clientX - window.innerWidth / 2;
        let y = event.clientY - window.innerWidth / 6;
        updateStyles(x,y);
    }

    function updateStyles(x_,y_){
        squares.forEach(square => {
            square.style.transform = `perspective(500px) rotateY(${x_ * 0.05}deg) rotateX(${y_ * -0.05}deg)`;
        });        
    }
    document.documentElement.addEventListener("mousemove", followCursor);
};


// Form Validation
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const checkbox = document.querySelector('.checkbox');
submitBtn.addEventListener('click',validateForm);
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);


function validateForm(){
    if(nameInput.value === '' || emailInput.value === '' || checkbox.checked === false){
        alert('All of the fields are mandatory! User agreement as well!')        
    }
}

function validateName(){
    const nameWarning = document.querySelector('.nameInput>span');
    const nameIn = document.querySelector('.nameInput');
    let name = nameInput.value;
    const re = /^([a-zA-z ]{5,30})+$/;
    

    if(!re.test(name)){
        nameWarning.style.display = 'block';
        nameWarning.style.opacity = '1';
        setTimeout(function(){
            nameWarning.style.opacity = '0';
        },3000);
        setTimeout(() => {
            nameWarning.style.display = 'none';
        }, 3300);
    }else{
        if(nameIn.lastChild.nodeName != 'I'){
            addCheck(nameIn);
        }
        
    }
}

function validateEmail(){
    const emailWarning = document.querySelector('.emailInput>span');
    const emailIn = document.querySelector('.emailInput');
    let email = emailInput.value;  
    const re = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]{1,5})\.([a-zA-Z]{2,5})$/;

    if(!re.test(email)){
        emailWarning.style.display = 'block';
        emailWarning.style.opacity = '1';
        setTimeout(function(){
            emailWarning.style.opacity = '0';
        },3000);
        setTimeout(() => {
            emailWarning.style.display = 'none';
        }, 3300);
    }else{
        if(emailIn.lastChild.nodeName != 'I'){
            addCheck(emailIn);
        }
    }
}

function addCheck(parent){
    const check = document.createElement('i');
    const classes = ['fas', 'fa-check'];
    check.classList.add(...classes);
    parent.appendChild(check);
}