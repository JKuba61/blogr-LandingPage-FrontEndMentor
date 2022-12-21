const burgetBtn = document.querySelector('.burger-icon')
const mobileMenu = document.querySelector('.nav--mobile__dropdown')
const mobileMenuItems = document.querySelectorAll('.nav--mobile__dropdown__item')
const mobileMenuTitle = document.querySelectorAll('.nav--mobile__dropdown__item__title')
const mobileMenuLinks = document.querySelectorAll('.nav--mobile__dropdown__item__link')
const mobileMenuBtns = document.querySelectorAll('.header__btn--nav')

//functions
const handleBurgerBtn = e => {
	burgetBtn.classList.toggle('active')
	mobileMenu.classList.toggle('active')
}
const handleMobileMenuItem = e => {
	clickedMenuItem = e.target.closest('.nav--mobile__dropdown__item')
	if (clickedMenuItem.classList.contains('active')) {
		mobileMenuItems.forEach(item => {
			item.classList.remove('active')
		})
	} else {
		mobileMenuItems.forEach(item => {
			item.classList.remove('active')
		})
		clickedMenuItem.classList.add('active')
	}
}
const handleCloseMobileMenu = () => {
	;[burgetBtn, mobileMenu, ...mobileMenuItems].forEach(item => {
		item.classList.remove('active')
	})
}

//event listeners
burgetBtn.addEventListener('click', handleBurgerBtn)

mobileMenuTitle.forEach(title => {
	title.addEventListener('click', handleMobileMenuItem)
})

const closeMenuStarters = [...mobileMenuLinks, ...mobileMenuBtns]
closeMenuStarters.forEach(item => {
	item.addEventListener('click', handleCloseMobileMenu)
})
