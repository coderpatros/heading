var headingElement = document.getElementById("heading");

headingElement.textContent = "Loading";

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        if (event.webkitCompassHeading !== undefined)
        {
            headingElement.textContent = event.webkitCompassHeading;
        }
        else
        {
            headingElement.textContent = event.alpha;
        }

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
}
else {
    headingElement.textContent = "No DeviceOrientationEvent";
}
