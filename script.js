// let apiQuotes = [];


// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
 }

// Get some Quotes from an API using an async fetch request within a try catch statement.
// An asynchronous function can run at any time independently and won't stop the browser from completing the loading of the page
// async function getQuotes() {
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // Catch the error
//   }
// }
// // On load
// getQuotes();
newQuote();