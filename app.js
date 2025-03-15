// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the result page by looking for the results div
    const resultsDiv = document.getElementById('results');

    if (resultsDiv) {
        // Get the query parameters from the URL
        const params = new URLSearchParams(window.location.search);

        console.log(params.toString());
        // If you need to get the value of a specific parameter, you can use the get() method, like this:
        // console.log(params.get('name'));
        // console.log(params.get('email'));
        // console.log(params.get('phone'));

        // Check if there are any parameters
        if (params.toString()) {
            let resultsHTML = '<h2>Form Data:</h2><ul>';

            // Loop through all parameters
            for (const [key, value] of params) {
                resultsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
            }

            resultsHTML += '</ul>';
            resultsDiv.innerHTML = resultsHTML;
        } else {
            resultsDiv.innerHTML = '<p>No data was submitted.</p>';
        }
    }
});

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