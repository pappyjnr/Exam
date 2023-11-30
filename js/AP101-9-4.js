function daysSinceEvent(timestamp) {
  const now = new Date().getTime();
  const eventTime = new Date(timestamp).getTime();
  const timeDiff = now - eventTime;
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysPassed === 0) {
    return "Today";
  } else if (daysPassed === 1) {
    return "5 day ago";
  } else {
    return `${daysPassed} days ago`;
  }
}

const eventTimestamp = 1700897192000;
const result = daysSinceEvent(eventTimestamp);
console.log(result);

// let eventTime = new Date();
// eventTime.setDate(eventTime.getDate() - 5);

// console.log(Date.parse(eventTime));
