var slo = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-120.66, 35.28]))
});

var modesto = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-121.0, 37.64]))
});		

var sandiego = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-117.16, 32.72]))
});	

slo.setStyle(new ol.style.Style({
	image: new ol.style.Icon({	
		color: '#8959A8',
		crossOrigin: 'anonymous',
		src: 'https://openlayers.org/en/v4.6.5/examples/data/dot.png',
		scale: 2
	})
}));

modesto.setStyle(new ol.style.Style({
	image: new ol.style.Icon({
		color: '#FF6347',
		crossOrigin: 'anonymous',
		src: 'https://openlayers.org/en/v4.6.5/examples/data/dot.png',
		scale: 0.5
	})
}));

sandiego.setStyle(new ol.style.Style({
	image: new ol.style.Icon({
		color: '#808080',
		crossOrigin: 'anonymous',
		src: 'https://openlayers.org/en/v4.6.5/examples/data/dot.png',
		scale: 0.5
	})
}));
		
var vectorSource = new ol.source.Vector({
	features: [slo, modesto, sandiego]
});
		
var vectorLayer = new ol.layer.Vector({
	source: vectorSource
});

var rasterLayer = new ol.layer.Tile({
	source: new ol.source.OSM()
});
	
var map = new ol.Map({
	layers: [rasterLayer, vectorLayer],
	target: document.getElementById('map'),
	view: new ol.View({
		center: ol.proj.fromLonLat([-120.66, 35.28]),
		zoom: 6
	})
});