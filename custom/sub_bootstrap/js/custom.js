(function($) {

  Drupal.custom = Drupal.custom || {};

  // Validar La url del Video vía ajax (php) y traer el resultado embebido.
  Drupal.AddProfile = function(element, val) {
    $this = element;
    if ($this) {
      $.ajax({
        url: Drupal.settings.basePath + "post/ajax/verifuser",
        type: "POST",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          if (data) {
            $this.append(data);
          }
        }
      });
    }
    else {}
  };

  Drupal.behaviors.custom = {
    attach:function(context, settings) {
      // LIST-DIRECTORY
      $('#rb-directory').once('directory', function() {
        var options = {
          valueNames: [ 'name', 'cargo', 'ext', 'mail' ]
        };
        var userList = new List('rb-directory', options);
      });

      $('#widget_pager_bottom_news_home-block').once('pager', function() {
        $this = $(this);
        var clone_text = $('.view-footer').find('.more-news-div').clone();
        $('.view-footer').find('.more-news-div').hide();
        $this.parent().append(clone_text);
      });

      $('.logged-in, .not-logged-in').once('loggedin', function() {
        $('.navbar-header').css('width', '100%');
        Drupal.AddProfile($('.navbar-header'));
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
