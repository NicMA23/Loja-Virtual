$(document).ready(function () {
    const destiny01 = $('#sobre');
    const destiny02 = $('#produtos');

    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this).attr('href');
        const targetElement = $(target);

        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 1000);
    });
});