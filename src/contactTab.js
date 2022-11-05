export default function contactTab() {
	console.log('This is the contact tab')
	function appendBody() {
		const bodyContainer = document.createElement('div');
		bodyContainer.classList.add('bodyContainer');
		bodyContainer.classList.add('child');
		const name = document.createElement('div');
		name.textContent = 'Contact Information';
		name.classList.add('name');
		name.classList.add('child');
		const description = document.createElement('div');
		description.classList.add('description');
		description.classList.add('child');
		description.textContent = 'Contact Sam at +62-1234-5678 or sam@easternoppotunities.com';
		bodyContainer.appendChild(name);
		bodyContainer.appendChild(description);
		return bodyContainer
	}
let allChildren = document.querySelector(".child");
allChildren.remove();
document.querySelector('.pageBody').append(appendBody())
}