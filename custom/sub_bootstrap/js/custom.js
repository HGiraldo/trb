(function($) {

  Drupal.custom = Drupal.custom || {};

  Drupal.behaviors.custom = {
    attach:function(context, settings) {
      // LIST-DIRECTORY
      $('#rb-directory').once('directory', function() {
        var options = {
          valueNames: [ 'name', 'cargo', 'ext', 'mail' ]
        };
        var userList = new List('rb-directory', options);
      });

      // BARRA LATERAL.
      if ($('aside.col-sm-3').height() < $('.main-container.container .col-sm-9').height()) {
        $('aside.col-sm-3').height($('.main-container.container .col-sm-9').height());
      };

      $('.level-2').parent().addClass('parent-level-2');

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
            $ulnav.show('fast');
            $li.addClass('rb-menu-proccesed');
          };
        }
        else {
          $ulnav.hide('fast');
          $li.removeClass('rb-menu-proccesed');
        }
      });
    }
  }
}(jQuery));
