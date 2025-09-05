const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Message from ${name} (${email}): ${message}`);
  alert('Thank you for your message! We will get back to you soon.');
  form.reset();
});
