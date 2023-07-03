export default () => {
    onmessage = (message) => {
        console.log("Starting Web worker....");
        console.log(message, "message is here");
        console.log("Ending Web worker....");
    }
}