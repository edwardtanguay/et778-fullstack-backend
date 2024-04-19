import express from 'express';

const app = express();
const port = 4588;

app.get('/', (req, res) => {
	res.send('Fullstack API')
})

// app.get('/frameworks', (req, res) => {
// 	res.
// })

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
})