let options = {
    host: 'w1.weather.gov',
    path: '/xml/current_obs/KSFO.xml'
};

http.request(options, function(response) {
    let buffer = '';
    let result = '';
    
    response.on('data', function(chunk) {
        buffer += chunk;
    });

    response.on('end', function() {
        console.log(buffer);
    });
    
}).end();

