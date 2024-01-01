function showMore(button) {
	let textsToShow = button.parentElement.getElementsByClassName('show-more')
	for(let text of textsToShow) {
		text.classList.add('shown');
	}
	button.classList.add('show-more');
	return false;
}