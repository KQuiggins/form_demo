

// This script runs on both pages, but we only want to process parameters on the result page
if (window.location.pathname.includes('result.html')) {
    // Get the current URL's query string (everything after the '?')
    const queryString = window.location.search;

    // Create a URLSearchParams object for easy parameter access
    const urlParams = new URLSearchParams(queryString);

    // Access individual parameters by name
    const name = urlParams.get('name');
    const age = urlParams.get('age');

    // Show the values in the results div
    const resultsDiv = document.getElementById('results');

    // Check if parameters exist
    if (name && age) {
        resultsDiv.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><em>These values were retrieved from the URL query parameters.</em></p>
    `;
    } else {
        resultsDiv.innerHTML = `
      <p>No parameters found in the URL.</p>
      <p>Please submit the form on the previous page.</p>
    `;
    }

    // Demonstrate how to get all parameters
    console.log("All submitted parameters:");
    urlParams.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}