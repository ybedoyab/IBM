exports.current = function (location, resultCallback) {
    let options = {
        host: 'w1.weather.gov',
        path: '/xml/current_obs/KSFO.xml' + location + '.xml'
    };

    http.request(options, function(response) {
        let buffer = '';
        let result = '';
        
        response.on('data', function(chunk) {
            buffer += chunk;
        });
    
        response.on('end', function() {
            parseString(buffer, function(error, result) {
                if (error) {
                    resultCallback(error);
                    return;
                }
            
            resultCallback(null, result.current_observation.temp_f[0]);
            });
        });
    });
}