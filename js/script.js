/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
Star Trek Quotes
***/
var quotes = [

  {
      quote: 'Live now; make now always the most precious time. Now will never come again.',
      source: 'Captain Jean-Luc Picard',
      citation: 'Star Trek:TNG',
      year: 'Stardate 45944.1'
  },
  {
    quote: 'You know the greatest danger facing us is ourselves, and irrational fear of the unknown. There is no such thing as the unknown. Only things temporarily hidden, temporarily not understood.',
    source: 'Captain James Tiberius Kirk',
    citation: 'Star Trek:TOS',
    year: 'Stardate 1512.2'
},
{
  quote: 'Logic clearly dictates that the needs of the many outweigh the needs of the few...or the one.',
  source: 'Commander Spock',
  citation: 'Star Trek:The Wrath of Khan',
  year: 'Stardate 8130.3'
},
/*** 
Star Wars Quotes
***/
{
  quote: 'Try not. Do or do not. There is no try.',
  source: 'Yoda',
  citation: 'Star Wars:The Empire Strikes Back',
  year: '1980'
},
{
  quote: 'Join me, and together, we can rule the galaxy as father and son!',
  source: 'Darth Vader',
  citation: 'Star Wars:The Empire Strikes Back',
  year: '1980'
},
{
  quote: "I'll never turn to the dark side. You've failed, your highness. I am a Jedi, like my father before me.",
  source: 'Commander Spock',
  citation: 'Star Wars:The Empire Strikes Back',
  year: '1980'
},
/*** 
Rick and Morty Quotes
***/
{
  quote: 'This seems like a good time for a drink and a cold, calculated speech with sinister overtones. A speech about politics, about order, brotherhood, power ... but speeches are for campaigning. Now is the time for action.',
  source: 'Evil Morty',
  citation: 'Rick and Morty',
  year: 'episode??'
},
{
  quote: "I'm a scientist because I invent, transform, create, and destroy for a living. And when I don't like something about the world, I change it",
  source: 'Rick',
  citation: 'Rick and Morty',
  year: 'episode??'
},
{
  quote: "To live is to risk it all—otherwise, you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.",
  source: 'Rick',
  citation: 'Rick and Morty',
  year: 'episode??'
},
/*** 
Hitchhikers Guide to the Galaxy Quotes
***/
{
  quote: "Don't Panic.",
  source: 'The Guide',
  citation: 'Hitchhikers Guide to the Galaxy',
  year: 'Stardate 8130.3'
},
{
  quote: "This planet has - or rather had - a problem, which was this: most of the people living on it were unhappy for pretty much of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movement of small green pieces of paper, which was odd because on the whole it wasn't the small green pieces of paper that were unhappy",
  source: 'The Guide',
  citation: 'Hitchhikers Guide to the Galaxy',
  year: 'Stardate 8130.3'
},
{
  quote: 'We want you to tell us...." he paused, "The Answer."
  "The Answer?" said Deep Thought. "The Answer to what?"
  "Life!" urged Fook.
  "The Universe!" said Lunkwill.
  "Everything!" they said in chorus.
  Deep Thought paused for a moments reflection...
  
  ...."Forty-two," said Deep Thought, with infinite majesty and calm. ',
  source: 'Commander Spock',
  citation: 'Hitchhikers Guide to the Galaxy',
  year: 'Stardate 8130.3'
},


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
  console.log("clicked")
  var actualQuote = getRandomQuote(quotes); 
  var stringOfQuoteProperties = "";
    stringOfQuoteProperties += "<p class='quote'>" + actualQuote.quote +"</p> <p class='source'>" + actualQuote.source + " " + actualQuote.year + "</p>"
  if (actualQuote.year.hasOwnProperty()) {
    stringOfQuoteProperties += "<span class='year'>" + actualQuote.year + "</span>";
  } else {} 

  document.getElementById("quote-box").innerHTML = stringOfQuoteProperties; 



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);