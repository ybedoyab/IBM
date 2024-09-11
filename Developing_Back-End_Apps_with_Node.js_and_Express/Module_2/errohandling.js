weather.current(location, function(error, temp_f) {
    if (error) {
        console.log(error);
        return;
    }

    console.log(
        "The current weather reading is %s degrees.", temp_f
    );

});

response.end("... ${temp_f}...")