var map = new GMaps({
  div: '#map',
  lat: -12.043333,
  lng: -77.028333
});


GMaps.geocode({
  address: 'Germany',
  callback: function(results, status){
    var firstResult = results[0];
    map.setCenter(firstResult.geometry.location.lat(), firstResult.geometry.location.lng());
    map.setZoom(7);
  }
}); 