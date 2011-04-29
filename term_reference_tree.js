(function($) {
  $(function() {
    $('.term-reference-tree-button').click(function() {
      $(this).toggleClass('term-reference-tree-collapsed');
      $(this).siblings('ul').slideToggle('fast');
    });
    
    $('.expandbutton').click(function() {
      $(this).siblings('.term-reference-tree-button').trigger('click');
    });
     
    $('.term-reference-tree').each(function() {
      var tree = $(this);
      checkMaxChoices(tree);
      $(this).find('input[type=checkbox]').change(function() {
        checkMaxChoices(tree);
      });
			
			if($(this).hasClass('term-reference-tree-start-minimized')) {
				$(this).find('.term-reference-tree-button').addClass('term-reference-tree-collapsed').siblings('ul').hide();
			}
    });
  });
  
  function checkMaxChoices(item) {
    var maxChoices = item.attr('data-max-choices');
    var count = item.find(':checked').length;
    
    if(maxChoices > 0 && count >= maxChoices) {
      item.find('input[type=checkbox]:not(:checked)').attr('disabled', 'disabled').parent().addClass('disabled');
    } else {
      item.find('input[type=checkbox]').removeAttr('disabled').parent().removeClass('disabled');
    }
  }
})(jQuery);