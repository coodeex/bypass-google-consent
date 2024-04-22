// Check if the current domain is google.com
if (window.location.hostname !== "www.google.com") {
    return;
}

// Find the button with the specified ID
const rejectButton = document.getElementById("W0wltc");

// Check if the button has the expected text and click it
if (rejectButton && rejectButton.innerText.toLowerCase().includes("reject all")) {
    rejectButton.click();
}
