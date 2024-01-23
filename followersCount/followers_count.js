let count = 0; // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function resetCount() {
    count = 0; // Reset the count value
    displayCount(); // Display the count
    resetCountValue(); // Display message of the reset method
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCountValue() {
    alert("Your number of followers has been reset.");
}

