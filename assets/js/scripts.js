$(document).ready(function(){
	
	
	/*============================================
	Preloader
	==============================================*/
	if($('#preloader').length){
		$(window).load(function(){
			$('#preloader').addClass('fade-out').delay(600).fadeOut(600,function(){startAnimations();});
		})
	}
	
	else startAnimations();
	
	/*============================================
	Waypoints Animations
	==============================================*/
	function startAnimations(){
		
		$('.scrolling-animation').waypoint(function(){
			$(this).addClass('in');
		},{offset:'95%'});
		
	}
	
	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
	
	/*==============================================
	Transparent Navbar
	=============================================== */
	if($('.main-nav').is('.navbar-transparent')){
		if($(window).scrollTop() > 10){
				$('.main-nav').removeClass('navbar-transparent');
			}else{
				$('.main-nav').addClass('navbar-transparent');
			}
		$(window).scroll( function() {
			if($(window).scrollTop() > 10){
				$('.main-nav').removeClass('navbar-transparent');
			}else{
				$('.main-nav').addClass('navbar-transparent');
			}
			
		});
	}

	/*==============================================
	ScrollTo Links
	=============================================== */
	$('a.scrollto').click(function(e){
		e.preventDefault();
		var target =$(this).attr('href');
		
		
		$('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600,'easeInOutCubic');
		
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
	
	$('.scroll-on-show').on('show.bs.collapse',function(){
		$target = $(this);
		setTimeout(function(){
			$('html, body').stop().animate({scrollTop: $target.offset().top}, 800,'easeInOutCubic');
		},100);	
	})
	
	$('.scroll-on-show').on('shown.bs.collapse',function(){
		$(window).trigger('resize');
	})
	$('.scroll-on-show').on('hidden.bs.collapse',function(){
		$(window).trigger('resize');
	})
	/*==============================================
	Devices Tabs Functions
	=============================================== */
	
	$('.devices-tabs li').click(function(){
	
		if($(this).is('.active')) return false;
	
		$(this).parents('.devices-tabs').removeClass('show-rotate');
		if($(this).is('.show-rotate')) $(this).parents('.devices-tabs').addClass('show-rotate');
		$('.rotate-button').removeClass('fa-rotate-left').addClass('fa-rotate-right');
		
		
		setTimeout(function(){
			$(window).trigger('resize');
			$('.rotate-screen').removeClass('rotate-screen');
			$('.devices-tab-content .tab-pane.active .allow-rotate .img-portrait').show();
			$('.devices-tab-content .tab-pane.active .allow-rotate .img-landscape').hide();
		},200);
	});
	
	$('.rotate-button').click(function(){
		if($(this).is('.fa-rotate-right')){
			$(this).removeClass('fa-rotate-right').addClass('fa-rotate-left');
			$('.devices-tab-content .tab-pane.active .allow-rotate').addClass('rotate-screen');
		}else{
			$(this).removeClass('fa-rotate-left').addClass('fa-rotate-right');
			$('.devices-tab-content .tab-pane.active .allow-rotate').removeClass('rotate-screen');
		}
		
		setTimeout(function(){
			if($('.devices-tab-content .tab-pane.active .allow-rotate').is('.rotate-screen')){
				$('.devices-tab-content .tab-pane.active .allow-rotate .img-portrait').hide();
				$('.devices-tab-content .tab-pane.active .allow-rotate .img-landscape').show();
			}else{
				$('.devices-tab-content .tab-pane.active .allow-rotate .img-landscape').hide();
				$('.devices-tab-content .tab-pane.active .allow-rotate .img-portrait').show();
			}
			$(window).trigger('resize');
		},450);
		
		$('.devices-tab-content .tab-pane.active .rotation-wrapper').css({'overflow':'hidden'});
		setTimeout(function(){
			$('.devices-tab-content .tab-pane.active .rotation-wrapper').css({'overflow':'visible'});
		},600);
		
		setTimeout(function(){
			$(".overflow-scrollbar").getNiceScroll().resize();
		},500);
	});
	
	$('.rotate-button').hover(
		function(){
			if($('.devices-tab-content .tab-pane.active .flexslider').length){
				$('.devices-tab-content .tab-pane.active .flexslider').flexslider('pause');
			}
		},
		function(){
			if($('.devices-tab-content .tab-pane.active .flexslider').length){
				$('.devices-tab-content .tab-pane.active .flexslider').flexslider('play');
			}
		}
	
	);
	
	/*==============================================
	Custom Scrollbar
	=============================================== */
	
	$('.overflow-scrollbar').each(function(){
		var $elem=$(this),
			$scrollelem = $(this).find('.scroll-content');
			
		var cursorColor = $('<div class="bg-color hidden remove-it"></div>').appendTo('body').css('background-color');
		$('.remove-it').remove();
		
		$elem.niceScroll($scrollelem,{
			background:"#eee",
			cursorwidth:10,
			cursorborderradius:'10px',
			cursorborder:"",
			cursorcolor:cursorColor,
			boxzoom:false,
			cursoropacitymin:.8,
			bouncescroll:true,
			horizrailenabled:false
		});
		
	})
	
	/*==============================================
	Parallax Effects
	=============================================== */
	$('.overlay-on-scroll').append('<span class="overlay"></span>');
	
	$('.window-height').height($(window).height()+50);
	$(window).resize( function() {
		$('.window-height').height($(window).height()+50);
	})
	
	$(window).scroll( function() {
		var st = $(window).scrollTop(),
			wh = $(window).outerHeight(),
			sf = Math.min(0.8*st/wh,.95);
		
		$('.overlay-on-scroll .overlay').css({ 'opacity' : sf});
		
		$('.no-touch .parallax-move-down').css({ 'transform' : 'translateY('+st/1.5+'px)'});
		
		if($(window).scrollTop() > 50){
			$('.overlay-on-scroll .overlay').show();
		}else{
			$('.overlay-on-scroll .overlay').hide();
		}
		
	});
	
	var st = $(window).scrollTop(),
		wh = $(window).outerHeight(),
		sf = Math.min(st/wh,.5);
		
	$('.overlay-on-scroll .overlay').css({ 'opacity' : sf});
		
	if($(window).scrollTop() > 50){
		$('.overlay-on-scroll .overlay').show();
	}else{
		$('.overlay-on-scroll .overlay').hide();
	}
	
	$(window).load(function(){
		if($('.parallax-zoom-out').length && ($('.parallax-zoom-out').outerHeight()+$('.parallax-zoom-out').offset().top < $(window).outerHeight())){
		
			$(window).scroll( function() {
				var st = $(window).scrollTop(),
					wh = $(window).outerHeight(),
					sf = Math.max((wh-st/1.5)/wh,0);
				
				$('.no-touch .parallax-zoom-out').css({ 'transform' : 'translateY('+st/3+'px) scale('+sf+')','opacity':Math.max((wh-st*1.7)/wh,0)});
				
			});
		
		}
	});
	
	$(window).load(function(){
		
		if((!Modernizr.touch) && ( $(window).width() > 1024) ){
			$(window).stellar({
				horizontalScrolling: false,
				responsive:true
			});
		}
	});
	
	$(window).resize(function(){
		stellarRefresh();
	})
	
	/*============================================
	Refresh Parallax Backgrounds
	==============================================*/
	function stellarRefresh(){
		setTimeout(function(){
			$(window).stellar('refresh');
		},1000);
	}
	
	/*============================================
	Isotope
	==============================================*/
	$(window).load(function(){
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item'
			  },
			transitionDuration: '0.6s'
		});
		
		$grid.on( 'arrangeComplete',
		  function( event, filteredItems ) {
			$(window).trigger('resize');
		  }
		);
		
	});
	
	/*============================================
	Isotope Filters
	==============================================*/
	$('.filter-buttons').on( 'click', '.filter-button', function() {
		
		$('.filter-button').removeClass('active');
		$(this).addClass('active');
		
		var filterValue = $(this).attr('data-filter'),
			targetGrid = $(this).parents('.filter-buttons').data('target') ? $(this).parents('.filter-buttons').data('target') : '.grid';
			
		$(targetGrid).isotope({ filter: filterValue });
	});

	
	/*============================================
	Progress Charts
	==============================================*/
	$('.progress-circle').each(function(){
	
		var size = 150;
		if ($(this).is('.progress-sm')) size = 120;
		if ($(this).is('.progress-lg')) size = 200;
	
		var barColor = $('<div class="bg-color hidden remove-it"></div>').appendTo('body').css('background-color');
		$('.remove-it').remove();
		
		if ($(this).is('.progress-gray')) barColor = '#f5f5f5';
		if ($(this).is('.progress-dark')) barColor = '#333';
		if ($(this).is('.progress-light')) barColor = '#fff';
	
		var speed = 2500;
		
		if($(this).find('.countTo').length){
			var speed = $(this).find('.countTo').data('speed');
		}
		
		var lineWidth = $(this).is('.progress-bold') ? 12 : 7;
	
		if($(this).is('.start-on-scroll')){
			$(this).waypoint(function(){
				
			$(this).easyPieChart({
					size:size,
					animate: speed,
					lineCap:'cap',
					scaleColor: false,
					barColor: barColor,
					trackColor: 'transparent',
					lineWidth: lineWidth
			});
			
			$(this).find('.countTo').removeClass('countTo').countTo();
			
			},{offset:'95%'});
	
		}else {
			
			$(this).easyPieChart({
					size:size,
					animate: speed,
					lineCap:'cap',
					scaleColor: false,
					barColor: barColor,
					trackColor: 'transparent',
					lineWidth: lineWidth
			});
			
			$(this).find('.countTo').removeClass('countTo').countTo();
		}
	});
	
	/*============================================
	Twenty Twenty
	==============================================*/
	$(window).load(function(){
	  $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.3});
	  $(document).on('mousedown','.twentytwenty-handle',function(){
		  $('.twentytwenty-handle').addClass('remove-poi');
		  
	  })
	});
	
	
	
	/*============================================
	Flexslider
	==============================================*/
	
	$('.flexslider:not(.dynamic-slides)').each(function(){
			
		var sliderSpeed = $(this).data('speed') ? $(this).data('speed') : 5000,
			autoplay = $(this).is('.pause') ? false : true,
			bulletNav = $(this).is('.no-bullet-nav') ? false : true,
			directionNav = $(this).is('.no-direction-nav') ? false : true,
			animation = $(this).is('.effect-slide') ? 'slide' : 'fade';
	
		$(this).flexslider({
			prevText: '<i class="fa fa-angle-left"></i>',
			nextText: '<i class="fa fa-angle-right"></i>',
			animation: animation,
			pauseOnHover: true,
			pauseOnAction: false,
			slideshow: autoplay,
			slideshowSpeed: sliderSpeed,
			animationSpeed: 500,
			controlNav: bulletNav,
			directionNav: directionNav,
		});
	})
	
	if($('.synchronized-sliders .macbook-mockup-content.flexslider').length){
		$('.synchronized-sliders .macbook-mockup-content.flexslider').data('flexslider').vars.before = function(slider) {

			$('.synchronized-sliders .flexslider:not(.macbook-mockup-content)').each(function(){
				$(this).flexslider(slider.animatingTo);
			})

		}
	}
	
	/*============================================
	Twitter
	==============================================*/
	
	var tweetsLength = $('#footer-twitter').data('tweets-length'),
		widgetID = $('#footer-twitter').data('widget-id');
		
	var configTweets = {
	  "id": widgetID,
	  "domId": '',
	  "maxTweets": tweetsLength,
	  "enableLinks": true,
	  "showUser": false,
	  "showTime": true,
	  "dateFunction": '',
	  "showRetweet": false,
	  "customCallback": handleTweets,
	  "showInteraction": false
	};
	
	twitterFetcher.fetch(configTweets);

	function handleTweets(tweets){
	
		var x = tweets.length,
			n = 0,
			tweetsHtml = '<ul class="slides">';
			
		while(n < x) {
			tweetsHtml += '<li>' + tweets[n] + '</li>';
			n++;
		}
		
		tweetsHtml += '</ul>';
		
		$('#footer-twitter').html(tweetsHtml);
	
		$('#footer-twitter').each(function(){
			
			var sliderSpeed = $(this).data('speed') ? $(this).data('speed') : 5000,
				autoplay = $(this).is('.pause') ? false : true,
				bulletNav = $(this).is('.no-bullet-nav') ? false : true,
				directionNav = $(this).is('.no-direction-nav') ? false : true,
				animation = $(this).is('.effect-slide') ? 'slide' : 'fade';
		
			$(this).flexslider({
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				animation: animation,
				pauseOnHover: true,
				pauseOnAction: false,
				slideshow: autoplay,
				slideshowSpeed: sliderSpeed,
				animationSpeed: 500,
				controlNav: bulletNav,
				directionNav: directionNav,
			});
		})
	}
	
	/*============================================
	Contact Form
	==============================================*/
	
	$(document).on('focus','.inputError',function(){
		$(this).removeClass('inputError');
	})
	
	$('.contact-form').submit(function() {
			
		$form = $(this);
		
		if($form.hasClass('sending')){
			return false;
		}
		
		var hasError = false,
			emptyFields = false;
		
		$form.find('.form-success, .form-error').hide();
		
		$form.find('.requiredField').each(function() {
			$(this).removeClass('inputError');
			if($.trim($(this).val()) == '') {
				$(this).addClass('inputError');
				$form.find('.empty-fields').show();
				emptyFields = true;
				hasError = true;
			}
		});
		
		if(!emptyFields){
			var $mailInput = $form.find("input[type='email']"),
				emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,8})?$/;
			
				if(!emailReg.test($.trim($mailInput.val()))) {
					$mailInput.addClass('inputError');
					$form.find('.email-error').show();
					hasError = true;
				}
		}
		
		if(!hasError){
			$form.addClass('sending');
			var formInput = $form.serialize();
			$.post($form.attr('action'),formInput, function(data){
				$form.find('.form-success').show();
				setTimeout(function(){
					$form.find('.form-success').fadeOut();
					$form.removeClass('sending');
				},2000);
				
				$form[0].reset();
			});
		}
		
		return false;	
	});
	
})