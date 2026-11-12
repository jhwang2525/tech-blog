async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const errorEl = document.querySelector('#form-error');
  errorEl.textContent = '';
  if (!username || !password) return;

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    errorEl.textContent = 'Could not create the account. Try a different username.';
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
