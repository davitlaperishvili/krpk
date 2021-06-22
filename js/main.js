//wow
new WOW().init();

//Счетчик цифр
function number_to(id,from,to,duration) {
    var element = document.getElementById(id);
    var start = new Date().getTime();
    setTimeout(function() {
        var now = (new Date().getTime()) - start;
        var progress = now / duration;
        var result = Math.floor((to - from) * progress + from);
        element.innerHTML = progress < 1 ? result : to;
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}
$(document).ready(function() {
    if($('#counts1').length > 0 && $('#counts2').length > 0){
        number_to("counts1",0,14.5,3100);
        number_to("counts2",0,153,3100);
    }

    // Form submit validation
    const allForms = $('form.center_block');
    const allFormsButton = $('form.center_block button');
    allFormsButton.each( function(){
        $(this).on('click', function(e){
            e.preventDefault;
        })
    })
    allForms.each( function(){
        $(this).on('submit', function(e){
            let allInputs = $(this).find('input');
            allInputs.each( function(){
                if (!$(this).val()){
                    $(this).addClass('error');
                }else{
                    $(this).removeClass('error');
                }
            })
            let inputs = $(this).find('input.error');
            if(!inputs.length == 0){
                // if form is with errors
                var mBtn = $('.modal_btn').attr("href");
                var scroll_top = $(window).scrollTop();
                var doc_h = $(window).height();
                var pos_modal = (doc_h/2) + scroll_top;
                $(mBtn).addClass('active');
                $('.modal_overlay .modal_content').css({'top' : pos_modal});
                if($('.subscribe_modal').length > 0 && $('.subscribe_modal').hasClass('active')){
                    $('.subscribe_modal').removeClass('active')   
                }
                setTimeout(function(){
                    $('.modal_overlay').removeClass('active');
                }, 3000)
                return false
            }else{
                // if form is without errors
                var mBtn = $('.modal_btn').attr("href");
                var scroll_top = $(window).scrollTop();
                var doc_h = $(window).height();
                var pos_modal = (doc_h/2) + scroll_top;
                $(mBtn).addClass('active');
                $('.modal_overlay .modal_content').css({'top' : pos_modal});
            }
        })
    })
    const subscribe = $('.news_subscription');
    subscribe.on('click', function(e){
        e.preventDefault();
        var scroll_top = $(window).scrollTop();
        var doc_h = $(window).height();
        var pos_modal = (doc_h/2) + scroll_top;
        $('.subscribe_modal').addClass('active')
        $('.subscribe_modal .subscribe_modal_content').css({'top' : pos_modal});
    })

    // docs cords control
    const cordsTitle = $('.accordion_wrap .accordion_item .accordion_title');
    const corsdTitleActive = $('.accordion_wrap .accordion_item .accordion_title.active')
    const cordsRIghtContent = $('.accordion_wrap .right_block')
    function getActiveContent(){
        let activeClone = corsdTitleActive.next('.accordion_content').clone();
        cordsRIghtContent.html(activeClone);
    }
    if($(window).width() > 992){
        getActiveContent();
        cordsTitle.on('click', function(){
            cordsTitle.each( function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active')
                }
            })
            $(this).addClass('active')
            let cordsContent = $(this).next('.accordion_content').clone();
            cordsRIghtContent.html(cordsContent);
        })
    }else{
        cordsTitle.on('click', function(){
            cordsTitle.each( function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active')
                }
            })
            $(this).addClass('active')
            let cordsContent = $(this).next('.accordion_content');
            if(cordsContent.is(':hidden')){
                cordsContent.slideDown('400')
            }else{
                cordsContent.slideUp('400')
            }
        })
    }
    
    // Page tab control
    const tabs = $('.tabs .tab-control');
    const tabContent = $('.tab_content')
    tabs.on('click', function(e){
        e.preventDefault();
        tabs.each( function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        })
        $(this).addClass('active');
        let getData = $(this).attr('data-tab');
        let getContent = $(`.tab_content[data-content="${getData}"]`)
        tabContent.each( function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        })
        getContent.addClass('active');
    })

});
$(document).ready(function() {
    as = 0;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            if(as == 0) {
                if($('#counts3').length > 0 && $('#counts4').length > 0 && $('#counts5').length > 0){
                    number_to("counts3",0,2006,4100);
                    number_to("counts4",0,450,4100);
                    number_to("counts5",0,14.5,4100);
                    as++;
                }
            }}
    });
});

//popup окно
$(document).ready(function() {
    $(".modal_overlay .modal_content").prepend('<div class="modal_close"></div>');
    $(".subscribe_modal .subscribe_modal_content").prepend('<div class="modal_close"></div>');
    $('.modal_overlay .modal_close').click(function(){
        $('.modal_overlay').removeClass('active');
    });
    $('.modal_overlay').mouseup(function (e) {
        var popup = $('.modal_overlay .modal_content');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.modal_overlay').removeClass('active');
        }
    });
    $('.subscribe_modal .modal_close').click(function(){
        $('.subscribe_modal').removeClass('active');
    });
    $('.subscribe_modal').mouseup(function (e) {
        var popup = $('.subscribe_modal .subscribe_modal_content');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.subscribe_modal').removeClass('active');
        }
    });
});

//fixed_block
$(".fixed_close").click(function(e) {
    e.preventDefault();
    $(".fixed_block").hide();
});

//мобильное меню
$("header .nav_btn").click(function() {
    $("header .nav").addClass('active');
});
$("header .nav .close").click(function() {
    $("header .nav").removeClass('active');
});

//загрузка файлов
$('.multiple_upload_files input').fileuploader({
    addMore: true
});

//Фото должностей
if($(window).width() > 992){
    //const listLength = $('.job_list .item').length + 1;
    $(document).on('click', '.job_list .item', function (e) {
        e.preventDefault();
        $('.job_list .item').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        })
        $(this).addClass('active');
        let dataImg = $(this).attr('data-img');
        $('.leader_block .img_block img').attr('src', dataImg);
    });
}else{
    $(document).on('click', '.job_list .item', function (e) {
        e.preventDefault();
    });
}

// magnific popup
if($('.magnific').length > 0){
    $('.magnific').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true,
              navigateByImgClick: true,
            },
            zoom:{
                enabled: true,
                duration: 300
            }
        });
    });
}

//project_slider
if($('.project_slider').length > 0){
    $('.project_slider').on(`init reInit`, function(event, slick) {
        $('.project_slider_counter').text(1 + ' / ' + slick.slideCount);
    })
    $('.project_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.project_slider_counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
    })
    $('.project_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.one_project .project_slider_nav .next').on('click', function() {
        $('.project_slider').slick('slickNext');
    });
    $('.one_project .project_slider_nav .prev').on('click', function() {
        $('.project_slider').slick('slickPrev');
    });
}


//press_center_slider
if($('.press_center_slider').length > 0){
    $('.press_center_slider').on(`init reInit`, function(event, slick) {
        $('.press_center_slider_counter').text(1 + ' / ' + slick.slideCount);
    })
    $('.press_center_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.press_center_slider_counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
    })
    $('.press_center_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
    $('.press_center_inside_slider .press_center_slider_nav .next').on('click', function() {
        $('.press_center_slider').slick('slickNext');
    });
    $('.press_center_inside_slider .press_center_slider_nav .prev').on('click', function() {
        $('.press_center_slider').slick('slickPrev');
    });
}

//press_center_slider
if($('.work_with_slider').length > 0){
    $('.work_with_slider').on(`init reInit`, function(event, slick) {
        $('.work_with_history_slider_counter').text(1 + ' / ' + slick.slideCount);
    })
    $('.work_with_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.work_with_history_slider_counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
    })
    // $('.work_with_slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // });
    $('.work_with_slider').each( function(){
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    })
    $('.work_with_history_slider .work_with_history_slider_nav .next').on('click', function() {
        $('.work_with_slider').slick('slickNext');
    });
    $('.work_with_history_slider .work_with_history_slider_nav .prev').on('click', function() {
        $('.work_with_slider').slick('slickPrev');
    });
}