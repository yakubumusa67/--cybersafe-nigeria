//=============================
// WELCOME MESSAGE
//=============================

window.onload = function () {

alert(
"Welcome to CyberSafe Nigeria!\n\nProtecting Nigerians in the Digital World."
);

};


//=============================
// SCROLL TO TOP BUTTON
//=============================

let myButton = document.createElement("button");

myButton.innerHTML = "↑";

myButton.id = "topBtn";

document.body.appendChild(myButton);


myButton.style.position = "fixed";
myButton.style.bottom = "20px";
myButton.style.right = "20px";
myButton.style.padding = "15px";
myButton.style.borderRadius = "50%";
myButton.style.border = "none";
myButton.style.fontSize = "25px";
myButton.style.cursor = "pointer";
myButton.style.display = "none";
myButton.style.background = "cyan";
myButton.style.color = "black";


window.onscroll = function(){

if(document.documentElement.scrollTop >300){

myButton.style.display ="block";

}

else{

myButton.style.display ="none";

}

};



myButton.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};




//=============================
// BUTTON EFFECTS
//=============================


let buttons = document.querySelectorAll("button");


buttons.forEach(function(button){


button.addEventListener("mouseover",function(){

button.style.boxShadow="0 0 30px cyan";


});


button.addEventListener("mouseout",function(){

button.style.boxShadow="none";


});


});




//=============================
// CYBER QUIZ ALERT
//=============================


let quizButton = document.querySelector(".btn2");


if(quizButton){

quizButton.addEventListener("click",function(){


alert(

"Cyber Quiz Center is coming soon in Version 2.0."

);


});

}




//=============================
// START LEARNING BUTTON
//=============================


let learnButton = document.querySelector(".btn1");


if(learnButton){


learnButton.addEventListener("click",function(){


alert(

"Welcome to FREE Cybersecurity Learning!"

);


});

}



//=============================
// FOUNDER MESSAGE
//=============================


setTimeout(function(){


console.log(

"CyberSafe Nigeria was founded by Yakubu Musa."

);


},3000);




//=============================
// PAGE LOADED SUCCESSFULLY
//=============================


console.log("CyberSafe Nigeria Loaded Successfully!");



//=============================
// FUTURE FEATURES
//=============================


/*

COMING SOON


Dark Mode

Cyber Quiz

Certificates

AI Cyber Assistant

Scam Reporting Center

Cyber Games

Leaderboards

Administrator Dashboard

Official Mobile Application


*/