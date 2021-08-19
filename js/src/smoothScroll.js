const smoothScroll = () => {	

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});

	const anchorSmoothScroll = document.querySelector('.smooth-scroll');
	anchorSmoothScroll.classList.add('js-elem-hide');

	document.addEventListener('scroll', () => {
		const trackBlock = document.getElementById('benefits'),
    requiredScrollValue = trackBlock.offsetTop;

		if (window.pageYOffset > requiredScrollValue) {
			anchorSmoothScroll.classList.remove('js-elem-hide');
		} else {
			anchorSmoothScroll.classList.add('js-elem-hide');
		}
	});
};

export default smoothScroll;