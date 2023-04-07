import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.send('It works!');
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});