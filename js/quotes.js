const quotes = [
  {quote:"인생은...", author:"하나"},
  {quote:"인간은...", author:"둘"},
  {quote:"사람은...", author:"셋"},
  {quote:"동물은...", author:"넷"},
  {quote:"부모는...", author:"다섯"},
  {quote:"남자는...", author:"여섯"},
  {quote:"여자는...", author:"일곱"},
  {quote:"학생은...", author:"여덟"},
  {quote:"10대는...", author:"아홉"},
  {quote:"20대는...", author:"열"},
  {quote:"30대는...", author:"열하나"},
  {quote:"40대는...", author:"열둘"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
