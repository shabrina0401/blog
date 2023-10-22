$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000,
        pause: 'hover'
    });

    $('#closeAds').click(function () {
        $('#videoContainer, #directAds').toggleClass('d-none');
        $('#iframeAds').attr('src', '');
    });

    $('#pillKategori a[data-toggle="pill"]').click(function () {
        var cat = $(this).attr('data-name').toLowerCase(),
            $list = $('#listTV li');
        $list.each(function (i, e) {
            if (cat !== 'all') {
                if ($(e).data('categories').toLowerCase().indexOf(cat) > -1) {
                    $(e).removeClass('d-none');
                } else {
                    $(e).addClass('d-none');
                }
            } else {
                $(e).removeClass('d-none');
            }
        });
    });

    $('#frmCariChannel input').on('blur keyup change', function () {
        cariTV($(this).val().toLowerCase());
    });

    $('#frmCariChannel').on('submit', function (e) {
        e.preventDefault();
        cariTV($(this).find('input').val().toLowerCase());
    });

    $(window).on('scroll', function () {
        var g = $("#gotoTop");
        if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
            g.fadeIn();
        } else {
            g.fadeOut();
        }
    });
    $('#gotoTop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });
});

function cariTV(cari) {
    var $list = $('#listTV li');
    $('#pillKategori li:first-child a').tab('show');
    $list.each(function (i, e) {
        if ($(e).data('categories').toLowerCase().indexOf(cari) > -1 || $(e).data('key').toLowerCase().indexOf(cari) > -1 || $(e).data('name').toLowerCase().indexOf(cari) > -1) {
            $(e).removeClass('d-none');
        } else {
            $(e).addClass('d-none');
        }
    });
}