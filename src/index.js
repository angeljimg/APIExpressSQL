import app from "./app"

/**
 * The main function is a function that listens to the port that the app is on and then logs the port
 * number to the console.
 */
const main = () => {
    app.listen(app.get("port"));
    console.log("Server on port:", app.get("port"));
};

main();