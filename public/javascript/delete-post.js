async function deleteFormHandler(event) {
  event.preventDefault();
  if (!confirm('Delete this post? This cannot be undone.')) return;

  const id = window.location.pathname.split('/').pop();
  const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Could not delete the post. Please try again.');
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
