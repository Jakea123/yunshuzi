$(function(){ 
	
$(".flets").hover(function(){
	$(this).css("color","#FF9900")
},function(){
	$(this).css("color","#4d5158")
})	



$(".flets").click(function(){
	$(this).find("a").addClass('afters');
})





//侧导航
$(function(){
			
			var $subblock = $(".clearfix"), 
			    $head=$subblock.find('h2'), 
			    $ul = $("#proinfo"), 
			    $lis = $ul.find("li"), 
			    inter=false;
			
			$head.click(function(e){
				e.stopPropagation();
				if(!inter){
					$ul.show();
				}else{
					$ul.hide();
				}
				inter=!inter;
			});
			
			$ul.click(function(event){
				event.stopPropagation();
			});
			
//			$(document).click(function(){
//				$ul.hide();
//				inter=!inter;
//			});

			$lis.hover(function(){
				if(!$(this).hasClass('nochild')){
					$(this).addClass("prosahover");
					$(this).find(".prosmoreab").removeClass('hide');
				}
			},function(){
				if(!$(this).hasClass('nochild')){
					if($(this).hasClass("prosahover")){
						$(this).removeClass("prosahover");
					}
					$(this).find(".prosmoreab").addClass('hide');
				}
			});
			
		})


//轮播图
 var swiper = new Swiper('.swiper-container', {
        loop : true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: true
    });

//<!--轮播图下面的的模块-->
$('.masetes-img').hover(function(){
	$(this).addClass('activea');
},function(){
	$(this).removeClass('activea')
})




})

 


