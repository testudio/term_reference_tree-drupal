(function($) {
  $(function() {
    $('.term-reference-tree-button').click(function() {
      $(this).toggleClass('term-reference-tree-collapsed');
      $(this).siblings('ul').slideToggle();
    });
  });
})(jQuery);