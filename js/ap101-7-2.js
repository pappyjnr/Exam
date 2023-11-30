function minutesAgo(timestamp) {
  const eventTime = new Date(timestamp);
  const currentTime = new Date();
  const timeDifference = currentTime - eventTime;

  const minutesDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 60 * 12)
  );

  if (minutesDifference === 0) {
    return "just now";
  } else if (minutesDifference === 1) {
    return "1 minute ago";
  } else {
    return `${minutesDifference} minutes ago`;
  }
}

const timestamp = 1640995200000;
const result = minutesAgo(timestamp);
console.log(result);
