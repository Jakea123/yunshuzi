$(function(){
	var $subblock = $(".amongbox"),
                $head = $subblock.find('h2'),
                $ul = $("#proinfo"),
                $lis = $ul.find("li"),
                inter = false;

            // $head.hover(function(e) {
            //     e.stopPropagation();
            //     if (!inter) {
            //         $ul.show();
            //     } else {
            //         $ul.hide();
            //     }
            //     inter = !inter;
            // });
            $subblock.mouseover(function(e) {

                $ul.show();


            })

            $subblock.mouseout(function(e) {

                $ul.hide();

            })



//             $ul.click(function(event) {
//                 event.stopPropagation();
//             });

            // $(document).click(function() {
            //     $ul.hide();
            //     inter = !inter;
            // });

            $lis.hover(function() {
                if (!$(this).hasClass('nochild')) {
                    $(this).addClass("prosahover");
                    $(this).find(".prosmoreab").removeClass('hide');
                }
            }, function() {
                if (!$(this).hasClass('nochild')) {
                    if ($(this).hasClass("prosahover")) {
                        $(this).removeClass("prosahover");
                    }
                    $(this).find(".prosmoreab").addClass('hide');
                }
            });



$('.someboxsa').click(function(){
	$(this).toggleClass('hoddts');
	$('.tu-st').fadeToggle('xian-shatbox');
	})









})
