let apiQuotes = [];


// Get some Quotes from an API using an async fetch request within a try catch statement.
// An asynchronous function can run at any time independently and won't stop the browser from completing the loading of the page

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    // Catch the error
  }
}
// On load
getQuotes();