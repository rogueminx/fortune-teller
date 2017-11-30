function Fortune() {
	this.good = 0;
  this.bad = 0;
};

$(document).ready(function(){
  $("form#fortune-survey").submit(function(event){
    event.preventDefault();
    var newFortune = new Fortune();
    $("input:checkbox[name=bad-omen]:checked").each(function(){
      newFortune.bad += parseInt($(this).val());
    });
    $("input:checkbox[name=good-omen]:checked").each(function(){
      newFortune.good += parseInt($(this).val());
    });
    $('#fortune-survey').hide();
    if (newFortune.good > newFortune.bad){
      $("#good-luck-fortune").show();
    } else if (newFortune.bad > newFortune.good){
      $("#bad-luck-fortune").show();
    } else {
      $("#nuetral-luck-fortune").show();
    }
  });
});
