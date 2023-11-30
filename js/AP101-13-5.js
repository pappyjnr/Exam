function countdown(seconds) {
  let intervalId = setInterval(function () {
    if (seconds > 0) {
      console.log(seconds);
      seconds--;
    } else {
      console.log("Countdown complete!");
      clearInterval(intervalId); // Stop the countdown when it reaches 0
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Example: Countdown from 80 seconds (1 minute and 20 seconds)
countdown(80);
