function formatTimeElapsed(date) {
  const previousDate = new Date(date);
  const todayDate = new Date();
  const diffTime = Math.abs(todayDate - previousDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffHours = Math.ceil(diffTime / (1000 * 60));
  if (diffYears > 1) {
    return diffYears + ' years ';
  } else if (diffYears === 1) {
    return diffYears + ' year ';
  } else if (diffDays > 1) {
    return diffDays + ' days ';
  } else if (diffDays === 1) {
    return diffDays + ' day ';
  } else if (diffHours > 1) {
    return diffHours + ' hours ';
  } else {
    return diffHours + ' hour ';
  }
}
export default formatTimeElapsed;
