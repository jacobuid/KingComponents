(function ( $ ) {

    $.fn.king_box = function(options) {

        // Default options.
        var settings = $.extend( {}, $.fn.king_box.defaults, options );

        var self = this;

        // Theme
        if(settings.collapsible){
            settings.$content = self.find('.king-box-block');

            if(settings.open){
                settings.$collapsible = $('<i class="king-box-action fa fa-angle-down"></i>');
            } else{
                settings.$collapsible = $('<i class="king-box-action fa fa-angle-right"></i>');
                settings.$content.attr('style','display:none');
            }


            settings.$collapsible.on('click',function () {
                if(settings.$content.is(":visible")){
                    settings.$content.slideUp();
                    settings.$collapsible.removeClass('fa-angle-down').addClass('fa-angle-right');
                } else {
                    settings.$content.slideDown();
                    settings.$collapsible.removeClass('fa-angle-right').addClass('fa-angle-down');
                }
            });



            self.find('.king-box-header').prepend(settings.$collapsible)
        }

        return self;
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.king_box.defaults = {
        theme: 'dark',
        compact: false,
        items: null
    };

}( jQuery ));
