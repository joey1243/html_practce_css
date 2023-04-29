const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const comment = form.querySelector('#comment').value;

  // TODO: Add code to submit the comment to a database or send an email
});
function addComment(name, email, comment) {
  const commentsList = document.querySelector('.comments ul');

  const commentItem = document.createElement('li');

  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  const headerElement = document.createElement('div');
  headerElement.classList.add('comment-header');

  const nameElement = document.createElement('h4');
  nameElement.textContent = name;

  const dateElement = document.createElement('span');
  dateElement.classList.add('comment-date');
  dateElement.textContent = new Date().toLocaleDateString();

  const bodyElement = document.createElement('div');
  bodyElement.classList.add('comment-body');

  const commentTextElement = document.createElement('p');
  commentTextElement.textContent = comment;

  const replyButton = document.createElement('button');
  replyButton.classList.add('reply-button');
  replyButton.textContent = 'Reply';

  headerElement.appendChild(nameElement);
  headerElement.appendChild(dateElement);

  bodyElement.appendChild(commentTextElement);
  bodyElement.appendChild(replyButton);

  commentElement.appendChild(headerElement);
  commentElement.appendChild(bodyElement);

  commentItem.appendChild(commentElement);

  commentsList.appendChild(commentItem);
}