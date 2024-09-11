const axios = require('axios').default;

const connectToUrl = (url)=>{
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        console.log("Fulfilled")
        console.log(resp.data);
    })
    .catch(error => {
        console.log("Rejected");
        console.log(error);
    });
}