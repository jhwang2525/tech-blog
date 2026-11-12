async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace(response.ok ? '/' : '/login');
}

document.querySelector('#logout').addEventListener('click', logout);
