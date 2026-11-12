async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('#comment').value.trim();
  const post_id = window.location.pathname.split('/').pop();
  if (!comment_text) return;

  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ post_id, comment_text }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Could not post your comment. Please try again.');
  }
}

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
