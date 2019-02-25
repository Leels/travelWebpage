$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var comfortLevel = parseInt($("input:radio[name=comfortLevel]:checked").val());
    var mostAppealing = parseInt($("input:radio[name=mostAppealing]:checked").val());
    var packingStyle = parseInt($("input:radio[name=packingStyle]:checked").val());
    var eatingStyle = parseInt($("input:radio[name=eatingStyle]:checked").val());
    var objective = parseInt($("input:radio[name=objective]:checked").val());


    var result = '';
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 5){
      result = 'As! You are looking for something relaxing and not too far off the beaten path. Maui, Hawaii just may be the perfect travel destination for you!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 6){
      result = 'As! You are looking for something relaxing and not too far off the beaten path. Maui, Hawaii just may be the perfect travel destination for you!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 7){
      result = 'As and Bs! You are looking for something relaxing and but also want to experience culture and great food. Majorca, Spain just may be the perfect travel destination for you!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 8){
      result = 'As and Bs! You are looking for something relaxing and but also want to experience culture and good food. Majorca, Spain just may be the perfect travel destination for you!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 9){
      result = 'Bs! You are a well rounded traveler and you want to experience someplace rich in history and culture. Book that flight to Berlin, Germany now!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 10){
      result = 'Bs! You are a well rounded traveler and you want to experience someplace rich in history and culture. Book that flight to Berlin, Germany now!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 11){
      result = 'Bs! You are a well rounded traveler and you want to experience someplace rich in history and culture. Book that flight to Berlin, Germany now!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 12){
      result = 'Bs and Cs! You love exploring cities about as much as you do the great outdoors! Zurich, Switzerland may have the best of both worlds providing rich city life with the Alps just around the corner.';
    }
    if ((comfortLevel +  mostAppealing + packingStyle + eatingStyle + objective) === 13){
      result = 'Bs and Cs! You love exploring cities about as much as you do the great outdoors! Zurich, Switzerland may have the best of both worlds providing rich city life with the Alps just around the corner.';
    }
    if ((comfortLevel +  mostAppealing + packingStyle+ eatingStyle + objective) === 14){
      result = 'Cs! You travel for the thrill and the adventure. You should make the trek out to Patagonia or the Atacama Desert, Chile!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle+ eatingStyle + objective) === 15){
      result = 'Cs! You travel for the thrill and the adventure. You should make the trek out to Patagonia or the Atacama Desert, Chile!';
    }


    $(".name").append(nameInput);
    $("#destination").text(result);
    $("#result").show();

  });
  });
