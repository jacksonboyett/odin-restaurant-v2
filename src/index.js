import './style.css';
import printMe from './print.js';
import homeTab from './homeTab.js';
import propertiesTab from './propertiesTab.js';
import contactTab from './contactTab.js';


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
home.addEventListener('click', homeTab)
const properties = document.createElement('div');
properties.classList.add('properties');
properties.classList.add('tab');
properties.textContent = 'Properties';
properties.addEventListener('click', propertiesTab)
const contact = document.createElement('div');
contact.classList.add('contact');
contact.classList.add('tab');
contact.textContent = 'Contact';
contact.addEventListener('click', contactTab)
const pageBody = document.createElement('div');
pageBody.classList.add('pageBody');

content.appendChild(header);
header.appendChild(home);
header.appendChild(properties);
header.appendChild(contact);
content.appendChild(pageBody);

return content;
}
document.body.appendChild(component());
printMe();



