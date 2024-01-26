import express from 'express';
import signale from 'signale';
import morgan from 'morgan';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Typescript');
});
app.listen(3000, () => {
    signale.success('Server online in port 3000');
});
