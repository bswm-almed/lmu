var size = 0;
var placement = 'point';

var style_IVB_2_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "6.5px \'Arial\', sans-serif";
    var labelFill = "#ea5147";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Pro_Name") !== null) {
        labelText = String(feature.get("Pro_Name"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,255,208,0.413)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
