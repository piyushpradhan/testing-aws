const express = require('express'); 
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
	res.send("Here's some response for the dummy request");
}); 

app.listen(port, () => {
	console.log("The app is up and running");
});