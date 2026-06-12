var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Carto_Dark_1 = new ol.layer.Tile({
            'title': 'Carto_Dark',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_ccaa3857edit_2 = new ol.format.GeoJSON();
var features_ccaa3857edit_2 = format_ccaa3857edit_2.readFeatures(json_ccaa3857edit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ccaa3857edit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ccaa3857edit_2.addFeatures(features_ccaa3857edit_2);
var lyr_ccaa3857edit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ccaa3857edit_2, 
                style: style_ccaa3857edit_2,
                popuplayertitle: 'ccaa3857edit',
                interactive: true,
                title: '<img src="styles/legend/ccaa3857edit_2.png" /> ccaa3857edit'
            });
var format_parquesnac3857edit_3 = new ol.format.GeoJSON();
var features_parquesnac3857edit_3 = format_parquesnac3857edit_3.readFeatures(json_parquesnac3857edit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesnac3857edit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesnac3857edit_3.addFeatures(features_parquesnac3857edit_3);
var lyr_parquesnac3857edit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesnac3857edit_3, 
                style: style_parquesnac3857edit_3,
                popuplayertitle: 'parquesnac3857edit',
                interactive: true,
                title: '<img src="styles/legend/parquesnac3857edit_3.png" /> parquesnac3857edit'
            });
var format_rios3857edit_4 = new ol.format.GeoJSON();
var features_rios3857edit_4 = format_rios3857edit_4.readFeatures(json_rios3857edit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios3857edit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios3857edit_4.addFeatures(features_rios3857edit_4);
var lyr_rios3857edit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios3857edit_4, 
                style: style_rios3857edit_4,
                popuplayertitle: 'rios3857edit',
                interactive: true,
                title: '<img src="styles/legend/rios3857edit_4.png" /> rios3857edit'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Carto_Dark_1.setVisible(true);lyr_ccaa3857edit_2.setVisible(true);lyr_parquesnac3857edit_3.setVisible(true);lyr_rios3857edit_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Carto_Dark_1,lyr_ccaa3857edit_2,lyr_parquesnac3857edit_3,lyr_rios3857edit_4];
lyr_ccaa3857edit_2.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'area': 'area', 'CCAA': 'CCAA', });
lyr_parquesnac3857edit_3.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'Área (hectáreas)', 'Nombre PN': 'Nombre Parque Nacional', });
lyr_rios3857edit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre', });
lyr_ccaa3857edit_2.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', 'area': 'TextEdit', 'CCAA': 'TextEdit', });
lyr_parquesnac3857edit_3.set('fieldImages', {'Name': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', 'area': 'TextEdit', 'Nombre PN': 'TextEdit', });
lyr_rios3857edit_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_ccaa3857edit_2.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', 'area': 'header label - visible with data', 'CCAA': 'header label - always visible', });
lyr_parquesnac3857edit_3.set('fieldLabels', {'Name': 'no label', 'Declaracio': 'header label - visible with data', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'header label - visible with data', 'Modificaci': 'no label', 'area': 'header label - always visible', 'Nombre PN': 'header label - always visible', });
lyr_rios3857edit_4.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Categoria': 'no label', 'Imagen': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Nombre Río': 'header label - always visible', });
lyr_rios3857edit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});