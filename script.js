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
/* =====================================================
   CYBERSAFE67 - HOMEPAGE INTERACTIONS
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       DARK MODE
       =============================== */

    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                darkModeBtn.innerHTML = "☀️ Light Mode";
                localStorage.setItem("cybersafeTheme", "light");
            } else {
                darkModeBtn.innerHTML = "🌙 Dark Mode";
                localStorage.setItem("cybersafeTheme", "dark");
            }
        });

        // Remember user's theme
        const savedTheme = localStorage.getItem("cybersafeTheme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
            darkModeBtn.innerHTML = "☀️ Light Mode";
        }
    }


    /* ===============================
       SMOOTH SCROLLING
       =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* ===============================
       SCROLL REVEAL ANIMATION
       =============================== */

    const revealElements = document.querySelectorAll(
        ".section, .feature-card, .course-card, .tip-card, .stat-card"
    );

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    /* ===============================
       NUMBER COUNTERS
       =============================== */

    const counters = document.querySelectorAll("[data-counter]");

    counters.forEach(function (counter) {

        const target = Number(counter.getAttribute("data-counter"));

        if (isNaN(target)) return;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        function updateCounter() {

            current += increment;

            if (current >= target) {
                current = target;
            }

            counter.textContent = current + "+";

            if (current < target) {
                requestAnimationFrame(updateCounter);
            }
        }

        updateCounter();

    });


    /* ===============================
       BACK TO TOP BUTTON
       =============================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ===============================
       SCAM ALERT
       =============================== */

    const scamAlertBtn = document.getElementById("scamAlertBtn");

    if (scamAlertBtn) {

        scamAlertBtn.addEventListener("click", function () {

            alert(
                "🚨 SCAM ALERT\n\n" +
                "Never share your password, OTP, PIN or banking information.\n\n" +
                "Always verify suspicious messages, links and phone numbers before taking action."
            );

        });

    }


    /* ===============================
       CURRENT YEAR
       =============================== */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ===============================
       MOBILE MENU
       =============================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }


    /* ===============================
       WELCOME MESSAGE
       =============================== */

    const loggedInUser = localStorage.getItem("cybersafe67LoggedUser");

    if (loggedInUser) {

        console.log(
            "Welcome back to CyberSafe67!"
        );

    }

});
