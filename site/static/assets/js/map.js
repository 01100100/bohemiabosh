var start = L.marker([52.5162540, 13.3768850]),
    cp1 = L.marker([52.3507042, 13.8607229]),
    cp2 = L.marker([52.0391540, 13.7610070]),
    cp3 = L.marker([51.5142700, 14.0807590]),
    cp4 = L.marker([50.9124570, 14.2047540]),
    end = L.marker([50.8415450, 14.2139770])
var checkpoints = L.layerGroup([start, cp1, cp2, cp3, cp4, end])

var start = L.marker([52.5162540, 13.3768850], { icon: L.divIcon({ className: 'poi', html: '<b>x</b>' }) }),
    cp1 = L.marker([52.3507042, 13.8607229], { icon: L.divIcon({ className: 'poi', html: '<b>x</b>' }) }),
    cp2 = L.marker([52.0391540, 13.7610070], { icon: L.divIcon({ className: 'poi', html: '<b>x</b>' }) }),
    cp3 = L.marker([51.5142700, 14.0807590], { icon: L.divIcon({ className: 'poi', html: '<b>x</b>' }) }),
    cp4 = L.marker([50.9124570, 14.2047540], { icon: L.divIcon({ className: 'poi', html: '<b>x</b>' }) }),
    end = L.marker([50.8415450, 14.2139770], { icon: L.divIcon({ className: 'poi', html: '<b>x</b>' }) })
var checkpoints_x = L.layerGroup([start, cp1, cp2, cp3, cp4, end])

var start = L.marker([52.5162540, 13.3768850], { icon: L.divIcon({ className: 'poi', html: '<b>🤙</b>' }) }),
    cp1 = L.marker([52.3507042, 13.8607229], { icon: L.divIcon({ className: 'poi', html: '<b>🤙</b>' }) }),
    cp2 = L.marker([52.0391540, 13.7610070], { icon: L.divIcon({ className: 'poi', html: '<b>🤙</b>' }) }),
    cp3 = L.marker([51.5142700, 14.0807590], { icon: L.divIcon({ className: 'poi', html: '<b>🤙</b>' }) }),
    cp4 = L.marker([50.9124570, 14.2047540], { icon: L.divIcon({ className: 'poi', html: '<b>🤙</b>' }) }),
    end = L.marker([50.8415450, 14.2139770], { icon: L.divIcon({ className: 'poi', html: '<b>🤙</b>' }) })
var checkpoints_emoji = L.layerGroup([start, cp1, cp2, cp3, cp4, end])

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
const map = L.map('map', {
    center: [52.0391540, 13.7610070],
    zoom: 7,
    layers: [osm, checkpoints]
});

const baseLayers = {
    'OpenStreetMap': osm,
    'OpenStreetMap_Mapnik': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    'OpenStreetMap_HOT': L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    }),
    'OpenStreetMap_BZH': L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
        bounds: [[46.2, -5.5], [50, 0.7]]
    }),
    'OpenTopoMap': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }),
    'CyclOSM': L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    "Stamen_Watercolor": L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'jpg'
    }), 'Stamen_Terrain': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 18,
        ext: 'png'
    }), 'Stamen_Toner': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }),
    'Stamen_TonerLite': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }),
    'Stamen_TerrainBackground': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 18,
        ext: 'png'
    }),
    'Esri_WorldStreetMap': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    }),
    'Esri_WorldImagery': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    'Esri_NatGeoWorldMap': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
        maxZoom: 16
    }),
    'NASAGIBS_ViirsEarthAtNight2012': L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
        bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
        minZoom: 1,
        maxZoom: 8,
        format: 'jpg',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level'
    }),
    'CartoDB_Positron': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }), 'USGS_USImagery': L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 20,
        attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
    })
};

var overlayMaps = {
    "Checkpoints": checkpoints,
    "x": checkpoints_x,
    "emoji": checkpoints_emoji
}

const layerControl = L.control.layers(baseLayers, overlayMaps).addTo(map);
