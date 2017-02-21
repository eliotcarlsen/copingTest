$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var copingTotal = 0;
    var symptomTotal = 0;
    var warningTotal = 0;

    $("input:checkbox[name=warningsign]:checked").each(function(){
      warningTotal += parseInt($(this).val());
    });

    $("input:checkbox[name=healthsymptom]:checked").each(function(){
      symptomTotal += parseInt($(this).val());
    });

    $("input:checkbox[name=copingmethod]:checked").each(function(){
      copingTotal += parseInt($(this).val());
    });
    console.log(warningTotal);
    console.log(symptomTotal);
    console.log(copingTotal);

    if (warningTotal + symptomTotal > copingTotal){
      alert("Get Help!");
    }else if (warningTotal + symptomTotal === copingTotal){
      alert("You're doing okay, but think about coping better.");
    } else {
      alert("Nice job, you can handle your stress..");
    };
  });
});
