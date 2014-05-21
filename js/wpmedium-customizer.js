jQuery( document ).ready( function( $ ) {

	// Allow real-time updating of the theme customizer
	wp.customize('blogname', function(value) {
		value.bind(function(to) {
			$('.site-title').html(to);
		});
	});
	wp.customize('blogdescription', function(value) {
		value.bind(function(to) {
			$('.site-description').html(to);
		});
	});
	wp.customize('wpmedium_menu_background', function( value ) {
		value.bind(function(to) {
			$('.site-menu').css({backgroundColor: to});
		});
	});
	wp.customize('wpmedium_w_background', function( value ) {
		value.bind(function(to) {
			$('#WP').css({background: to});
		});
	});
	wp.customize( 'wpmedium_text', function( value ) {
		value.bind(function(to) {
			$('body, .site').css({color: to});
		});
	});
	wp.customize( 'wpmedium_link', function( value ) {
		value.bind(function(to) {
			$('.hentry a:link, .hentry a:visited').css({color: to});
		});
	});
	wp.customize( 'wpmedium_link_hover', function( value ) {
		value.bind(function(to) {
			$('.hentry a').hover(
				function () {
					$(this).css({color: to});
				}, 
				function () {
					$(this).css({color: ''});
				}
			);
		});
	});
	wp.customize( 'wpmedium_header_overlay', function( value ) {
		value.bind(function(to) {
			$('.site-header-overlay').css({background: to});
		});
	});
	wp.customize( 'wpmedium_header_sidebar', function( value ) {
		value.bind(function(to) {
			$('.header-sidebar').css({color: to});
		});
	});
	wp.customize( 'wpmedium_header_title', function( value ) {
		value.bind(function(to) {
			$('.entry-header .entry-title a').css({color: to});
		});
	});
	wp.customize( 'wpmedium_header_title_hover', function( value ) {
		value.bind(function(to) {
			$('.entry-header .entry-title a').hover(
				function () {
					$(this).css({color: to});
				}, 
				function () {
					$(this).css({color: ''});
				}
			);
		});
	});
	wp.customize( 'wpmedium_menu_background', function( value ) {
		value.bind(function(to) {
			$('.site-menu').css({backgroundColor: to});
		});
	});
	wp.customize( 'wpmedium_footer', function( value ) {
		value.bind(function(to) {
			$('.site-footer').css({color: to});
		});
	});
	wp.customize( 'wpmedium_footer_background', function( value ) {
		value.bind(function(to) {
			$('.footer-sidebar').css({background: to});
		});
	});
	wp.customize( 'wpmedium_footer_widgettitle', function( value ) {
		value.bind(function(to) {
			$('.footer-inner .widgettitle').css({color: to});
		});
	});




    /*wp.customize( 'debut_link_color', function( value ) {
        value.bind( function( to ) {
            $('body').css('border-color', to );
            $('a').not('.main-navigation .current-menu-item > a').css('color', to );
            $('.main-navigation .current-menu-item > a').css({
            	'background-color': to,
            	'color': '#fff'
            });
            $('.menu li > a').hover(
				function () {
					$(this).css({
						'background-color': to,
						'color': '#fff',
						'text-shadow': '0 1px 0 rgba(0,0,0,.8)'
					});
				}, 
				function () {
					$(this).css({
						'background-color': '#efefef',
						'color': to,
						'text-shadow': 'none'
					});
					$('.main-navigation .current-menu-item > a').css({
		            	'background-color': to,
		            	'color': '#fff'
		            });
					$('.sub-menu li a').css({
						'background-color': '#ddd',
						'color': to,
						'text-shadow': 'none'
		            });
				}
			);
            $('.sub-menu').hover(
				function () {
					$(this).prev().css({
						'background-color': '#ddd'
					});
				}, 
				function () {
					$(this).prev().css({
						'background-color': '#efefef'
					});
				}
			);
        });
    });*/

});