// Accordion functionality
document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});

// Fetch data from an external API
document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiData').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});

//form validation
document.getElementById('sampleForm').addEventListener('submit', (event) => {
    const nameInput = document.getElementById('name');
    const displayElement = document.getElementById('displayUserInput');

    if (nameInput.value.trim() === '') {
        alert('Name is required');
        event.preventDefault();
    } else {
        displayElement.innerText = `You entered: ${nameInput.value}`;
        event.preventDefault();  // Prevent form submission for demonstration purposes
    }
});
