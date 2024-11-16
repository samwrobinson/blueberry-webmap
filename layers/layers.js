var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_trails_1 = new ol.format.GeoJSON();
var features_trails_1 = format_trails_1.readFeatures(json_trails_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trails_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trails_1.addFeatures(features_trails_1);
var lyr_trails_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trails_1, 
                style: style_trails_1,
                popuplayertitle: "trails",
                interactive: true,
                title: '<img src="styles/legend/trails_1.png" /> trails'
            });
var format_SkiCenterParking_2 = new ol.format.GeoJSON();
var features_SkiCenterParking_2 = format_SkiCenterParking_2.readFeatures(json_SkiCenterParking_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SkiCenterParking_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkiCenterParking_2.addFeatures(features_SkiCenterParking_2);
var lyr_SkiCenterParking_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SkiCenterParking_2, 
                style: style_SkiCenterParking_2,
                popuplayertitle: "Ski Center & Parking",
                interactive: true,
                title: '<img src="styles/legend/SkiCenterParking_2.png" /> Ski Center & Parking'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_trails_1.setVisible(true);lyr_SkiCenterParking_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_trails_1,lyr_SkiCenterParking_2];
lyr_trails_1.set('fieldAliases', {'TRAILNAME': 'TRAILNAME', 'TrailNumbe': 'TrailNumbe', 'Kilometers': 'Kilometers', 'Miles': 'Miles', });
lyr_SkiCenterParking_2.set('fieldAliases', {'id': 'id', });
lyr_trails_1.set('fieldImages', {'TRAILNAME': 'TextEdit', 'TrailNumbe': 'TextEdit', 'Kilometers': 'TextEdit', 'Miles': 'TextEdit', });
lyr_SkiCenterParking_2.set('fieldImages', {'id': 'TextEdit', });
lyr_trails_1.set('fieldLabels', {'TRAILNAME': 'inline label - always visible', 'TrailNumbe': 'inline label - always visible', 'Kilometers': 'inline label - always visible', 'Miles': 'inline label - always visible', });
lyr_SkiCenterParking_2.set('fieldLabels', {'id': 'no label', });
lyr_SkiCenterParking_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});