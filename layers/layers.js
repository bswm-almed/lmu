var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_X_1 = new ol.format.GeoJSON();
var features_X_1 = format_X_1.readFeatures(json_X_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_X_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_X_1.addFeatures(features_X_1);
var lyr_X_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_X_1, 
                style: style_X_1,
                popuplayertitle: 'X',
                interactive: true,
                title: '<img src="styles/legend/X_1.png" /> X'
            });
var format_VII_2 = new ol.format.GeoJSON();
var features_VII_2 = format_VII_2.readFeatures(json_VII_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VII_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VII_2.addFeatures(features_VII_2);
var lyr_VII_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VII_2, 
                style: style_VII_2,
                popuplayertitle: 'VII',
                interactive: true,
                title: '<img src="styles/legend/VII_2.png" /> VII'
            });
var format_III_3 = new ol.format.GeoJSON();
var features_III_3 = format_III_3.readFeatures(json_III_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_III_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_III_3.addFeatures(features_III_3);
var lyr_III_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_III_3, 
                style: style_III_3,
                popuplayertitle: 'III',
                interactive: true,
                title: '<img src="styles/legend/III_3.png" /> III'
            });
var format_II_4 = new ol.format.GeoJSON();
var features_II_4 = format_II_4.readFeatures(json_II_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_II_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_II_4.addFeatures(features_II_4);
var lyr_II_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_II_4, 
                style: style_II_4,
                popuplayertitle: 'II',
                interactive: true,
                title: '<img src="styles/legend/II_4.png" /> II'
            });
var format_I_5 = new ol.format.GeoJSON();
var features_I_5 = format_I_5.readFeatures(json_I_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_I_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_I_5.addFeatures(features_I_5);
var lyr_I_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_I_5, 
                style: style_I_5,
                popuplayertitle: 'I',
                interactive: true,
                title: '<img src="styles/legend/I_5.png" /> I'
            });
var format_CAR_6 = new ol.format.GeoJSON();
var features_CAR_6 = format_CAR_6.readFeatures(json_CAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAR_6.addFeatures(features_CAR_6);
var lyr_CAR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAR_6, 
                style: style_CAR_6,
                popuplayertitle: 'CAR',
                interactive: true,
                title: '<img src="styles/legend/CAR_6.png" /> CAR'
            });
var format_XII_7 = new ol.format.GeoJSON();
var features_XII_7 = format_XII_7.readFeatures(json_XII_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XII_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XII_7.addFeatures(features_XII_7);
var lyr_XII_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XII_7, 
                style: style_XII_7,
                popuplayertitle: 'XII',
                interactive: true,
                title: '<img src="styles/legend/XII_7.png" /> XII'
            });
var format_XI_8 = new ol.format.GeoJSON();
var features_XI_8 = format_XI_8.readFeatures(json_XI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XI_8.addFeatures(features_XI_8);
var lyr_XI_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XI_8, 
                style: style_XI_8,
                popuplayertitle: 'XI',
                interactive: true,
                title: '<img src="styles/legend/XI_8.png" /> XI'
            });
var format_IVA_9 = new ol.format.GeoJSON();
var features_IVA_9 = format_IVA_9.readFeatures(json_IVA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IVA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IVA_9.addFeatures(features_IVA_9);
var lyr_IVA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IVA_9, 
                style: style_IVA_9,
                popuplayertitle: 'IV-A',
                interactive: true,
                title: '<img src="styles/legend/IVA_9.png" /> IV-A'
            });
var format_III_10 = new ol.format.GeoJSON();
var features_III_10 = format_III_10.readFeatures(json_III_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_III_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_III_10.addFeatures(features_III_10);
var lyr_III_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_III_10, 
                style: style_III_10,
                popuplayertitle: 'III',
                interactive: true,
                title: '<img src="styles/legend/III_10.png" /> III'
            });
var format_II_11 = new ol.format.GeoJSON();
var features_II_11 = format_II_11.readFeatures(json_II_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_II_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_II_11.addFeatures(features_II_11);
var lyr_II_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_II_11, 
                style: style_II_11,
                popuplayertitle: 'II',
                interactive: true,
                title: '<img src="styles/legend/II_11.png" /> II'
            });
var format_I_12 = new ol.format.GeoJSON();
var features_I_12 = format_I_12.readFeatures(json_I_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_I_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_I_12.addFeatures(features_I_12);
var lyr_I_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_I_12, 
                style: style_I_12,
                popuplayertitle: 'I',
                interactive: true,
                title: '<img src="styles/legend/I_12.png" /> I'
            });
var format_CAR_13 = new ol.format.GeoJSON();
var features_CAR_13 = format_CAR_13.readFeatures(json_CAR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAR_13.addFeatures(features_CAR_13);
var lyr_CAR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAR_13, 
                style: style_CAR_13,
                popuplayertitle: 'CAR',
                interactive: true,
                title: '<img src="styles/legend/CAR_13.png" /> CAR'
            });
var format_XIII_14 = new ol.format.GeoJSON();
var features_XIII_14 = format_XIII_14.readFeatures(json_XIII_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XIII_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XIII_14.addFeatures(features_XIII_14);
var lyr_XIII_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XIII_14, 
                style: style_XIII_14,
                popuplayertitle: 'XIII',
                interactive: true,
                title: '<img src="styles/legend/XIII_14.png" /> XIII'
            });
var format_VIII_15 = new ol.format.GeoJSON();
var features_VIII_15 = format_VIII_15.readFeatures(json_VIII_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIII_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIII_15.addFeatures(features_VIII_15);
var lyr_VIII_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIII_15, 
                style: style_VIII_15,
                popuplayertitle: 'VIII',
                interactive: true,
                title: '<img src="styles/legend/VIII_15.png" /> VIII'
            });
var format_VI_16 = new ol.format.GeoJSON();
var features_VI_16 = format_VI_16.readFeatures(json_VI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VI_16.addFeatures(features_VI_16);
var lyr_VI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VI_16, 
                style: style_VI_16,
                popuplayertitle: 'VI',
                interactive: true,
                title: '<img src="styles/legend/VI_16.png" /> VI'
            });
var format_V_17 = new ol.format.GeoJSON();
var features_V_17 = format_V_17.readFeatures(json_V_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V_17.addFeatures(features_V_17);
var lyr_V_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V_17, 
                style: style_V_17,
                popuplayertitle: 'V',
                interactive: true,
                title: '<img src="styles/legend/V_17.png" /> V'
            });
var format_IVB_2_18 = new ol.format.GeoJSON();
var features_IVB_2_18 = format_IVB_2_18.readFeatures(json_IVB_2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IVB_2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IVB_2_18.addFeatures(features_IVB_2_18);
var lyr_IVB_2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IVB_2_18, 
                style: style_IVB_2_18,
                popuplayertitle: 'IV-B_2',
                interactive: true,
                title: '<img src="styles/legend/IVB_2_18.png" /> IV-B_2'
            });
var format_IVB_3_19 = new ol.format.GeoJSON();
var features_IVB_3_19 = format_IVB_3_19.readFeatures(json_IVB_3_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IVB_3_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IVB_3_19.addFeatures(features_IVB_3_19);
var lyr_IVB_3_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IVB_3_19, 
                style: style_IVB_3_19,
                popuplayertitle: 'IV-B_3',
                interactive: true,
                title: '<img src="styles/legend/IVB_3_19.png" /> IV-B_3'
            });
var format_IVB_20 = new ol.format.GeoJSON();
var features_IVB_20 = format_IVB_20.readFeatures(json_IVB_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IVB_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IVB_20.addFeatures(features_IVB_20);
var lyr_IVB_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IVB_20, 
                style: style_IVB_20,
                popuplayertitle: 'IV-B',
                interactive: true,
                title: '<img src="styles/legend/IVB_20.png" /> IV-B'
            });
var format_BARMM_21 = new ol.format.GeoJSON();
var features_BARMM_21 = format_BARMM_21.readFeatures(json_BARMM_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARMM_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARMM_21.addFeatures(features_BARMM_21);
var lyr_BARMM_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARMM_21, 
                style: style_BARMM_21,
                popuplayertitle: 'BARMM',
                interactive: true,
                title: '<img src="styles/legend/BARMM_21.png" /> BARMM'
            });
var group_2026 = new ol.layer.Group({
                                layers: [lyr_XIII_14,lyr_VIII_15,lyr_VI_16,lyr_V_17,lyr_IVB_2_18,lyr_IVB_3_19,lyr_IVB_20,lyr_BARMM_21,],
                                fold: 'close',
                                title: '2026'});
var group_2025 = new ol.layer.Group({
                                layers: [lyr_XII_7,lyr_XI_8,lyr_IVA_9,lyr_III_10,lyr_II_11,lyr_I_12,lyr_CAR_13,],
                                fold: 'close',
                                title: '2025'});
var group_2023 = new ol.layer.Group({
                                layers: [lyr_X_1,lyr_VII_2,lyr_III_3,lyr_II_4,lyr_I_5,lyr_CAR_6,],
                                fold: 'close',
                                title: '2023'});

lyr_GoogleSatellite_0.setVisible(true);lyr_X_1.setVisible(true);lyr_VII_2.setVisible(true);lyr_III_3.setVisible(true);lyr_II_4.setVisible(true);lyr_I_5.setVisible(true);lyr_CAR_6.setVisible(true);lyr_XII_7.setVisible(true);lyr_XI_8.setVisible(true);lyr_IVA_9.setVisible(true);lyr_III_10.setVisible(true);lyr_II_11.setVisible(true);lyr_I_12.setVisible(true);lyr_CAR_13.setVisible(true);lyr_XIII_14.setVisible(true);lyr_VIII_15.setVisible(true);lyr_VI_16.setVisible(true);lyr_V_17.setVisible(true);lyr_IVB_2_18.setVisible(true);lyr_IVB_3_19.setVisible(true);lyr_IVB_20.setVisible(true);lyr_BARMM_21.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_2023,group_2025,group_2026];
lyr_X_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_VII_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_III_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_II_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_I_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_CAR_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_XII_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_XI_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_IVA_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_III_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_II_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_I_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_CAR_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_XIII_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_VIII_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_VI_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_V_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_IVB_2_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_IVB_3_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_IVB_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_BARMM_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'YEAR': 'YEAR', });
lyr_X_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_VII_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_III_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_II_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_I_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_CAR_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_XII_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_XI_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_IVA_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_III_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_II_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_I_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_CAR_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_XIII_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_VIII_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_VI_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_V_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_IVB_2_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_IVB_3_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_IVB_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_BARMM_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_X_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_VII_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_III_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_II_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_I_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_CAR_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_XII_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_XI_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_IVA_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_III_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_II_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_I_12.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_CAR_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_XIII_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_VIII_15.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_VI_16.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_V_17.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_IVB_2_18.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_IVB_3_19.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_IVB_20.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_BARMM_21.set('fieldLabels', {'OBJECTID': 'hidden field', 'Reg_Name': 'inline label - visible with data', 'Pro_Name': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'YEAR': 'inline label - visible with data', });
lyr_BARMM_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});