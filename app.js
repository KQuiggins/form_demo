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