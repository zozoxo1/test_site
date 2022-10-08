let side_navigation = document.querySelector('.side-navigation-container')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
	if (side_navigation.classList.contains('closed')) {
		side_navigation.classList.remove('closed')
	} else {
		side_navigation.classList.add('closed')
	}
})
