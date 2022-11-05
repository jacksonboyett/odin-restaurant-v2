export default function propertiesTab() {
	console.log('This is the properties tab')
	function appendBody() {
		const bodyContainer = document.createElement('div');
		bodyContainer.classList.add('bodyContainer');
		bodyContainer.classList.add('child');
		const name = document.createElement('div');
		name.textContent = 'Jungle Beach';
		name.classList.add('name');
		name.classList.add('child');
		const description = document.createElement('div');
		description.classList.add('description');
		description.classList.add('child');
		description.textContent = 'Beautiful beachfront property for only $13,000! Land is selling quickly in Sumbawa, so buy this property now!';
		bodyContainer.appendChild(name);
		bodyContainer.appendChild(description);
		return bodyContainer
	}
let allChildren = document.querySelector(".child");
allChildren.remove();
document.querySelector('.pageBody').append(appendBody())
}
