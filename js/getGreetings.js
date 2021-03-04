const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const adjectives = ['awesome', 'fantastic', 'peaceful', 'relaxing', 'exciting', 'chilled'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

export default () => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  let timeOfDay;

  if (hour <= 6) timeOfDay = 'night';
  else if (hour > 6 && hour < 12) timeOfDay = 'morning';
  else if (hour < 18) timeOfDay = 'afternoon';
  else timeOfDay = 'evening';

  const header = `Good ${timeOfDay}!`;
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const indefiniteArticle = vowels.includes(adjective[0]) ? 'an' : 'a';
  const subheader = `Hope you're having ${indefiniteArticle} ${adjective} ${days[day]}`;

  return { header, subheader };
};
