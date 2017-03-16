$(document).ready(function(){
  $('select').material_select();





  $('.waves-effect').click(function(){

    $("ul.collection").empty();

    var search_string;
    var inputVal;


    if($('#cityOrZip').val()==="locality"){
      inputVal = $('#city_name').val();
      search_string = 'http://api.brewerydb.com/v2/locations?key=e555899269344b934b5c42241786293f&locality='+inputVal;
    }
    else if($('#cityOrZip').val( )==="postalCode"){
      inputVal = $('#city_name').val();
      search_string = 'http://api.brewerydb.com/v2/locations?key=e555899269344b934b5c42241786293f&postalCode='+inputVal;
    }



    if(!inputVal){
      alert("value is empty");
    } else {
      $.getJSON(search_string, function(collection){
        var results = collection.data;
        for (var i = 0; i < results.length; i++) {

          var placeName = results[i].brewery['name'];
          var placeAddress = results[i].streetAddress;
          var placeUrl = results[i].website;
          console.log(placeUrl);



          $('ul.collection').append(`
            <a id="shop${i+1}" href="${placeUrl}"><div class="breweries"><span>${placeName}</span></div></a>
            `);




        } // end of for loop





  }); // end Api call

} // end Else statement

})  // end Click function

}) // end document
