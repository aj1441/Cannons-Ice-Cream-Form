function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	userArray.push(dataObject);
	console.log(userArray);
	console.log(dataObject);
	form.reset();
}
