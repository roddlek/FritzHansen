$(function(){
    // make your room with Fritz Hansen
    $('.tabNav li>a').first().addClass('clicked');
    //tab menu
    $('.tabNav li>a').click(function(e){
        let navHref = $(this).attr('href');
        $('#tabMenu>ul[class*=tabNavContent]').css('display', 'none');
        $(navHref).css('display', 'block');
        // 배경색 변경
        $('.tabNav li>a').removeClass('clicked');
        $(this).addClass('clicked');
        return false;
    });
    //tab menu list
    $('#chairs li').first().addClass('selected');
    $('#lights li').first().addClass('selected');
    $('ul[class*=tabNavContent] li').click(function(e){
        $('ul[class*=tabNavContent] li').removeClass('selected');
        $(this).addClass('selected');
    });
    //이미지 변경
    $('.tabNavContent_chair li').click(function(e){
        let chairNmae = $(this).attr('name');
        $('#chairsImg').html(`<img src="img/makeyourroom/chairs/img_${chairNmae}.png" alt="${chairNmae}">`);
    });
    $('.tabNavContent_lights li').click(function(e){
        let lightsNmae = $(this).attr('name');
        console.log(lightsNmae);
        $('#lightsImg').html(`<img src="img/makeyourroom/lights/img_${lightsNmae}.png" alt="${lightsNmae}">`);
    });
})