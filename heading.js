var headingElement = document.getElementById("heading");

window.addEventListener("deviceorientation", function(event) {
    headingElement.innerText = event.alpha + "   " + event.beta + "   " + event.gamma;

}, true);
