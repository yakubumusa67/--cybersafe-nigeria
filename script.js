// Welcome Message

window.onload = function(){

alert(
"Welcome to CyberSafe Nigeria Version 3.0.\n\nLearn Cybersecurity and Stay Safe Online!"
);

};


// Cyber Quiz

function cyberQuiz(){

let answer = prompt(

"Which password is the strongest?\n\nA. 12345678\nB. password123\nC. CyberSafe@2026#"

);


if(answer === null){

return;

}


answer = answer.toUpperCase();


if(answer === "C"){

alert(

"Correct!\n\nStrong passwords should contain uppercase letters, lowercase letters, numbers and symbols."

);

}


else{

alert(

"Incorrect.\n\nThe correct answer is C."

);

}

}



// Daily Cyber Tips

const tips = [

"Never share your OTP with anyone.",

"Enable Two-Factor Authentication on your accounts.",

"Always verify suspicious links before clicking.",

"Avoid using the same password everywhere.",

"Update your applications regularly.",

"Never disclose your bank details to strangers online.",

"Be careful of fake giveaways and investment scams.",

"Only download applications from trusted sources.",

"Lock your phone when not in use.",

"Learn cybersecurity every day."

];



let currentTip = 0;


function changeTip(){

const tipText = document.getElementById("tips");


if(tipText){

tipText.innerHTML = tips[currentTip];

currentTip++;

if(currentTip >= tips.length){

currentTip = 0;

}

}

}


setInterval(changeTip,4000);




// Scroll Animation

const cards = document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{

cards.forEach((card)=>{

const position = card.getBoundingClientRect().top;

const screen = window.innerHeight;


if(position < screen-100){

card.style.opacity = "1";

card.style.transform = "translateY(0)";

}

});

});




// Initial Card Styles

cards.forEach((card)=>{

card.style.opacity = "0";

card.style.transform = "translateY(40px)";

card.style.transition = "1s";

});




// Security Reminder Every 60 Seconds

setInterval(function(){

console.log(

"CyberSafe Nigeria Reminder: Stay alert online."

);

},60000);




// Interactive Learning Messages

function cyberMessage(){

const messages = [

"Strong passwords save accounts.",

"Never share your OTP code.",

"Cybersecurity is everyone's responsibility.",

"Stay informed about online scams.",

"Think before you click."

];


const randomMessage = Math.floor(

Math.random()*messages.length

);


alert(messages[randomMessage]);


}



// Show Message After 30 Seconds

setTimeout(cyberMessage,30000);
function calculateScore(){

let score=0;


const answers={

q1:"a",
q2:"c",
q3:"b",
q4:"a",
q5:"a"

};



for(let question in answers){

let option=document.querySelector(

'input[name="'+question+'"]:checked'

);


if(option && option.value===answers[question]){

score++;

}

}



let percentage=(score/5)*100;

let grade="";


if(percentage>=90){

grade="EXCELLENT";

}

else if(percentage>=70){

grade="VERY GOOD";

}

else if(percentage>=60){

grade="GOOD";

}

else{

grade="KEEP LEARNING";

}



document.getElementById("result").innerHTML=

"YOUR SCORE : "+score+
"/5 <br><br>"+
"PERCENTAGE : "+percentage+
"% <br><br>"+
"GRADE : "+grade;


}
/* ==========================
   DARK MODE
========================== */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.innerHTML = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            darkModeBtn.innerHTML = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }

    });

}

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (darkModeBtn) {
        darkModeBtn.innerHTML = "☀️ Light Mode";
    }

}
function checkPassword(){

    let password=document.getElementById("password").value;
    let strength=document.getElementById("strength");

    let score=0;

    if(password.length>=12) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if(password.length===0){
        strength.innerHTML="";
    }
    else if(score<=2){
        strength.style.color="red";
        strength.innerHTML="❌ Weak Password";
    }
    else if(score===3 || score===4){
        strength.style.color="orange";
        strength.innerHTML="⚠ Medium Password";
    }
    else{
        strength.style.color="green";
        strength.innerHTML="✅ Strong Password";
    }

}
