
// JavaScript code to handle form submission
const blogForm = document.getElementById('blogForm');
blogForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const image = document.getElementById('image').value;
  const video = document.getElementById('video').value;

  // Display the blog content
  const blogContainer = document.createElement('div');
  blogContainer.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
    ${image ? `<img src="${image}" alt="Blog Image">` : ''}
    ${video ? `<iframe width="560" height="315" src="${video}" frameborder="0" allowfullscreen></iframe>` : ''}
  `;

  document.body.appendChild(blogContainer);

  // Reset the form
  blogForm.reset();
  
});
