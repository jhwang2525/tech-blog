async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (!title || !content) return;

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Could not publish the post. Please try again.');
  }
}

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
