(function($) {
  $(function() {
    $('.term-reference-tree-button').click(function() {
      $(this).toggleClass('term-reference-tree-collapsed');
      $(this).siblings('ul').slideToggle();
    });
     
    $('.term-reference-tree').each(function() {
      var tree = $(this);
      checkMaxChoices(tree);
      $(this).find('input[type=checkbox]').change(function() {
        checkMaxChoices(tree);
      });
    });
  });
  
  function checkMaxChoices(item) {
    var maxChoices = item.attr('data-max-choices');
    var count = item.find(':checked').length;
    
    if(count >= maxChoices) {
      item.find('input[type=checkbox]:not(:checked)').attr('disabled', 'disabled').parent().addClass('disabled');
    } else {
      item.find('input[type=checkbox]').removeAttr('disabled').parent().removeClass('disabled');
    }
  }
})(jQuery);