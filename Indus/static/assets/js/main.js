/*--------------- TABLE OF CONTENTS -------------

01. Preloader Js
02. Positon Sticky Js
03. Data BG Js
04. Header Sticky Js
05. Search Bar Js
06. Hamburger Menu Js
07. Nice Select Js
08. Hero Slider Js
09. Blog Slider Js
10. Marquee Slider Js
11. Brand Slider Js
12. Project Slider Js
13. Service Slider Js
14. Team Slider Js
15. Testimonial Slider Js
16. Rating Js Js
17. Fun Fact Js
18. Project 3 Active Js
19. Circle Proggess Bar Js
20. VenoBox Js
21. Mouse Js
22. Backtotop Js
23. Skill  Progress Bar Js
24. Price box Js
25. Gsap Js

-------------------------------------------------*/

(function ($) {
	"use strict";

	/* ------------- Preloader Js -------------*/

	var wind = $(window);
	wind.on("load", function () {
		$(".preloader").fadeOut(600);
	});

	/* ------------- Positon Sticky Js -------------*/

	function initStickySidebar() {
		if (window.innerWidth >= 992) {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			const startPoint = window.innerWidth >= 992 ? 100 : 120;
			gsap.to(".tj-sticky", {
				scrollTrigger: {
					trigger: ".tj-sticky",
					start: `top ${startPoint}`,
					end: `bottom ${startPoint}`,
					pin: true,
					scrub: 1,
				},
			});
		}
	}
	initStickySidebar();
	window.addEventListener("resize", () => {
		initStickySidebar();
	});

	/* ------------- Data BG Js -------------*/

	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});
	$("[data-mask]").each(function () {
		var $this = $(this),
			$mask_image = $this.data("mask");
		$this.css("mask-image", "url(" + $mask_image + ")");
	});

	/* ------------- Header Sticky Js -------------*/

	var lastScrollTop = "";
	function stickyMenu($targetMenu, $toggleClass) {
		var st = $(window).scrollTop();
		if ($(window).scrollTop() > 500) {
			if (st > lastScrollTop) {
				$targetMenu.removeClass($toggleClass);
			} else {
				$targetMenu.addClass($toggleClass);
			}
		} else {
			$targetMenu.removeClass($toggleClass);
		}

		lastScrollTop = st;
	}

	$(window).on("scroll", function () {
		if ($(".tj-header-area").length) {
			stickyMenu($(".header-sticky"), "sticky");
		}
	});

	/* ------------- Search Bar Js -------------*/

	$(".header_search").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("opened");
	});
	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("opened");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("opened");
	});

	/* ------------- Hamburger Menu  Js -------------*/

	$("#main-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="tji-angle-down"></i>'],
	});

	$(".menu_btn").on("click", function () {
		$(".hamburger-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".hamburgerCloseBtn").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	/* ------------- Nice Select  Js -------------*/

	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	/* ------------- Hero Slider  Js -------------*/

	if ($(".full-slider-active").length > 0) {
		let full_screen = new Swiper(".full-slider-active", {
			speed: 2000,
			effect: "fade",
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				prevEl: ".tj-btn-prev",
				nextEl: ".tj-btn-next",
			},
			pagination: {
				el: ".tj-sw-pagination",
				type: "fraction",
				clickable: true,
				renderFraction: function (currentClass, totalClass) {
					return (
						'<span class="' +
						currentClass +
						'"></span>' +
						' <span class="dash"><span class="dash-inner"></span></span> ' +
						'<span class="' +
						totalClass +
						'"></span>'
					);
				},
			},
			on: {
				init: function () {
					updateDashWidth(this);
				},
				slideChange: function () {
					updateDashWidth(this);
				},
			},
		});

		function updateDashWidth(swiper) {
			const dashInner = swiper.el.querySelector(".dash-inner");
			if (dashInner) {
				const realIndex = swiper.realIndex;
				const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
				const progressPercent = ((realIndex + 1) / totalSlides) * 100;

				dashInner.style.width = progressPercent + "%";
			}
		}
	}

	/* ------------- Blog Slider  Js -------------*/

	if ($(".blog-standard-slider").length > 0) {
		let blog = new Swiper(".blog-standard-slider", {
			slidesPerView: 1,
			loop: true,
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});
	}

	/* ------------- Marquee Slider  Js -------------*/

	if ($(".marquee-slider").length > 0) {
		let marquee = new Swiper(".marquee-slider", {
			slidesPerView: "auto",
			spaceBetween: 0,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 4000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	/* ------------- Brand Slider  Js -------------*/

	if ($(".brand-slider-1").length > 0) {
		let brand = new Swiper(".brand-slider-1", {
			slidesPerView: "auto",
			spaceBetween: 30,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2.5,
				},
				768: {
					slidesPerView: 3.3,
				},
				992: {
					slidesPerView: 4.5,
				},
				1200: {
					slidesPerView: 5.2,
				},
				1400: {
					slidesPerView: 6,
				},
			},
		});
	}
	if ($(".brand-slider-2").length > 0) {
		let brand = new Swiper(".brand-slider-2", {
			slidesPerView: "auto",
			spaceBetween: 30,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2.5,
				},
				768: {
					slidesPerView: 3.3,
				},
				992: {
					slidesPerView: 4.5,
				},
				1200: {
					slidesPerView: 5.2,
				},
				1400: {
					slidesPerView: 6,
				},
			},
		});
	}

	/* ------------- Project Slider  Js -------------*/

	if ($(".project-slider").length > 0) {
		let project = new Swiper(".project-slider", {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			speed: 2000,
			arrow: false,
			breakpoints: {
				375: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
		});
	}

	/* ------------- Service Slider  Js -------------*/

	if ($(".tj-service-slider").length > 0) {
		let service = new Swiper(".tj-service-slider", {
			slidesPerView: 3,
			spaceBetween: 24,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 8500,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			pagination: {
				el: ".service-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	/* ------------- Team Slider Js -------------*/

	if ($(".tj-team-slider").length > 0) {
		let team = new Swiper(".tj-team-slider", {
			slidesPerView: 4,
			spaceBetween: 24,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 8500,
			},
			pagination: {
				el: ".service-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				460: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
			},
		});
	}

	/* ------------- Testimonial Slider Js -------------*/

	if ($(".tj-testimonial-slider").length > 0) {
		let testimonial = new Swiper(".tj-testimonial-slider", {
			slidesPerView: 3,
			spaceBetween: 24,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 8500,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
			},
		});
	}
	if ($(".tj-testimonial-slider-two").length > 0) {
		let testimonial2 = new Swiper(".tj-testimonial-slider-two", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});
	}
	if ($(".testimonial-slider-two").length > 0) {
		let testimonial = new Swiper(".testimonial-slider-two", {
			slidesPerView: 3,
			spaceBetween: 65,
			centeredSlides: true,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 2000,
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1.5,
				},
				768: {
					slidesPerView: 1.5,
				},
				992: {
					slidesPerView: 1.5,
				},
				1200: {
					slidesPerView: 1.9,
				},
				1440: {
					slidesPerView: 2.9,
				},
			},
		});
	}

	/* ------------- Rating Js -------------*/

	if ($(".fill-ratings span").length > 0) {
		var star_rating_width = $(".fill-ratings span").width();
		$(".star-ratings").width(star_rating_width);
	}

	/* ------------- Fun Fact Js -------------*/

	if ($(".odometer").length > 0) {
		$(".odometer").appear(function () {
			var odo = $(".odometer");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
	}

	/* ------------- Project 3 Active Js -------------*/

	$(".project-style-3").on("mouseenter", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});

	const headers = document.querySelectorAll(".header");
	headers.forEach(header => {
		header.addEventListener("click", () => {
			const caseItem = header.parentElement;
			const isActive = caseItem.classList.contains("active");

			// Close all sections
			document.querySelectorAll(".case-item").forEach(sec => {
				sec.classList.remove("active");
				sec.querySelector(".icon").classList.remove("active");
			});

			// Toggle current section
			if (!isActive) {
				caseItem.classList.add("active");
				header.querySelector(".icon").classList.add("active");
			}
		});
	});

	/* ------------- Circle Proggess Bar Js -------------*/

	if (typeof $.fn.knob != "undefined") {
		$(".knob").each(function () {
			var $this = $(this),
				knobVal = $this.attr("data-rel");

			$this.knob({
				draw: function () {
					$(this.i).val(this.cv + "%");
				},
			});

			$this.appear(
				function () {
					$({
						value: 0,
					}).animate(
						{
							value: knobVal,
						},
						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this.val(Math.ceil(this.value)).trigger("change");
							},
						}
					);
				},
				{
					accX: 0,
					accY: -150,
				}
			);
		});
	}

	/* ------------- VenoBox Js -------------*/

	if ($(".ig-gallery").length > 0) {
		new VenoBox({
			selector: ".ig-gallery",
			numeration: true,
			spinner: "pulse",
		});
	}
	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			spinner: "pulse",
		});
	}

	/* ------------- Mouse Js -------------*/

	$(".slider-drag").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});
	$(".slider-drag").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	$("a,.sub-menu").on("mouseenter", function () {
		$(".mouseCursor").addClass("d-none");
	});
	$("a,.sub-menu").on("mouseleave", function () {
		$(".mouseCursor").removeClass("d-none");
	});

	$(".view-project").on("mouseenter", function () {
		$(".mouseCursor").addClass("project-cursor");
	});
	$(".view-project").on("mouseleave", function () {
		$(".mouseCursor").removeClass("project-cursor");
	});

	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
					$("body").on("mouseenter", "button, a, .cursor-pointer", function () {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
					}),
					$("body").on("mouseleave", "button, a, .cursor-pointer", function () {
						($(this).is("a", "button") &&
							$(this).closest(".cursor-pointer").length) ||
							(e.classList.remove("cursor-hover"),
							t.classList.remove("cursor-hover"));
					}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();

	/* ------------- Backtotop Js -------------*/

	function back_to_top() {
		var btn = $("#back_to_top");
		var btn_wrapper = $(".back-to-top-wrapper");
		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 300) {
				btn_wrapper.addClass("back-to-top-btn-show");
			} else {
				btn_wrapper.removeClass("back-to-top-btn-show");
			}
		});
		btn.on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "300");
		});
	}
	back_to_top();

	/* ------------- Skill  Progress Bar Js -------------*/

	const progressBarController = () => {
		const progressContainers = document.querySelectorAll(".tj-progress");
		if (progressContainers?.length) {
			progressContainers.forEach(progressContainer => {
				const targetedProgressBar =
					progressContainer.querySelector(".tj-progress__bar");
				const completedPercent =
					parseInt(targetedProgressBar.getAttribute("data-perchant"), 10) || 0;

				gsap.to(targetedProgressBar, {
					width: `${completedPercent}%`,
					ease: "power2.out",
					duration: 1,
					scrollTrigger: {
						trigger: progressContainer,
						start: "top 90%",
						end: "top 30%",
					},
					onUpdate: function () {
						let progressValue = Math.round(this.progress() * 100);
						let displayPercent = Math.round(
							(completedPercent * progressValue) / 100
						);

						const percentageText = progressContainer.querySelector(
							".tj-progress__perchant"
						);
						if (percentageText) {
							percentageText.textContent = displayPercent + "%";
						}
					},
				});
			});
		}
	};
	progressBarController();

	/* ------------- Price box Js -------------*/

	let year = $(".yearly");
	let month = $(".monthly");

	let price = $(".price-number");
	let period = $(".period");

	year.on("click", function () {
		$(this).addClass("active");
		month.removeClass("active");
		price.each(function () {
			$(this).text($(this).data("year-price"));
		});
		period.each(function () {
			$(this).text($(this).data("year-period"));
		});
	});
	month.on("click", function () {
		$(this).addClass("active");
		year.removeClass("active");
		price.each(function () {
			$(this).text($(this).data("month-price"));
		});
		period.each(function () {
			$(this).text($(this).data("month-period"));
		});
	});

	/* ------------- Gsap Js -------------*/

	gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

	gsap.config({
		nullTargetWarn: false,
	});

	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	/* Text Effect Animation */
	if ($(".text-anim").length) {
		let staggerAmount = 0.03,
			translateXValue = 20,
			delayValue = 0.1,
			easeType = "power2.out",
			animatedTextElements = document.querySelectorAll(".text-anim");

		animatedTextElements.forEach(element => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
			gsap.from(animationSplitText.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}

	/* Service js */
	let device_width = window.innerWidth;
	const serviceStack = gsap.utils.toArray(".service-stack");
	if (serviceStack.length > 0) {
		if (device_width > 767) {
			serviceStack.forEach(item => {
				gsap.to(item, {
					opacity: 0,
					scale: 0.9,
					y: 50,
					scrollTrigger: {
						trigger: item,
						scrub: true,
						start: "top top",
						pin: true,
						pinSpacing: false,
						markers: false,
					},
				});
			});
		}
	}

	/* Marque js */
	gsap.to(".marquee-slider-wrapper-two", {
		scrollTrigger: {
			trigger: ".tj-project-section-two",
			start: "top center-=200",
			pin: ".marquee-slider-wrapper-two",
			end: "bottom bottom-=200",
			markers: false,
			pinSpacing: false,
			scrub: 1,
		},
	});

	/* Animated Wow Js */
	new WOW().init();
})(jQuery);
