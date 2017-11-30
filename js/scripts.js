$(document).ready(function(){
  $("form#fortune-survey").submit(function(event){
    event.preventDefault();
    var badOmens = 0
    var goodOmens = 0
    $("input:checkbox[name=bad-omen]:checked").each(function(){
      badOmens += $(this).val();
    });
    $("input:checkbox[name=good-omen]:checked").each(function(){
      goodOmens += $(this).val();
    });
    $('#fortune-survey').hide();
    if (goodOmens.length > badOmens.length){
      $("#good-luck-fortune").show();
    } else if (badOmens.length > goodOmens.length){
      $("#bad-luck-fortune").show();
    } else {
      $("#nuetral-luck-fortune").show();
    }
  });
});
