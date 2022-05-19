import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './routers/Router.js';

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;
const app = express();

async function main() {
    try {
        await mongoose.connect(DB_URL)
    } catch(e) {
        console.log(e.message);
}}

main()

app.use(express.json());

app.use('/', router);
app.use('/profile/:name/:server', router);

async function serverStartup() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED'))
    } catch (e) {
        console.log(e.message)
    }
}

serverStartup()