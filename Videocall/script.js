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
    "https://gd-07.whereby.com/just-meeta9760573-83ec-4e0b-a6f7-54449e38b2a5?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiIxMDI0NDQwMDgiLCJyb29tUmVmZXJlbmNlIjp7InJvb21OYW1lIjoiL2p1c3QtbWVldGE5NzYwNTczLTgzZWMtNGUwYi1hNmY3LTU0NDQ5ZTM4YjJhNSIsIm9yZ2FuaXphdGlvbklkIjoiMzE1MTg4In0sImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuc3J2LndoZXJlYnkuY29tIiwiaWF0IjoxNzQ3NzY4NzcxLCJyb29tS2V5VHlwZSI6Im1lZXRpbmdIb3N0In0.YwAE01kZ8FO_TKZ5PSqjbc1v-kDKX8uJVOw_gQyQeIg";
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
