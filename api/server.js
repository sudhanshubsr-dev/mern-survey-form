import express from 'express';
import router from './routes/main.router.js';
import cors from 'cors';
import db from './config/mongoose.config.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',router);

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

