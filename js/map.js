	 var markers = [
{"title":"Quiaios",
 "position":{"lat":40.253330000000005,"lng":-8.852234},
 page:'maps/quiaios',
 maps:[{image:'',
 year:'2006',
 area:'8',
 lastActualization:'December 2009'}]},
{"title":"Costa de Lavos",
 "position":{"lat":40.078072,"lng":-8.87146},
 page:'maps/costa-de-lavos',
 maps:[{image:'',
 year:'2008',
 area:'1',
 lastActualization:'October 2009'},
 {image:'',
 year:'2005',
 area:'5',
      lastActualization:'2006'}]},
{"title":"Lagoa das Braças","position":{"lat":40.245468,"lng":-8.815155},page:'lagoa-das-bracas',maps:[{image:'',year:'2006',area:'2',lastActualization:'May 2014'}]},

{"title":"Quiaios","position":{"lat":40.253330000000005,"lng":-8.852234},page:'quiaios',maps:[{image:'',year:'2006',area:'8',lastActualization:'May 2014'}]},

{"title":"Leirosa","position":{"lat":40.069138,"lng":-8.882446},page:'leirosa',maps:[{image:'',year:'2005',area:'4',lastActualization:'January 2010'}]},

{"title":"Costa de Lavos","position":{"lat":40.078072,"lng":-8.87146},page:'costa-de-lavos',maps:[{image:'',year:'2005',area:'5',lastActualization:'2006'},{image:'',year:'2008',area:'1',lastActualization:'October 2009'}]},

{"title":"Osso da Baleia","position":{"lat":40.00211,"lng":-8.909912},page:'osso-da-baleia',maps:[{image:'',year:'2011',area:'6',lastActualization:'July 2014'}]},

{"title":"Lagoa da Ervedeira","position":{"lat":39.9332271,"lng":-8.8962186},page:'lagoa-da-ervedeira',maps:[{image:'/wp-content/uploads/2016/10/Lagoa_Vista-aerea.jpg',year:'2016',area:'4',lastActualization:'July 2016'}]},

{"title":"Pedrogão","position":{"lat":39.915005,"lng":-8.934631},page:'pedrogao',maps:[{image:'',year:'2007',area:'7',lastActualization:'August 2010'}]},

{"title":"Praia da Vieira","position":{"lat":39.864952,"lng":-8.960037},page:'praia-da-vieira',maps:[{image:'',year:'2007',area:'2',lastActualization:'May 2008'}]},

{"title":"Pedreanes","position":{"lat":39.773449,"lng":-8.960037},page:'pedreanes',maps:[{image:'',year:'2000',area:'10',lastActualization:'January 2012'}]},

{"title":"São Pedro de Moel","position":{"lat":39.7586739,"lng":-9.0296461},page:'sao-pedro-de-moel',maps:[{image:'',year:'2014',area:'1.5',lastActualization:'July 2014'}]},

{"title":"Marinha Grande - Sprint","position":{"lat":39.749962,"lng":-8.934631},page:'marinha-grande',maps:[{image:'',year:'2007',area:'1.5',lastActualization:'2008'}]},

{"title":"Leiria - Sprint","position":{"lat":39.749956,"lng":-8.807729},page:'leiria',maps:[{image:'',year:'2008',area:'2',lastActualization:'May 2013'}]},

{"title":"Facho","position":{"lat":39.725674,"lng":-9.005356},page:'facho',maps:[{image:'',year:'2000',area:'6',lastActualization:'2008'}]},

{"title":"Praia das Paredes","position":{"lat":39.689224,"lng":-9.047241},page:'praia-das-paredes',maps:[{image:'',year:'2007',area:'2',lastActualization:'2007'}]},

{"title":"Porto-de-Mós - Sprint","position":{"lat":39.600132,"lng":-8.814468},page:'porto-de-mos',maps:[{image:'',year:'2005',area:'2',lastActualization:'November 2012'}]},

{"title":"Penamacor - Sprint","position":{"lat":40.168011,"lng":-7.172306},page:'penamacor',maps:[{image:'',year:'2016',area:'1.5',lastActualization:'January 2016'}]},

{"title":"Benquerença","position":{"lat":40.225988,"lng":-7.239169},page:'benquerenca',maps:[{image:'',year:'2015',area:'1.2',lastActualization:'September 2015'}]},

{"title":"Anascer","position":{"lat":40.272817,"lng":-7.247267},page:'anascer',maps:[{image:'',year:'2015',area:'1.2',lastActualization:'October 2015'}]},

{"title":"Mata da Câmara","position":{"lat":40.170600,"lng":-7.176867},page:'mata-da-camara',maps:[{image:'',year:'2015',area:'1',lastActualization:'November 2015'}]},

{"title":"Ramalhão","position":{"lat":40.164942,"lng":-7.156792},page:'ramalhao',maps:[{image:'',year:'2015',area:'1',lastActualization:'October 2015'}]},

{"title":"Memória","position":{"lat":40.145885,"lng":-7.195095},page:'memoria',maps:[{image:'',year:'2015',area:'2',lastActualization:'November 2015'}]},

{"title":"Rachã","position":{"lat":40.090994,"lng":-7.207845},page:'racha',maps:[{image:'',year:'2015',area:'3.5',lastActualization:'September 2015'}]},

{"title":"Serrinha","position":{"lat":40.090767,"lng":-7.207517},page:'serrinha',maps:[{image:'',year:'2015',area:'3.5',lastActualization:'September 2015'}]}

] ;

function initialize() {
	var mapOptions = {
		//old center in leiria district: 39.915005,-8.934631 (zoom 9)
		center: new google.maps.LatLng(39.933186,-7.989152),
		zoom: 8
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);

	var infoWindow = new google.maps.InfoWindow({
			content:''
	});

	markers.forEach(function(marker) {
		var gmarker = new google.maps.Marker({
			position: marker.position,
		    map: map,
		    title: marker.title
		});

		google.maps.event.addListener(gmarker, 'click', function() {
			openInfoWindow(infoWindow, map, gmarker, generateInfoWindowContent(marker));
		});

	});
}

function generateInfoWindowContent(marker) {
	var content = '<h3>'+marker.title+'</h3>';
	marker.maps.forEach(function(map) {
		if(map.image !== '')
    			content += '<img src="'+map.image+'" style="max-width:100px;max-height:100px"/><br/>';
		content += '<strong>Year:</strong> '+map.year+'<br/>';
		content += '<strong>Map Area:</strong> '+map.area+' Km²<br/>';
		content += '<strong>Last Actualization:</strong> '+map.lastActualization+'<br/><br/>';
	});
	content += '<a href="'+marker.page+'">More details</a><br/>';
	content += '<a href="https://www.google.pt/maps/dir//'+marker.position.lat+','+marker.position.lng+'" target="_blank">Get directions</a>';
	return content;
};

function openInfoWindow(infoWindow, map, gmarker, content) {
	infoWindow.setContent(content);
	infoWindow.open(map,gmarker);
}

google.maps.event.addDomListener(window, 'load', initialize);

