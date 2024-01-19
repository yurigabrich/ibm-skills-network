// Variables
let isLoggedIn = true;
let isEnrolled = true;
let userRole = "employee";
let userType = "non-subscriber";

let userMessage;
let accessLevel;
let userCategory;

let authenticationStatus = isEnrolled ? "Enrolled Member" : "Not Enrolled Member";

// Conditions
if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, Employee!";
    } else {
        userMessage = "Welcome, Client!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

if (userRole === "employee") {
    accessLevel = "Full access to Dietary Services.";
} else if (userRole === "client") {
    accessLevel = "Must request access to Dietary Services.";
} else {
    accessLevel = "Should join the organization program first.";
}
console.log("Access Level:", accessLevel);

switch (userType) {
    case "enrolled":
        userCategory = "Enrolled Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Non-Subscriber";
}
console.log("User Category:", userCategory);

console.log("Authentication Status:", authenticationStatus);

