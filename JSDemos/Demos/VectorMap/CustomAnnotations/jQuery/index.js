$(function(){
    var formatNumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format;
    $("#vector-map").dxVectorMap({
        bounds: [-118, 55, -80, 23],
        commonAnnotationSettings: {
            type: 'custom',
            template: function(annotation, container) {
                const data = annotation.data;
                return "<svg class='annotation'>" +
                    "<image href='../../../../images/flags/" +
                    data.name.replace(/\s/, "").toLowerCase() + ".svg' width='60' height='40' />" +
                    "<rect class='border' x='0' y='0' />" +
                    "<text x='70' y='25' class='state'>" +
                    data.name + "</text>" +
                    "<text x='0' y='60'>" +
                    "<tspan class='caption'>Capital:</tspan>" +
                    "<tspan dx='5'>" + data.capital + "</tspan>" +
                    "<tspan dy='14' x='0' class='caption'>Population:</tspan>" +
                    "<tspan dx='5'>" + formatNumber(data.population) + "</tspan>" +
                    "<tspan dy='14' x='0' class='caption'>Area:</tspan>" +
                    "<tspan dx='5'>" + formatNumber(data.area) + "</tspan>" +
                    "<tspan dx='5'>km</tspan><tspan dy='-2' class='sup'>2</tspan>" +
                    "</text></svg>";
            },
        },
        annotations: statesData,
        layers: [{
            dataSource: DevExpress.viz.map.sources.usa
        }]
    });
});