async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const short_desc = document.querySelector('input[name="short-desc"]').value;
  const price = document.querySelector('input[name="post-price"]').value;
  const extend_desc = document.querySelector('input[name="post-detalls"]').value;
  const city = document.querySelector('input[name="post-city"]').value;
  


  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      short_desc,
    price,
    extend_desc,
    city
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
