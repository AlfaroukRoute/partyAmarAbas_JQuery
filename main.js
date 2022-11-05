//sidebar
$(document).ready(function () {
    $('.sidebarbtn').click(function () {
        $('.sidebar').toggleClass('show');
        $('.sidebarbtn').toggleClass('toggle');
    })
})

//accordion function
$(function () {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(".accordion > .accordion-item").click(function () {
        $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
        $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });
});

//countdown event   
$("#CountDown")
    .countdown("2023/01/01", function (event) {
        $('#day').text(
            event.strftime('%D')
        );
        $('#hours').text(
            event.strftime('%H')
        );
        $('#min').text(
            event.strftime('%M')
        );
        $('#sec').text(
            event.strftime('%S')
        );
    });


//textarea letter countdown function
$(function () {
    $('#countDown').keyup(function () {
        var remain = 100 - $(this).val().length;
        $('#count2').text(remain);

        if (remain < 0) {
            $('#count2').css('color', 'red');
        } else {
            $('#count2').css('color', 'grey');
        }
    });
});