$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var comfortLevel = parseInt($("input:radio[name=comfortLevel]:checked").val());
    var mostAppealing = parseInt($("input:radio[name=mostAppealing]:checked").val());
    var packingStyle = parseInt($("input:radio[name=packingStyle]:checked").val());


    var result = '';
    if ((comfortLevel +  mostAppealing + packingStyle) === 3){
      result = 'As! You are looking for something relaxing and not too far off the beaten path. Majorca, Spain just may be the perfect travel destination for you!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle) === 4){
      result = 'As! You are looking for something relaxing and not too far off the beaten path. Majorca, Spain just may be the perfect travel destination for you!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle) === 5){
      result = 'Bs! You are a well rounded traveler and you want to experience someplace rich in history and culture. Book that flight to Berlin, Germany now!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle) === 6){
      result = 'Bs! You are a well rounded traveler and you want to experience someplace rich in history and culture. Book that flight to Berlin, Germany now!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle) === 7){
      result = 'Bs! You are a well rounded traveler and you want to experience someplace rich in history and culture. Book that flight to Berlin, Germany now!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle) === 8){
      result = 'Cs! You travel for the thrill and the adventure. You should make the trek out to Patagonia or the Atacama Desert, Chile!';
    }
    if ((comfortLevel +  mostAppealing + packingStyle) === 9){
      result = 'Cs! You travel for the thrill and the adventure. You should make the trek out to Patagonia or the Atacama Desert, Chile!';
    }


    $(".name").append(nameInput);
    $("#destination").text(result);
    $("#result").show();

  });
  });
