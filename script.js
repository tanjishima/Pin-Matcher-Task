// TODO 1:Generate Pin 
// TODO 1:Make the keypad functional
// TODO 1:Make Notifaction Work
// TODO 1:Make try out functional
// TODO 1:Make "<" and "C"work on the keypress
// TODO 1:f there is no try left user won't able to generate a new pin


//Selectors

const generatePinBtn=document.querySelector(".generate-btn");
const generatePin=document.querySelector(".generate-pin");
const showValue=document.querySelector(".showValue");
const removeBtn=document.getElementById("removeBtn");
const submitBtn=document.querySelector(".submit-btn");
const wrongPinNotification=document.querySelector(".wrong-pin");
const correctPinNotification=document.querySelector(".correct-pin");
const tryLeft=document.getElementById("tryLeft");
const action=document.querySelector(".action-left");




function generatedPin(){
    let randomNumber=Math.floor(Math.random()*9000+1000);
    generatePin.value=randomNumber;
}


//Show value on the keypad
function keypadValue(number){
    let chance=tryLeft.innerHTML;
    if(chance >= 0){
        if(generatePin.value===""){
            alert("please,generate a pin!");
        }else{
            showValue.value +=number;
        }
     //clear input value
        if(number==="C"){
            showValue.value="";
        }
    }


}

//Once click on "<"remove single digit from the last
function removeSingleDigit(){
    if(generatePin.value===""){
        alert("please,generate a pin!");
    }else{
        let currentValue=showValue.value ;
        showValue.value =currentValue.slice(0,-1);
    }
}

//check-pin
function checkGeneratePin(){
    let newPin=generatePin.value;
    let currentPin=showValue.value;

    if(newPin===currentPin){
        CorrectNoticication();
    }else{
        WrongNotification();
       tryLeftNumber();
    }

}
// check number of try-left
function tryLeftNumber(){
    let chance=tryLeft.innerText;
    if(chance > 0){
    tryLeft.innerHTML= --chance ;
    }else{
        action.innerHTML="please try again!After 30 hours!";
        submitBtn.disabled="true";
    }
    
}


//show notification if pin is invaild
function CorrectNoticication(){
    wrongPinNotification.style.display="none";
    correctPinNotification.style.display="block";
    generatePinBtn.style.backgroundColor="green";
    submitBtn.style.backgroundColor="green";
    generatePinBtn.disabled="true";
    submitBtn.disabled="true";
}

//show notification if pin is vaild
function WrongNotification(){
    wrongPinNotification.style.display="block";
    correctPinNotification.style.display="none";
    generatePinBtn.style.backgroundColor="red";
    submitBtn.style.backgroundColor="red";
    generatePinBtn.disabled="true";
    showValue.value="";
}

//hide default notification
function hideNotification(){
    wrongPinNotification.style.display='none';
    correctPinNotification.style.display='none';

}

//Events
hideNotification();
generatePinBtn.addEventListener("click",generatedPin);
removeBtn.addEventListener("click",removeSingleDigit);
submitBtn.addEventListener("click",checkGeneratePin);
submitBtn.addEventListener("click",numberOfTry);




