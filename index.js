import express from 'express';

const app = express();
const port = 4588;

const frameworks = [
	{
		title: "React",
		url: "https://react.dev"
	},
	{
		title: "Next.js",
		url: "https://nextjs.org"
	},
	{
		title: "SvelteKit",
		url: "https://kit.svelte.dev"
	}
]

app.get('/', (req, res) => {
	res.send('Fullstack API')
})

app.get('/frameworks', (req, res) => {
	res.json(frameworks);
})

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
})