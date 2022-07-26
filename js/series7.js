$(function(){
    //premium Quality scroll
    $(window).scroll(function(){
        let windowH = Math.round($(document).scrollTop());
        //console.log(windowH);
        if(windowH > 500){
            $('.premiumQuality').animate({'opacity': '1'}, 1000);
        }
    });


    //navigation scroll
    $('header>div>nav>ul>li a').click(function(e){
        let contentHref = $(this).attr('href');
        let WTop = $(contentHref).position().top;
        $('html, body').animate({scrollTop: WTop}, 600);
    });


    //Series 7™
    $('#colorSelect dd').first().addClass('clickColor');
    $('#colorSelect dd').on('click', function(e){
        $('#colorSelect dd').removeClass('clickColor');
        $(this).addClass('clickColor');

        let colorName = $(this).attr('color');
        $('#series7Image').html(`<img src="./img/series7/series7_not_${colorName}.png" alt="series7_not_${colorName}"></img>`);
    })
});