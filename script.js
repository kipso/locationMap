 var neighborhoods = [
      
        {lat: 12.956628, lng: 77.641154},
        {lat: 12.849, lng: 77.422},
        {lat: 12.797, lng: 77.596},
        {lat: 12.517, lng: 77.994},
        {lat: 12.95, lng: 77.41},
        {lat: 12.84, lng: 77.22},
        {lat: 12.79, lng: 77.56},
        {lat: 12.9566, lng: 77.641},
        {lat: 12.86008, lng: 77.422},
        {lat: 12.79777, lng: 77.596154},
        {lat: 12.5177676, lng: 77.994876},
        {lat: 12.9585, lng: 77.41098},
        {lat: 12.847686, lng: 77.229087},
        {lat: 12.7997, lng: 77.563456},
        {lat: 12.8476, lng: 77.2087},
        {lat: 12.77, lng: 77.5456},
      ];

      var markers = [];
      var map,j=2,i=0;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 12.678, lng: 77.410}
        });
      }
      function call(){
        
            plotLocations(i,j);
            i=i+2;
            j=j+2;
          }

      function plotLocations(i,j) {
        //clearMarkers();
        for (var k =i ; k < j; k++) {
         
          addMarkerWithTimeout(neighborhoods[k], 10000);
        }
        
      }

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }
