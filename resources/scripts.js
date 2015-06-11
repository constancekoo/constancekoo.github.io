$(document).ready(function() {
	$('#background img').fadeIn(1200);
	$('#slideshow').fadeIn(1200);
});
$(function () {
	$('#top .desktop li a, .pop ul li a').each(function (index) {
		if (this.href.trim() == window.location) $(this).addClass("active-link");
	});
	$('.carousel').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		fade: true,
		arrows: false,
		variableHeight: true
	});
    $('.selector').each(function(e) {
        var selector = $(this);
        var pop = selector.next();
        var container = pop.parent();
        selector.on('click', function(e) {
            e.stopPropagation();
            pop.toggleClass("active");
            container.toggleClass("active");
            $(".pop").not(pop).removeClass("active");
            $(document).on('click', function(e) {
                if ($(e.target).closest('.pop').length === 0) {
                    pop.removeClass("active");
                    container.removeClass("active")
                }
            });
            $(document).scroll(function() {
                pop.removeClass("active");
                container.removeClass("active");
                selector.blur()
            });
            e.preventDefault()
        });
        pop.children("a").focus(function(e) {
            $(this).parent().addClass("active");
            $(this).parent().parent().addClass("active");
            e.preventDefault()
        });
        pop.children("a").blur(function(e) {
            $(this).parent().removeClass("active");
            $(this).parent().parent().removeClass("active");
            e.preventDefault()
        });
    });
    $('.read-more').each(function(e) {
	    var more = $(this);
	    more.on('click', function(e) {
            e.stopPropagation();
            $(this).parents('.first').next().fadeIn();
            $(this).parents('h3').fadeOut();
            e.preventDefault();
        });
	});
    $('.back').each(function(e) {
	    var back = $(this);
	    back.on('click', function(e) {
            e.stopPropagation();
            $(this).parents('.second').prev().children('h3').fadeIn();
			$(this).parents('.second').fadeOut();
            e.preventDefault();
        });
	});
});