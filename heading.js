var headingElement = document.getElementById("heading");

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        if (event.webkitCompassHeading !== undefined)
        {
            headingElement.innerText = event.webkitCompassHeading;
        }
        else
        {
            headingElement.innerText = event.alpha;
        }

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
}
else {
    headingElement.innerText = "No DeviceOrientationEvent";
}
