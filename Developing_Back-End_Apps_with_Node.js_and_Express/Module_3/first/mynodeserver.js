const express = require('express');
const app = express();
const port = 3000;

app.get('/temperature/:location_code', function (request, response) => {
    const varlocation = request.params.location_code;
    weather.current(location, function (error, temp_f) {

    });
});

let server = app.listen(port, function() => {
    console.log(`Server running at http://localhost:${port}`);
}

