document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzTbqv2c8oZdBT5OhNI-VNhnT5IwrLW7YKrRYoEbAyq/dev';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const formData = {
      name,
      email,
      message
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert('There was an error. Please try again.');
      });
  });
});
