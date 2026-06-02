//synchronous execution

//fetchData takes 1 minute to get the result
const data = fetchData();
renderPage(data);

// user sees blank page for 1 minute
// clicks do nothing
//scoll is frozen


//asynchrnous execution

//start fetch, don't wait -- carry on
fetchData()
    .then(data => renderPage(data));

showLoadingSpinner(); // runs immediatlly 
// page is interactive!  sppiner shows
//renderPage runs when data arrives



//execution stack
console.log(greet(main()));
