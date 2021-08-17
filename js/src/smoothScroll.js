const smoothScroll = target => {	

	document.getElementById(target).scrollIntoView({
		behavior: 'smooth',
	});

};

export default smoothScroll;