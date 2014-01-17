$(document).ready(function() {
    $('#switcher').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
    $('#switcher').click(function(event) {
        if (!$(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    });
    $('#switcher-default').addClass('selected');
    $('#switcher').click(function(event) {
        if($(event.target).is('button')) {
            var bodyClass = event.target.id.split('-')[1];
            $('body').removeClass().addClass(bodyClass);
            $('#switcher button').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});
