import './style.css';
import printMe from './print.js';

console.log('Luke is a dumb bitch');

function component() {
const content = document.createElement('div');
content.classList.add('content');
const header = document.createElement('div');
header.classList.add('header');
const home = document.createElement('div');
home.classList.add('home');
home.classList.add('tab');
home.textContent = 'Home';
const properties = document.createElement('div');
properties.classList.add('properties');
properties.classList.add('tab');
properties.textContent = 'Properties';
const contact = document.createElement('div');
contact.classList.add('contact');
contact.classList.add('tab');
contact.textContent = 'Contact';
const pageBody = document.createElement('div');
pageBody.classList.add('pageBody');
const bodyContainer = document.createElement('div');
bodyContainer.classList.add('bodyContainer');
const name = document.createElement('div');
name.textContent = 'Eastern Opportunities';
name.classList.add('name');
const description = document.createElement('div');
description.classList.add('description');
description.textContent = 'Do you want to break free from your current life and move someplace beautiful and relaxing? We can help you.';

content.appendChild(header);
header.appendChild(home);
header.appendChild(properties);
header.appendChild(contact);
content.appendChild(pageBody);
pageBody.appendChild(bodyContainer);
bodyContainer.appendChild(name);
bodyContainer.appendChild(description);

return content;
}

document.body.appendChild(component());
printMe();
