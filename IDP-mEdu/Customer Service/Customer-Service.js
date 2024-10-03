fetch('../BasicFunctionalityOfPages/header/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text(); // Extract text from the response
    })
    .then(data => {
        const header_push = document.getElementById('header');
        header_push.innerHTML = data; // Insert the fetched HTML into the header element
    })
    .catch(error => {
        console.error('Error fetching header:', error); // Handle any errors
    });