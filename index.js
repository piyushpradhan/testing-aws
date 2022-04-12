const express = require('express'); 
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
	res.sendFile('/projects/cloud/trying-aws/nodeaws/client/index.html');
}); 

app.get('/api/', (req, res) => {
	res.send("Proper response received");
});

app.listen(port, () => {
	console.log("The app is up and running");
});