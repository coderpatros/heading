function updateHeading(heading) {
    if (heading != null && heading != NaN)
    {
        document.getElementById("heading").innerText = heading;
    }
}

const watchID = navigator.geolocation.watchPosition((position) => {
    updateHeading(position.coords.heading);
});