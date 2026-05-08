var size = 0;
var placement = 'point';
function categories_Watershedboundary_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Central Santa Monica Bay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(55,126,184,0.5215686274509804)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower Los Angeles River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(230,171,2,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower San Gabriel River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(166,216,84,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'North Santa Monica Bay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(102,194,165,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rio Hondo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(255,255,51,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Santa Clara River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(166,118,29,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'South Santa Monica Bay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(247,129,191,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upper Los Angeles River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(237,81,81,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upper San Gabriel River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,26,26,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(152,78,163,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Watershedboundary_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Watershed_");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Watershedboundary_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
