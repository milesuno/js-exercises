let blueBtn = document.getElementById('blueBtn');
let jumboTron = document.getElementById('jumbotron');
let volBtn = document.getElementById('volBtn');
let donateBtn = document.getElementById('donateBtn');

//blue button
function blueBtnClick(){
    jumboTron.style.background = `#588fbd`;

    donateBtn.style.background = `#ffa500`;

    volBtn.style.color = 'white';
    volBtn.style.background = 'black';

};

blueBtn.addEventListener('click', blueBtnClick);

//orange button
let orangeBtn = document.getElementById('orangeBtn');

function orangeBtnClick(){
    jumboTron.style.background = `#f0ad4e`;

    donateBtn.style.background = `#5751fd`;

    volBtn.style.color = 'white';
    volBtn.style.background = `#31b0d5`;
};

orangeBtn.addEventListener('click', orangeBtnClick);

//green button
let greenBtn = document.getElementById('greenBtn');

function greenBtnClick(){
    jumboTron.style.background = `#87ca8a`;

    donateBtn.style.background = `black`;

    volBtn.style.color = 'white';
    volBtn.style.background = `#8c9c08`;
};

greenBtn.addEventListener('click', greenBtnClick);

//form submission handling

let emailInput = document.getElementById('exampleInputEmail1');
let nameInput = document.getElementById('example-text-input');
let aboutMeInput = document.getElementById('exampleTextarea');
let submit = document.getElementById('submit');

//Validate email
function emailInputValidator(){
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    emailInput.style.backgroundColor = 'white';
    return reg.test(emailInput.value) ? emailInput.value : false;
};

//validate name
function nameInputValidator(){
    nameInput.style.backgroundColor = 'white';
    return nameInput.value ? nameInput.value : false;
};

//validate about-me
function aboutMeInputValidator(){
    aboutMeInput.style.backgroundColor = 'white';
    return aboutMeInput.value ? aboutMeInput.value : false;
};

//Handle Submit
submit.addEventListener('click', () => {
    event.preventDefault();
      
    let requestBody = {
        email: "",
        name: "",
        aboutMe: ""
    }
    
    let requestObj = {
        method: 'POST',
        body: null,
        headers: {
            'Content-Type': 'application/json'
          }
    } 

    if(emailInputValidator()){
        emailInput.style.backgroundColor = 'green';
        requestBody.email = emailInputValidator();
        emailInput.value = "";
    } else {
        emailInput.style.backgroundColor = 'red';
        alert('Your email is invaild');
    }  

    if(nameInputValidator()){
        requestBody.name = nameInputValidator();
        nameInput.value = "";
    } else {
        nameInput.style.backgroundColor = 'red';
        alert('Please enter a name');
    }  

    if(aboutMeInputValidator()){
        requestBody.aboutMe = aboutMeInputValidator();
        aboutMeInput.value = "";
    } else {
        aboutMeInput.style.backgroundColor = 'red';
        alert('Please add an about me to your form');
    }  

    if(requestBody.name && requestBody.email && requestBody.aboutMe){
        requestObj.body = JSON.stringify(requestBody);
    }
    console.log('requestBoday',  requestBody);
    console.log('requestObj', requestObj);    
})

