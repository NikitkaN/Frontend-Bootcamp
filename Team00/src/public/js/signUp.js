document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        const errorText = await response.text();
        document.getElementById('error-message').textContent = errorText;
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('error-message').textContent = 'An error occurred during registration';
    }
});