// Find the button with the specified ID
const rejectButton = document.getElementById("W0wltc");

// Check if the button has the expected text and click it
if (rejectButton && rejectButton.innerText.toLowerCase().includes("reject all")) {
    rejectButton.click();
} else {
    // Show an alert if the button is not found or doesn't contain the expected text
    window.alert("Reject all button not found");
}
