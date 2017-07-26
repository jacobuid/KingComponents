(function ( $ ) {

    $.fn.king_alert = function(options) {


        var self = this;

        if(options === 'clear'){
            self.find('.alert').fadeOut('slow', function(){
                this.remove();
            });
        } else {

            // Default options.
            var settings = $.extend( {}, $.fn.king_alert.defaults, options );

            settings.$alerts = self.find('.alert');

            settings.$number = settings.$alerts.length;


            settings.$alert = $('<div class="alert king-' + settings.type + '-alert" data-alert="' + settings.$number + '"></div>')

            if(settings.icon){
                if(settings.type === 'info'){
                    settings.$alert.append('<i class="fa fa-info-circle"></i>');
                }
                if(settings.type === 'warning'){
                    settings.$alert.append('<i class="fa fa-exclamation-triangle"></i>');
                }
                if(settings.type === 'success'){
                    settings.$alert.append('<i class="fa fa-check"></i>');
                }
                if(settings.type === 'danger'){
                    settings.$alert.append('<i class="fa fa-exclamation-circle"></i>');
                }

            }

            settings.$alert.append(settings.message);

            self.append(settings.$alert);


            if(settings.timeout){
                setTimeout(function(){
                    settings.$alert.fadeOut('slow', function(){
                        this.remove();
                    });
                },settings.timeout);
            }

        }



        return self;
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.king_alert.defaults = {
        type: 'info',
        message: '',
        timeout: null,
        icon: true
    };

}( jQuery ));
