// JavaScript goes here.

let yesButton = document.querySelector(".yes-button");
let noButton = document.querySelector(".no-button");
let submitButton = document.querySelector(".submit-button");
let resultDiv = document.querySelector(".result");
let questionButtonValue = 0;
let casualImg = document.querySelector(".casual-img");
let connoissuerImg = document.querySelector(".connoisseur-img");
let gatekeeperImg = document.querySelector(".gatekeeper-img");
let expertImg = document.querySelector(".expert-img");




//When clicked, the value increases to 1.
yesButton.addEventListener("click", function(){
    questionButtonValue = 1;
    console.log(questionButtonValue);

});

//When clicked, the value remains at 0.
noButton.addEventListener("click", function(){
    questionButtonValue = 0;
    connsole.log(questionButtonValue);

});

submitButton.addEventListener("click", function(){
    let recordNum = document.querySelector(".record-num").value;

    if (recordNum <= 6 && questionButtonValue === 0) {
        resultDiv.innerHTML = "You're a Casual Listener. Nothing bad about that at all, you chose to enjoy music while its on.";
        casualImg.style.display = 'block';

    } else if (recordNum > 6 && questionButtonValue === 0) {
        resultDiv.innerHTML = "You're a Music Connoissuer. You enjoy music to it's fullest extent while understanding the taste of others.";
        connoissuerImg.style.display = 'block';

    } else if (recordNum <= 6 && questionButtonValue === 1) {
        resultDiv.innerHTML = "You're a Music Gatekeeper. You don't enjoy letting others know what to listen to, instead you keep it to yourself.";
        gatekeeperImg.style.display = 'block';

    } else if (recordNum > 6 && questionButtonValue === 1){
        resultDiv.innerHTML = "You're a Music Expert I guess... You believe that you have a more superior music taste than everyone else.";
        expertImg.style.display = 'block';

    }
    
});