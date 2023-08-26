//  script.js for landing-page directory

// Button one function
let element = document.getElementById("sign_up1");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("sign_up1").innerHTML = "Click 1";
}

// Button two function
const element2 = document.getElementById("sign_up2");
element2.addEventListener("click", myOtherFunction);

function myOtherFunction() {
    document.getElementById("sign_up2").innerHTML = "Click 2";
}