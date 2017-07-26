
(function ( $ ) {

    $.fn.king_modal = function(options) {

        // Default options.
        var settings = $.extend( {}, $.fn.king_modal.defaults, options );
        var self = this;
        var $self = $(self);

        self.resize = function(){
            $self.find('.king-modal-content').css({
                'height': settings.height
            });
            $self.find('.king-modal').css({
                'width': settings.width
            });
            if(settings.height !== 'auto'){
                $self.find('.king-modal').addClass('king-modal-fixed');
            }
        };

        self.addBehavior = function(){
            $self.find('.king-modal-close').on('click', function(e){
                e.stopPropagation();
                self.close();
            });
            $self.find('.king-modal').on('click', function(e){
                e.stopPropagation();
            });
            $self.on('click', function(e){
                self.close();
            });
        };

        self.open = function(){

            $('body').addClass('king-modal-open');
            $self.trigger("before-open", [$self]);

            settings.contentHeight = parseInt(settings.height)-109;

            if(settings.type === 'fluid' || settings.type === 'fixed'){
                self.resize();
                $self.fadeIn(300, function(){
                    $self.trigger("after-open", [$self]);
                    self.addBehavior();
                });
            }

            if(settings.type === 'left') {
                $self.find('.king-modal').addClass('king-modal-left')
                $self.fadeIn(300).find('.king-modal').animate({
                    width: settings.width,
                }, 300, function() {
                    self.addBehavior()
                });

            }

            if(settings.type === 'right') {
                $self.find('.king-modal').addClass('king-modal-right')
                $self.fadeIn(300).find('.king-modal').animate({
                    width: settings.width,
                }, 300, function() {
                    self.addBehavior()
                });

            }

            if(settings.type === 'top') {

                $self.find('.king-modal').addClass('king-modal-top').find('.king-modal-content').css('height', settings.contentHeight + 'px');
                $self.fadeIn(300).find('.king-modal').animate({
                    height: settings.height,
                }, 300, function() {
                    self.addBehavior()
                });

            }

            if(settings.type === 'bottom') {

                $self.find('.king-modal').addClass('king-modal-bottom').find('.king-modal-content').css('height', settings.contentHeight + 'px');
                $self.fadeIn(300).find('.king-modal').animate({
                    height: settings.height,
                }, 300, function() {
                    self.addBehavior()
                });

            }

        };

        self.close = function(){
            $('body').removeClass('king-modal-open');
            $self.trigger("before-close", [$self]);
            $self.fadeOut(150, function(){
                $self.trigger("after-close", [$self]);
                if(settings.type === 'left' || settings.type === 'right') {
                    $self.find('.king-modal').css('width','0')
                }
                if(settings.type === 'top' || settings.type === 'bottom') {
                    $self.find('.king-modal').css('height','0')
                }
            });
        };

        self.open();

        return self;
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.king_modal.defaults = {
        type: 'fluid', // fluid, fixed, top, right, bottom, left
        width: '600px',
        height: 'auto'
    };

}( jQuery ));