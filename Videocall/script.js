// // Replace this with your Daily room URL
// const roomUrl = "https://educationyan.daily.co/Meeting_Room";

// // Function to join the call
// function joinCall() {
//     // Create a Daily call frame
//     const callFrame = DailyIframe.wrap(document.getElementById("call-frame"), {
//         showLeaveButton: true, // Adds a leave button to the interface
//         iframeStyle: {
//             width: "100%",
//             height: "100%"
//         }
//     });

//     // Join the room
//     callFrame.join({ url: roomUrl })
//         .then(() => {
//             console.log("Successfully joined the call!");
//         })
//         .catch((error) => {
//             console.error("Error joining the call:", error);
//         });
// }




// Replace this with your Whereby room URL
const roomUrl =
    "https://gd-07.whereby.com/family-meet11170b2d-6c59-4357-85eb-c93fba6e0cee?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiIxMDEyNDAxMjIiLCJyb29tUmVmZXJlbmNlIjp7InJvb21OYW1lIjoiL2ZhbWlseS1tZWV0MTExNzBiMmQtNmM1OS00MzU3LTg1ZWItYzkzZmJhNmUwY2VlIiwib3JnYW5pemF0aW9uSWQiOiIzMTUxODgifSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zcnYud2hlcmVieS5jb20iLCJpYXQiOjE3NDYxOTc4NDAsInJvb21LZXlUeXBlIjoibWVldGluZ0hvc3QifQ.ip4OFNSjp56dteWVf4b7FCHHlzi6nJ_qjoqVl2aeGtY";

// Function to join the call
function joinCall() {
    try {
        // Get the container for the call frame
        const callFrameContainer = document.getElementById("call-frame");

        // Create an iframe for the Whereby room
        const iframe = document.createElement("iframe");
        iframe.src = roomUrl;
        iframe.allow =
            "camera; microphone; fullscreen; speaker; display-capture";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        // Append the iframe to the container
        callFrameContainer.appendChild(iframe);

        console.log("Successfully joined the call!");
    } catch (error) {
        console.error("Error joining the call:", error);
    }
}