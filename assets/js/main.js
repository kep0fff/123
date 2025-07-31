const container = document.querySelector('.body'); 
function scaleContainer() {
	const screenWidth = window.innerWidth;
	const scale = screenWidth / 1140;

	container.style.transform = 'scale(' + scale + ')';
	container.style.transformOrigin = 'top left'; 
	container.style.width = 1110 + 'px';  
	container.style.height = 'auto';
}

if (screen.width > screen.height) {
	scaleContainer();
	window.addEventListener('resize', scaleContainer);
}
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');
const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');

burgerOpen.addEventListener('click', () => {
	sidebar.classList.add('active');
	overlay.classList.add('active');
	document.body.style.overflow = 'hidden';
});

burgerClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
	sidebar.classList.remove('active');
	overlay.classList.remove('active');
	document.body.style.overflow = '';
}
