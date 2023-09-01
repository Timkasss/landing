function openread() {
	let articleLink = document.querySelector('.about_text_link');
	let article = document.querySelectorAll('.about_text_p');

	articleLink.addEventListener('click', (e) => {
		e.preventDefault();
		article.forEach(element => {
			element.style.display = "block";
			articleLink.style.display = "none";
		});

	})
};

openread();

function openOur() {
	let viewbuttomlink = document.querySelector('.view_buttom_link');
	let ourgallery = document.querySelectorAll('.our_galery_img');
	let viewbuttom = document.querySelector('.view_buttom');
	let count = 4;
	viewbuttomlink.addEventListener('click', (e) => {
		e.preventDefault();
		if (count < ourgallery.length) {
			ourgallery[count].style.display = "block";
			count += 1;
			console.log(count);
		} else {
			viewbuttom.style.display = "none";
		}
	})
};
openOur();

function headeTeleport() {
	let heart = document.querySelector('.footer_right');
	let container = document.querySelector('.footer_left');
	let home = document.querySelector('.footer__container');

	let footerlogo = document.querySelector('.footer_logo');
	let footermiddle = document.querySelector('.footer_middle');
	let footermiddlesocial = document.querySelector('.footer_middle_social');

	window.addEventListener('resize', function (event) {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

		if (viewport_width <= 768) {
			container.insertBefore(heart, container.children[2]);
		}
		else {
			home.insertBefore(heart, home.children[3]);
		}

		if (viewport_width <= 500) {
			footerlogo.insertBefore(footermiddlesocial, footerlogo.children[1]);
		}
		else {
			footermiddle.insertBefore(footermiddlesocial, footermiddle.children[2]);
		}

	})

}
headeTeleport();

new Swiper('.say_slider', {
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 1,
	//slidesPerGroup: 4
	spaceBetween: 30,
	breakpoints: {
		1000: {
			slidesPerView: 2,
		}

	}
});

function openBurger() {
	const body = document.querySelector('.body_menu');
	const burger = document.querySelector('.header_burger');

	burger.addEventListener('click', () => {
		body.classList.toggle('burger_active');
	})
}
openBurger()

function navigation() {
	const item = document.querySelectorAll('.header_menu_item');
	const sections = {
		'services': document.querySelector('.our_servis'),
		'portfolio': document.querySelector('.our_portfolio'),
		'pricing': document.querySelector('.pricing')
	};
	item.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			const targetSection = element.getAttribute('num-item');
			const targetElement = sections[targetSection];

			// Сохраняем текущую позицию прокрутки

			// Прокручиваем к разделу с плавной прокруткой
			targetElement.scrollIntoView({ behavior: 'smooth' });

			// Добавляем слушатель на прокрутку, чтобы восстановить позицию
			// let a = element.getAttribute('num-item');
			// switch (a) {
			// 	case 'services':
			// 		servis.scrollIntoView({ behavior: 'smooth' });
			// 		console.log(a)
			// 		break;
			// 	case 'portfolio':
			// 		portfolio.scrollIntoView({ behavior: 'smooth' });
			// 		break;
			// 	case 'pricing':
			// 		pricing.scrollIntoView({ behavior: 'smooth' });
			// 		break;

			// }
		});
	});

}
navigation()


function scrolHeader() {
	const header = document.querySelector('.header__container');
	header.style.height = '101px';
	window.addEventListener('scroll', () => {
		header.style.height = '70px';
		if (window.scrollY == 0) {
			header.style.height = '101px';
		}
	})

}
scrolHeader()