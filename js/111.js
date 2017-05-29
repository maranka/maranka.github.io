$('input[type=checkbox]').on('change', function() {
	var clickId = this.name;
  console.log(clickId);
  var block = $('[data-rubric=' + clickId +']');
  
  if(this.checked) {
  block.show();
  }else{block.hide();}
});




var rubric = $('[data-rubric]');
var rubric_items = $('.filter-rubric__item :checkbox');
$('body').on('change', '.filter-rubric__item :checkbox', function() {
    var name = this.id;
    if($('.filter-rubric__item :checkbox:checked').length == 1){
       if($(this).prop('checked')) {
           rubric.hide();
           $('[data-rubric='+ name +']').show();
       } else {
           $('[data-rubric='+ name +']').hide();
       }
    } else if($('.filter-rubric__item :checkbox:checked').length > 1) {
      if($(this).prop('checked')) {
        $('[data-rubric='+ name +']').show();
      } else {
        $('[data-rubric='+ name +']').hide();
      }
    } else {
      rubric.show();
    }
});