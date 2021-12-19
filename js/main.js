var owl    = $('#owl-banner');
var owl2    = $('#owl-eventos');

owl.owlCarousel({
    loop:true,
		nav:false,			
		margin: 1,		
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:2500,	
		responsive: {
			1300 : {
				items:1,
			},
			1100 : {
				items:1,
			},
			960 : {
				items:1,
			},
			600 : {
				items:1,
			},
			0 : {
				items:1,
			}
		},
		autoplayHoverPause: true
});

owl2.owlCarousel({
    loop:true,
		nav:false,			
		margin: 1,		
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:2500,	
		responsive: {
			1300 : {
				items:7,
			},
			1100 : {
				items:5,
			},
			960 : {
				items:3,
			},
			600 : {
				items:2,
			},
			0 : {
				items:1,
			}
		},
		autoplayHoverPause: true
});



// $(".box-filme").on('dragged', function(){
//     owl.trigger('prev.owl.carousel');
// });

// $(".box-filme").on('dragged', function(){
//     owl.trigger('next.owl.carousel');
// });

$(document).ready(function(){
    let index = document.getElementsByClassName('owl-item');
    for(i=1; i<=index.length; i++){
        if(i%2 ==1){
            // $('#owl-banner .owl-item:nth-child('+i+')').css("margin-top", "100px");
            $('#owl-eventos .owl-item:nth-child('+i+')').css("margin-top", "100px");
            // $('#card-carousel .slick-slide:nth-child('+i+')').css("margin-top", "100px");
        }
    }
});


$(window).scroll(function(){
    $('.scale-animation:not(.remove)').each(function(){
        if($(window).scrollTop() + ($(window).height() / 2) > ($(this).offset().top))
        {
            $(this).addClass('remove');
        }
    });
})

$('.chamadas').addClass('scale-animation')
$('.chamadas').addClass('scale-animation')

{/* <script type="text/javascript">
	function imgSlider(anything){
		document.querySelector('.img-galeria').src = anything;
			// event.preventDefault();
		$('html, body').animate({ scrollTop: $(".img-galeria").offset().top -140}, 50);
	}
</script> */}