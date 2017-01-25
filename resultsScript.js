function getQuery(urlHash) {
  let hashParts = urlHash.split('&');
  let query = hashParts.find(x => x.includes('query'));
  if(query){
   return query.replace('#query=',''); 
  }
}
function search(query){
    $.getJSON('http://hackathon.liannsun.com/supermarkets?secret_key=spacecats&location='+query, function(data){
        console.log(data);
        displayData(data, query);
    });
}


function displayData(data, query){
    let markerLocations = '';
    data.results.forEach((obj, i) => {
        let template = $('#item-template').clone();
        template.find('.title').html(obj.name);
        template.find('.address').html(obj.formatted_address);
        template.show();
        $('#list').append(template);
        markerLocations += '|' + obj.formatted_address;
        
    });
    $('#map').attr('src','https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=400x400&key=AIzaSyC_3Rzz01D4pSdxo0z1s0Q2bdHlPpfAHng&center=' + query + '&markers=color:red'+markerLocations);
}
$(document).ready(function(){
    search(getQuery(window.location.hash));
});