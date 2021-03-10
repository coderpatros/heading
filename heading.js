var headingElement = document.getElementById("heading");

window.addEventListener("deviceorientation", function(event) {
    if (event.webkitCompassHeading !== undefined)
    {
        headingElement.innerText = event.webkitCompassHeading;
    }
    else
    {
        headingElement.innerText = event.alpha;
    }
}, true);
