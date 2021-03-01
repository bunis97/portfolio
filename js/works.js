/*works.js*/

$(function(){
    AOS.init();
});

$(function(){
    let dutation = 0;

    //all
    $('#btn-all').on('click', function(){
        $('.list li').show(500);
    })

    //design
    $('#btn-design').on('click', function(){
        $('.list li').hide(dutation).filter('.design').show(500);
    })

    //homepage
    $('#btn-homepage').on('click', function(){
        $('.list li').hide(dutation).filter('.homepage').show(500);
    })

})