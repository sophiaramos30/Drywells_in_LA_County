var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Watershedboundary_2 = new ol.format.GeoJSON();
var features_Watershedboundary_2 = format_Watershedboundary_2.readFeatures(json_Watershedboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watershedboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watershedboundary_2.addFeatures(features_Watershedboundary_2);
var lyr_Watershedboundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watershedboundary_2, 
                style: style_Watershedboundary_2,
                popuplayertitle: 'Watershed boundary',
                interactive: false,
    title: 'Watershed boundary<br />\
    <img src="styles/legend/Watershedboundary_2_0.png" /> Central Santa Monica Bay<br />\
    <img src="styles/legend/Watershedboundary_2_1.png" /> Lower Los Angeles River<br />\
    <img src="styles/legend/Watershedboundary_2_2.png" /> Lower San Gabriel River<br />\
    <img src="styles/legend/Watershedboundary_2_3.png" /> North Santa Monica Bay<br />\
    <img src="styles/legend/Watershedboundary_2_4.png" /> Rio Hondo<br />\
    <img src="styles/legend/Watershedboundary_2_5.png" /> Santa Clara River<br />\
    <img src="styles/legend/Watershedboundary_2_6.png" /> South Santa Monica Bay<br />\
    <img src="styles/legend/Watershedboundary_2_7.png" /> Upper Los Angeles River<br />\
    <img src="styles/legend/Watershedboundary_2_8.png" /> Upper San Gabriel River<br />' });
var format_SemifinalDrywells_3 = new ol.format.GeoJSON();
var features_SemifinalDrywells_3 = format_SemifinalDrywells_3.readFeatures(json_SemifinalDrywells_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemifinalDrywells_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemifinalDrywells_3.addFeatures(features_SemifinalDrywells_3);
var lyr_SemifinalDrywells_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemifinalDrywells_3, 
                style: style_SemifinalDrywells_3,
                popuplayertitle: 'Semifinal Drywells',
                interactive: true,
                title: '<img src="styles/legend/SemifinalDrywells_3.png" /> Semifinal Drywells'
            });
var format_FinalDrywells_4 = new ol.format.GeoJSON();
var features_FinalDrywells_4 = format_FinalDrywells_4.readFeatures(json_FinalDrywells_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalDrywells_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalDrywells_4.addFeatures(features_FinalDrywells_4);
var lyr_FinalDrywells_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalDrywells_4, 
                style: style_FinalDrywells_4,
                popuplayertitle: 'Final Drywells',
                interactive: true,
                title: '<img src="styles/legend/FinalDrywells_4.png" /> Final Drywells'
            });
var format_PublicDrywells_5 = new ol.format.GeoJSON();
var features_PublicDrywells_5 = format_PublicDrywells_5.readFeatures(json_PublicDrywells_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicDrywells_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicDrywells_5.addFeatures(features_PublicDrywells_5);
var lyr_PublicDrywells_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicDrywells_5, 
                style: style_PublicDrywells_5,
                popuplayertitle: 'Public Drywells',
                interactive: true,
                title: '<img src="styles/legend/PublicDrywells_5.png" /> Public Drywells'
            });
var format_PrivateDrywells_6 = new ol.format.GeoJSON();
var features_PrivateDrywells_6 = format_PrivateDrywells_6.readFeatures(json_PrivateDrywells_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateDrywells_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateDrywells_6.addFeatures(features_PrivateDrywells_6);
var lyr_PrivateDrywells_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateDrywells_6, 
                style: style_PrivateDrywells_6,
                popuplayertitle: 'Private Drywells',
                interactive: true,
                title: '<img src="styles/legend/PrivateDrywells_6.png" /> Private Drywells'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Watershedboundary_2.setVisible(true);lyr_SemifinalDrywells_3.setVisible(true);lyr_FinalDrywells_4.setVisible(true);lyr_PublicDrywells_5.setVisible(true);lyr_PrivateDrywells_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_Watershedboundary_2,lyr_SemifinalDrywells_3,lyr_FinalDrywells_4,lyr_PublicDrywells_5,lyr_PrivateDrywells_6];
lyr_Watershedboundary_2.set('fieldAliases', {'fid': 'fid', 'Watershed_': 'Watershed_', });
lyr_SemifinalDrywells_3.set('fieldAliases', {'fid': 'fid', 'Site': 'Site', 'Dry Well Count': 'Dry Well Count', 'Watershed': 'Watershed', 'Land Use': 'Land Use', 'Owner': 'Owner', 'Geology': 'Geology', 'Year of Installation': 'Year of Installation', 'Funding': 'Funding', 'Map Source': 'Map Source', 'Municipality (City or County)': 'Municipality (City or County)', 'Drywell ID': 'Drywell ID', 'Torrent ID': 'Torrent ID', 'Model or Type': 'Model or Type', 'Latitude (Y)': 'Latitude (Y)', 'Longitude (X)': 'Longitude (X)', 'Site_ID': 'Site_ID', });
lyr_FinalDrywells_4.set('fieldAliases', {'fid': 'fid', 'Site': 'Site', 'Dry Well Count': 'Dry Well Count', 'Watershed': 'Watershed', 'Land Use': 'Land Use', 'Owner': 'Owner', 'Geology': 'Geology', 'Year of Installation': 'Year of Installation', 'Funding': 'Funding', 'Map Source': 'Map Source', 'Municipality (City or County)': 'Municipality (City or County)', 'Drywell ID': 'Drywell ID', 'Torrent ID': 'Torrent ID', 'Model or Type': 'Model or Type', 'Latitude (Y)': 'Latitude (Y)', 'Longitude (X)': 'Longitude (X)', 'Site_ID': 'Site_ID', });
lyr_PublicDrywells_5.set('fieldAliases', {'fid': 'fid', 'Site': 'Site', 'Dry Well Count': 'Dry Well Count', 'Watershed': 'Watershed', 'Land Use': 'Land Use', 'Owner': 'Owner', 'Geology': 'Geology', 'Year of Installation': 'Year of Installation', 'Funding': 'Funding', 'Map Source': 'Map Source', 'Municipality (City or County)': 'Municipality (City or County)', 'Drywell ID': 'Drywell ID', 'Torrent ID': 'Torrent ID', 'Model or Type': 'Model or Type', 'Latitude (Y)': 'Latitude (Y)', 'Longitude (X)': 'Longitude (X)', 'Site_ID': 'Site_ID', });
lyr_PrivateDrywells_6.set('fieldAliases', {'Site': 'Site', 'Dry Well Count': 'Dry Well Count', 'Land Use': 'Land Use', 'Geology': 'Geology', 'Owner': 'Owner', 'Funding': 'Funding', 'Map Source': 'Map Source', 'Year of Installation': 'Year of Installation', 'Watershed': 'Watershed', 'Municipality (City or County)': 'Municipality (City or County)', 'Y': 'Y', 'X': 'X', 'Drywell ID': 'Drywell ID', });
lyr_Watershedboundary_2.set('fieldImages', {'fid': 'TextEdit', 'Watershed_': 'TextEdit', });
lyr_SemifinalDrywells_3.set('fieldImages', {'fid': 'TextEdit', 'Site': 'TextEdit', 'Dry Well Count': 'TextEdit', 'Watershed': 'TextEdit', 'Land Use': 'TextEdit', 'Owner': 'TextEdit', 'Geology': 'TextEdit', 'Year of Installation': 'TextEdit', 'Funding': 'TextEdit', 'Map Source': 'TextEdit', 'Municipality (City or County)': 'TextEdit', 'Drywell ID': 'TextEdit', 'Torrent ID': 'TextEdit', 'Model or Type': 'TextEdit', 'Latitude (Y)': 'TextEdit', 'Longitude (X)': 'TextEdit', 'Site_ID': 'ExternalResource', });
lyr_FinalDrywells_4.set('fieldImages', {'fid': 'TextEdit', 'Site': 'TextEdit', 'Dry Well Count': 'TextEdit', 'Watershed': 'TextEdit', 'Land Use': 'TextEdit', 'Owner': 'TextEdit', 'Geology': 'TextEdit', 'Year of Installation': 'TextEdit', 'Funding': 'TextEdit', 'Map Source': 'TextEdit', 'Municipality (City or County)': 'TextEdit', 'Drywell ID': 'TextEdit', 'Torrent ID': 'TextEdit', 'Model or Type': 'TextEdit', 'Latitude (Y)': 'TextEdit', 'Longitude (X)': 'TextEdit', 'Site_ID': 'ExternalResource', });
lyr_PublicDrywells_5.set('fieldImages', {'fid': 'TextEdit', 'Site': 'TextEdit', 'Dry Well Count': 'TextEdit', 'Watershed': 'TextEdit', 'Land Use': 'TextEdit', 'Owner': 'TextEdit', 'Geology': 'TextEdit', 'Year of Installation': 'TextEdit', 'Funding': 'TextEdit', 'Map Source': 'TextEdit', 'Municipality (City or County)': 'TextEdit', 'Drywell ID': 'TextEdit', 'Torrent ID': 'TextEdit', 'Model or Type': 'TextEdit', 'Latitude (Y)': 'TextEdit', 'Longitude (X)': 'TextEdit', 'Site_ID': 'ExternalResource', });
lyr_PrivateDrywells_6.set('fieldImages', {'Site': 'TextEdit', 'Dry Well Count': 'TextEdit', 'Land Use': 'TextEdit', 'Geology': 'TextEdit', 'Owner': 'TextEdit', 'Funding': 'TextEdit', 'Map Source': 'TextEdit', 'Year of Installation': 'TextEdit', 'Watershed': 'TextEdit', 'Municipality (City or County)': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Drywell ID': 'TextEdit', });
lyr_Watershedboundary_2.set('fieldLabels', {'fid': 'no label', 'Watershed_': 'no label', });
lyr_SemifinalDrywells_3.set('fieldLabels', {'fid': 'hidden field', 'Site': 'inline label - always visible', 'Dry Well Count': 'hidden field', 'Watershed': 'inline label - visible with data', 'Land Use': 'inline label - visible with data', 'Owner': 'inline label - visible with data', 'Geology': 'hidden field', 'Year of Installation': 'inline label - visible with data', 'Funding': 'hidden field', 'Map Source': 'hidden field', 'Municipality (City or County)': 'inline label - visible with data', 'Drywell ID': 'hidden field', 'Torrent ID': 'hidden field', 'Model or Type': 'hidden field', 'Latitude (Y)': 'inline label - visible with data', 'Longitude (X)': 'inline label - visible with data', 'Site_ID': 'inline label - visible with data', });
lyr_FinalDrywells_4.set('fieldLabels', {'fid': 'hidden field', 'Site': 'inline label - always visible', 'Dry Well Count': 'hidden field', 'Watershed': 'inline label - visible with data', 'Land Use': 'inline label - visible with data', 'Owner': 'inline label - visible with data', 'Geology': 'hidden field', 'Year of Installation': 'inline label - visible with data', 'Funding': 'hidden field', 'Map Source': 'hidden field', 'Municipality (City or County)': 'inline label - visible with data', 'Drywell ID': 'hidden field', 'Torrent ID': 'hidden field', 'Model or Type': 'hidden field', 'Latitude (Y)': 'inline label - visible with data', 'Longitude (X)': 'inline label - visible with data', 'Site_ID': 'inline label - visible with data', });
lyr_PublicDrywells_5.set('fieldLabels', {'fid': 'hidden field', 'Site': 'inline label - visible with data', 'Dry Well Count': 'hidden field', 'Watershed': 'inline label - visible with data', 'Land Use': 'inline label - visible with data', 'Owner': 'inline label - visible with data', 'Geology': 'hidden field', 'Year of Installation': 'inline label - visible with data', 'Funding': 'hidden field', 'Map Source': 'inline label - visible with data', 'Municipality (City or County)': 'inline label - visible with data', 'Drywell ID': 'inline label - visible with data', 'Torrent ID': 'hidden field', 'Model or Type': 'hidden field', 'Latitude (Y)': 'inline label - visible with data', 'Longitude (X)': 'inline label - visible with data', 'Site_ID': 'hidden field', });
lyr_PrivateDrywells_6.set('fieldLabels', {'Site': 'inline label - always visible', 'Dry Well Count': 'hidden field', 'Land Use': 'inline label - visible with data', 'Geology': 'hidden field', 'Owner': 'inline label - visible with data', 'Funding': 'hidden field', 'Map Source': 'inline label - visible with data', 'Year of Installation': 'inline label - visible with data', 'Watershed': 'inline label - visible with data', 'Municipality (City or County)': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Drywell ID': 'inline label - visible with data', });
lyr_PrivateDrywells_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});