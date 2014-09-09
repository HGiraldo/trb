(function($) {

  Drupal.custom = Drupal.custom || {};

  Drupal.behaviors.custom = {
    attach:function(context, settings) {
      // BARRA LATERAL.
      $('aside.col-sm-3').height($('.main-container.container .col-sm-9').height());
      // Responsive Images.
      $('.field.field-type-image img, .views-field-field-image img, .content-image img, .big-logo-block img').addClass('img-responsive');

      $('li.expanded.active-trail').once('active-menu', function() {
        $(this).addClass('rb-menu-proccesed');
      });

      $('li.menu-item').click(function(e) {
        $li = $(this);
        $ulnav = $li.find('ul.menu.nav');
        if (!$li.hasClass('rb-menu-proccesed')) {
          if ($ulnav) {
            $ulnav.show('500');
            $li.addClass('rb-menu-proccesed');
          };
        }
        else {
          $ulnav.hide('500');
          $li.removeClass('rb-menu-proccesed');
        }
      });
    }
  }
}(jQuery));
