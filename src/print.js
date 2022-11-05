export default function printMe() {
  function appendBody() {
  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('bodyContainer');
  bodyContainer.classList.add('child');
  const name = document.createElement('div');
  name.textContent = 'Eastern Opportunities';
  name.classList.add('name');
  name.classList.add('child');
  const description = document.createElement('div');
  description.classList.add('description');
  description.classList.add('child');
  description.textContent = 'Do you want to break free from your current life and move someplace beautiful and relaxing? We can help you.';
  bodyContainer.appendChild(name);
  bodyContainer.appendChild(description);
  return bodyContainer
}
document.querySelector('.pageBody').append(appendBody())
}
