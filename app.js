const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
// const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));






// Views
app.get('/', (req, res) => {
	res.render('index');
});









// Start server
http.listen(PORT, () => {
	console.log(`Server Run on port: ${PORT}`)
})
