const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getGreetings = () => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  let timeOfDay;

  if (hour <=6) timeOfDay = 'night'
  else if (6 < hour && hour < 12) timeOfDay = 'morning';
  else if (hour < 18) timeOfDay = 'afternoon'
  else timeOfDay = 'evening';

  const header = `Good ${timeOfDay}!`;
  const subheader = `Hope you're having a fantastic ${days[day]}`;

  return { header, subheader };
};

module.exports = { getGreetings };
