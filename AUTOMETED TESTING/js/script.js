// Function to fetch data from the API endpoint and display the result
async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint URL
        const data = response.data;

        // Display the result in the HTML
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<h2>API Data</h2>
                                    <p>${JSON.stringify(data)}</p>`;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Display error message in the HTML
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<h2>Error</h2>
                                    <p>Failed to fetch data from the API.</p>`;
    }
}

// Call the fetchData function when the page loads
window.onload = fetchData;
