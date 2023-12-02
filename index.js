// Write your code in this file!
let currentUser = "Djangostarr";

const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
// concate = const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
// Also works
const excitedWelcomeMessage = welcomeMessage.toUpperCase() + currentUser + "!";
// .toUpperCase() = a DEFAULT string method that updates the value of the variable.

const shortGreeting = "Welcome, " + currentUser.slice(0, 1) + "!";
//const shortGreeting = 'Welcome, ' + currentUser.charAt(0) + '!';
//works but it's less flexible and can be cleaned up, allowing flexibility with the .slice() method.
