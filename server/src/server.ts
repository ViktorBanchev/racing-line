import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import mongoose from 'mongoose';


const app = express();

try {
    await mongoose.connect(process.env.MONGO_DB!, {
        dbName: 'racing-line',
    })
} catch (error) {
    console.error('Error connecting to database!')
}

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})