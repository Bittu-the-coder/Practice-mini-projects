// Replace this with your Daily room URL
const roomUrl = "https://educationyan.daily.co/Meeting_Room";

// Function to join the call
function joinCall() {
    // Create a Daily call frame
    const callFrame = DailyIframe.wrap(document.getElementById("call-frame"), {
        showLeaveButton: true, // Adds a leave button to the interface
        iframeStyle: {
            width: "100%",
            height: "100%"
        }
    });

    // Join the room
    callFrame.join({ url: roomUrl })
        .then(() => {
            console.log("Successfully joined the call!");
        })
        .catch((error) => {
            console.error("Error joining the call:", error);
        });
}