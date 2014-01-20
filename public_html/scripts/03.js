$(document).ready(function() {
    $('#switcher').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
    var toggleSwitcher = function(event) {
        if (!$(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    };
    $('#switcher').on('click', toggleSwitcher);
    $('#switcher').trigger('click');
    
    $('#switcher button').click(function() {
        $('#switcher').off('click', toggleSwitcher);
        if (this.id === 'switcher-default') {
            $('#switcher').on('click', toggleSwitcher);
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
