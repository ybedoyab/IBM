const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    res.send(`${greeting}, the time is ${currentTime.toLocaleTimeString()}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});