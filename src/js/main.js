
const blogSlider = new Swiper('.blog__slider', {
	slidesPerView: 3,
	spaceBetween: 48,
	navigation: {
		nextEl: '.blog__slider-button-next',
		prevEl: '.blog__slider-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 24
		},
		550: {
			slidesPerView: 2,
			spaceBetween: 24
		}
	}
});




const reviewSlider = new Swiper('.reviews__slider', {
	spaceBetween: 24,
	slidesPerView: 1,
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	}
});

const clientsSlider = new Swiper('.clients__items', {
	slidesPerView: 3,
	navigation: {
		nextEl: '.clients-button-next',
		prevEl: '.clients-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 24
		},
		760: {
			slidesPerView: 2,
			spaceBetween: 24
		}
	}
});


document.querySelector('.burger').addEventListener('click', () => {
	document.querySelector('.header__nav').classList.add('active')
	document.querySelector('body').style.overflow = 'hidden'
})


document.querySelector('.header__nav-item-btn').addEventListener('click', () => {
	document.querySelector('.header__nav').classList.remove('active')
	document.querySelector('body').style.overflow = 'auto'
})


